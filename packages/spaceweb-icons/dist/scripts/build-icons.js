/**
 * 1. clean with SVGO if svg file - do not remove fill attrs for _clr
 *  1.1 - Just run SVGO on modified icons - todo
 * 2. Manual verification
 * 3. React icon generation
 *  3.1 Reactify Icon
 *  3.2 Tokenize(Themify) - todo
 *  3.3 Generate ComponentName
 */

/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const fs = require('fs');
const path = require('path');
const glob = require('glob');
const prettier = require('prettier');
const rimraf = require('rimraf');

const { capitalize, pascalCase } = require('./helper');
const { IconsToFlip } = require('./icons-to-flip');

const iconsRootDir = path.join(__dirname, '..');
const srcDirectoryPath = path.join(iconsRootDir, 'svgs');
const distDirectoryPath = path.join(iconsRootDir, 'svgComponents');
const iconTemplatePath = path.join(iconsRootDir, 'scripts/icon-template.txt');

const iconTemplate = fs.readFileSync(iconTemplatePath, 'utf8');

const SVG_NAME_MATCHER = /(.+\/)(.+).svg/g;
const ICON_TEMPLATE_NAME_MATCHER = new RegExp('%%ICON_NAME%%', 'g');
const ICON_TEMPLATE_PROPS_MATCHER = new RegExp('%%ICON_PROPS%%', 'g');
const ICON_TEMPLATE_PROPS_OVERRIDES_MATCHER = new RegExp('%%ICON_PROPS_OVERRIDES%%', 'g');
const DATA_TAGS_REGEX = /data-tags="(.*?)"/;
const DEPRICATED_ICONS_REGEX = /data-deprecated="(.*?)"/;

const getDeprecateComment = newIconName => `
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use ${newIconName} instead.
 */`;

// brand/search.svg
function extractIconName(iconRelativePath) {
  const matches = [];
  let match;
  // eslint-disable-next-line no-cond-assign
  while ((match = SVG_NAME_MATCHER.exec(iconRelativePath))) {
    matches.push(match[1], match[2]);
  }
  return [matches[0].replace('/', ''), matches[1]];
}

// transform svg string to properly styled jsx, remove fill, stroke
function reactify(svgString) {
  return svgString
    .replace(/<!--.*-->\n/gm, '')
    .replace(/<\/?svg[^>]*>/gm, '')
    .replace(/^\s*\n/gm, '')
    .replace(/\n$/, '')
    .replace(/\t/g, '  ')
    .replace(/fill-rule/g, 'fillRule')
    .replace(/clip-rule/g, 'clipRule')
    .replace(/fill-opacity/g, 'fillOpacity')
    .replace(/stop-color/g, 'stopColor')
    .replace(/clip-path/g, 'clipPath')
    .replace(/stroke-dasharray/g, 'strokeDasharray')
    .trim();
}

const colorToTokenMap = {
  '#fff': 'icon05',
  '#ffffff': 'icon05',
  '#0828cc': 'icon04',
  '#ff6060': 'supportError',
  '#e1e5f8': 'ui03',
  '#f2f2f4': 'ui05',
  '#0a0a14': 'icon01',
};
// values of fill which should not be tokenized.
const ignoreFillColors = ['none'];
const FILL_REGEX = /fill="([a-zA-z0-9#]*)"/gi;

// tokenize fill color. fill="#0828cc" -> fill={theme.spr.icon01}
function themify(svgString) {
  let modifiedSvgString = svgString;

  let fillResults = FILL_REGEX.exec(svgString);
  // check if there any fill colors which cannot be tokenized.
  while (fillResults) {
    const fillColor = fillResults[1];
    const tokenValue = colorToTokenMap[fillColor.toLowerCase()];
    if (!tokenValue && !ignoreFillColors.includes(fillColor)) {
      // console.warn(`Could not find color ${fillColor} in colorToTokenMap.`);
    }
    fillResults = FILL_REGEX.exec(svgString);
  }

  Object.keys(colorToTokenMap).forEach(fillColor => {
    const tokenValue = colorToTokenMap[fillColor.toLowerCase()];
    modifiedSvgString = modifiedSvgString.replace(
      new RegExp(`fill="${fillColor}"`, 'gi'),
      `fill={theme.spr.${tokenValue}}`
    );
    modifiedSvgString = modifiedSvgString.replace(
      new RegExp(`stroke="${fillColor}"`, 'gi'),
      `stroke={theme.spr.${tokenValue}}`
    );
  });
  return modifiedSvgString;
}

const cleanOldIcons = callback => {
  // folder names are kept on this assumption that these categories won't change.
  // need to find a better way to do this instead of this hardcoding
  rimraf(`${distDirectoryPath}/{brand,line,placeholder,product,solid}`, () => {
    console.log('Deleted folders');
    callback();
  });
};

/*
 * relativePath: 'solid/search.svg'
 * */
const buildIconComponent = (iconRelativePath, prettify, iconMetaData) => {
  const [iconCategory, svgFileName] = extractIconName(iconRelativePath);
  const componentFileName = pascalCase(svgFileName);

  if (!svgFileName) {
    return;
  }

  const reactComponentName = `${capitalize(iconCategory)}${componentFileName}`;

  // console.log(`Creating ${iconCategory}/${componentFileName}.tsx from ${iconRelativePath}`);

  const iconSrc = path.join(srcDirectoryPath, iconRelativePath);
  const iconCategoryDir = path.join(distDirectoryPath, iconRelativePath, '..');
  const iconDest = path.resolve(iconCategoryDir, `./${componentFileName}.tsx`);

  // STEP-1: Build the directory based on category
  // destDir: will be "icons/<brand,line,placeholder,product,solid>"
  if (!fs.existsSync(iconCategoryDir)) {
    fs.mkdirSync(iconCategoryDir, { recursive: true });
  }

  // STEP-2: Make Icon.tsx
  //Copy svg content and build the props for template
  const svgFileContents = fs.readFileSync(path.resolve(iconSrc), 'utf8');
  const iconProps = [];
  const iconPropsOverrides = [];
  const viewBox = svgFileContents.match(/viewBox="[^"]+"/);
  const tagsMatch = svgFileContents.match(DATA_TAGS_REGEX);
  const tags = tagsMatch ? tagsMatch[1].split(',').map(x => x.trim()) : [];
  const iconDeprecationMatch = svgFileContents.match(DEPRICATED_ICONS_REGEX),
    isDeprecated = !!iconDeprecationMatch;
  const newIconToUse = iconDeprecationMatch ? iconDeprecationMatch[1] : null;

  if (viewBox) {
    iconProps.push(viewBox[0]);
  }

  if (IconsToFlip.has(svgFileName)) {
    console.log('Flipping: ', svgFileName);
    iconPropsOverrides.push('className={isRTL ? [{"transform": "scaleX(-1)"}, props.className] : props.className}');
  }

  //Create React component from template
  let iconReactComponentContent = iconTemplate
    .replace(ICON_TEMPLATE_NAME_MATCHER, reactComponentName)
    .replace(ICON_TEMPLATE_PROPS_MATCHER, iconProps.join(' '))
    .replace(ICON_TEMPLATE_PROPS_OVERRIDES_MATCHER, iconPropsOverrides.join(' '));

  let svgContent = reactify(svgFileContents);
  const shouldThemify = iconCategory === 'placeholder';
  if (shouldThemify) {
    svgContent = themify(svgContent);
  }

  iconReactComponentContent = iconReactComponentContent.replace('%%ICON_PATH%%', svgContent);
  iconReactComponentContent = iconReactComponentContent.replace(
    '%%DEPRECATED_COMMENT%%',
    isDeprecated ? getDeprecateComment(newIconToUse) : ''
  );

  // STEP-3: Write icon info in metadata
  // used for building index.ts file and driving search in icon library
  !isDeprecated &&
    iconMetaData.push({
      name: componentFileName,
      fullName: reactComponentName, //LineSearch
      path: `${iconCategory}/${componentFileName}`, //line/Search
      tags: [reactComponentName, ...tags],
      category: iconCategory,
    });

  // STEP-4: Write file to respective directory
  fs.writeFileSync(iconDest, prettify(iconReactComponentContent));
};

/*
svgs
 brand
  nike.svg
  search-solid.svg

src
  brand
    Nike.tsx (ComponentName: BrandNike)
    SearchSolid.tsx (ComponentName: BrandSearchSolid)

*/

const generateNewIcons = async () => {
  const iconMetaData = [];
  const svgIcons = ['/**/*.svg'];
  const prettierOptions = (await prettier.resolveConfig(iconsRootDir)) || {};

  const prettify = content => prettier.format(content, { parser: 'typescript', ...prettierOptions });

  svgIcons.forEach(filePath => {
    const filesInDir = glob
      .sync(path.join(srcDirectoryPath, filePath))
      .map(fPath => path.relative(srcDirectoryPath, fPath));

    filesInDir.forEach(relativePath => {
      buildIconComponent(relativePath, prettify, iconMetaData);
    });
  });

  fs.writeFileSync(
    path.join(distDirectoryPath, 'metadata.ts'),
    prettify(`export default ${JSON.stringify(iconMetaData)}`)
  );

  fs.writeFileSync(
    path.join(distDirectoryPath, 'index.ts'),
    prettify(
      iconMetaData.map(iconMeta => `export {default as ${iconMeta.fullName}} from './${iconMeta.path}';`).join('\n')
    )
  );
  console.log('spaceweb-icons: Written metadata');
  console.log(`spaceweb-icons: Built ${iconMetaData.length} icons`);
  //iconExports.push(`export {default as ${componentName}} from './${svgFile}';`);
};

cleanOldIcons(() => {
  generateNewIcons();
});

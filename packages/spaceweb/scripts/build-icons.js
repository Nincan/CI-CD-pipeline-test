// Build Icons script - https://github.com/uber/baseweb/blob/master/src/icon/build-icons.js
/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require('fs');
const path = require('path');
const prettier = require('prettier');
const { IconsToFlip } = require('./icons-to-flip');

const SVGS_DIR_PATH = path.resolve(__dirname, '../src/icon/svg');
const SVG_COMPONENT_DIR_PATH = path.resolve(__dirname, '../src/icon/components');
const ICON_TEMPLATE_PROPS_OVERRIDES_MATCHER = new RegExp('%%ICON_PROPS_OVERRIDES%%', 'g');

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function pascalCase(str) {
  return str.split('-').map(capitalize).join('');
}

function titleCase(str) {
  return str.split('-').map(capitalize).join(' ');
}

// transform svg string to properly styled jsx
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
    .trim();
}

function cleanOldIcons() {
  const allTsxFiles = fs.readdirSync(SVG_COMPONENT_DIR_PATH).filter(f => f.endsWith('.tsx'));
  allTsxFiles.forEach(f => {
    if (
      fs.readFileSync(path.resolve(SVG_COMPONENT_DIR_PATH, f), 'utf8').match(/^\/\/ SPACEWEB-GENERATED-REACT-ICON/m)
    ) {
      fs.unlinkSync(path.resolve(SVG_COMPONENT_DIR_PATH, f));
    }
  });
}

async function generateNewIcons() {
  const iconTemplate = fs.readFileSync(path.resolve(SVG_COMPONENT_DIR_PATH, './icon-template.txt'), 'utf8');
  const svgs = fs.readdirSync(SVGS_DIR_PATH).filter(f => f.endsWith('.svg'));

  const prettierOptions = (await prettier.resolveConfig(SVG_COMPONENT_DIR_PATH)) || {};
  const iconExports = [];

  svgs.forEach(async svgFilename => {
    const svgFile = svgFilename.split('.')[0];
    const componentName = pascalCase(svgFile);
    iconExports.push(`export {default as ${componentName}} from './${svgFile}';`);

    const svgFileContents = fs.readFileSync(path.resolve(SVGS_DIR_PATH, svgFilename), 'utf8');

    const iconProps = [];
    const iconPropsOverrides = [];

    const viewBox = svgFileContents.match(/viewBox="[^"]+"/);
    if (viewBox) {
      iconProps.push(viewBox[0]);
    }
    if (IconsToFlip.has(svgFilename)) {
      console.log('Flipping: ', svgFilename);
      iconPropsOverrides.push('className={isRTL ? [{"transform": "scaleX(-1)"}, props.className] : props.className}');
    }

    let result = iconTemplate
      .replace(new RegExp('%%ICON_NAME%%', 'g'), componentName)
      .replace(new RegExp('%%ICON_PROPS%%', 'g'), iconProps.join(' '))
      .replace(ICON_TEMPLATE_PROPS_OVERRIDES_MATCHER, iconPropsOverrides.join(' '))
      .replace('%%ICON_PATH%%', reactify(svgFileContents));

    fs.writeFileSync(
      path.resolve(SVG_COMPONENT_DIR_PATH, `./${svgFile}.tsx`),
      prettier.format(result, { parser: 'typescript', ...prettierOptions })
    );
  });

  console.log(`Wrote ${svgs.length} icon(s)`);
}

cleanOldIcons();
generateNewIcons();

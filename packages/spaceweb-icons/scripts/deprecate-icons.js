const fs = require('fs');
const path = require('path');

const { pascalCaseWithCategory } = require('./helper');
const deprecateIconList = require('./deprecatedIconList');

const svgsDir = path.join(__dirname, '../svgs');
const DEPRICATED_ICONS_REGEX = /(data-deprecated=")(.*?)(")/;
const SVG_TAG_REGEX = /(^\<svg)/;

const checkPath = (svgPath, missingPaths) => {
  try {
    fs.readFileSync(path.join(svgsDir, `./${svgPath}`), 'utf-8');
  } catch {
    missingPaths.push(svgPath);
  }
};

const checkAllPaths = iconList => {
  const missingPaths = [];
  Object.entries(iconList).forEach(([oldPath, newPath]) => {
    checkPath(oldPath, missingPaths);
    checkPath(newPath, missingPaths);
  });

  if (missingPaths.length > 0) {
    throw new Error(`Below paths are missing from svgs directory\n${missingPaths.join('\n')}`);
  }
};

const depreacateIcons = iconList => {
  checkAllPaths(iconList);

  Object.entries(iconList).forEach(([oldPath, newPath]) => {
    let oldSvg = fs.readFileSync(path.join(svgsDir, `./${oldPath}`), 'utf-8');

    const newIconReactCompName = pascalCaseWithCategory(newPath);

    if (oldSvg.match(DEPRICATED_ICONS_REGEX)) {
      oldSvg = oldSvg.replace(DEPRICATED_ICONS_REGEX, `$1${newIconReactCompName}$3`);
    } else {
      oldSvg = oldSvg.replace(SVG_TAG_REGEX, `$1 data-deprecated="${newIconReactCompName}" `);
    }

    fs.writeFileSync(path.join(svgsDir, oldPath), oldSvg, 'utf-8');
  });
};

depreacateIcons(deprecateIconList);

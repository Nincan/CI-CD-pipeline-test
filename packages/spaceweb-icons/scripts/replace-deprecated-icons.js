const iconList = require('./deprecatedIconList');
const { pascalCaseWithCategory } = require('./helper');

const getLibraryImportPath = iconPath =>
  `@sprinklr/spaceweb-icons/${pascalCaseWithCategory(iconPath).replace('.svg', '')}`;

const iconListWithFullPath = Object.entries(iconList).map(
  ([oldPath, newPath]) => ({
    old: getLibraryImportPath(oldPath),
    new: getLibraryImportPath(newPath),
  }),
  {}
);

module.exports = (fileInfo, api) => {
  return iconListWithFullPath.reduce(
    (interimSource, config) => interimSource.replace(config.old, config.new),
    fileInfo.source
  );
};

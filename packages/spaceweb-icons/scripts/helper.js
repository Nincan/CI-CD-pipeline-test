function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function pascalCase(str) {
  return str.split(/[-_]/).map(capitalize).join('');
}

/**
 * converts svg path solid/something_clr.svg to solid/SomethingClr.svg
 */
function pascalCaseWithCategory(str) {
  const [iconCategory, iconName] = str.split('/');

  return `${iconCategory}/${pascalCase(iconName)}`;
}

module.exports = {
  pascalCase,
  capitalize,
  pascalCaseWithCategory,
};

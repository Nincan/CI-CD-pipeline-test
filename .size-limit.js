/*
Configuration file used by "size-limit" node module.
Docs: https://github.com/ai/size-limit/#config
*/

const { resolve } = require('path');

const modifyWebpackConfig = config => {
  config.resolve = config.resolve || {};
  config.resolve.alias = config.resolve.alias || {};
  config.resolve.alias['@sprinklr/spaceweb-themes'] = resolve(__dirname, './packages/spaceweb-themes/dist');
  return config;
};

module.exports = [
  {
    name: 'spaceweb',
    path: 'packages/spaceweb/dist/allComponentsAndUtilities.js',
    ignore: ['react', 'react-dom'],
    //note: this limit is bound to increase when new components are added.
    limit: '350 KB',
    modifyWebpackConfig,
  },
  {
    // To test tree shaking
    name: 'spaceweb-tree-shake',
    path: 'packages/spaceweb/dist/esm/allComponentsAndUtilities.js',
    import: '{ Box }',
    ignore: ['react', 'react-dom'],
    //conservative limit to render a single component including complete spaceweb setup
    //If this limit increases, it can be considered as a red-flag
    limit: '36 KB',
    modifyWebpackConfig,
  },
  {
    // Hyperspace & space themes (light & dark)
    name: 'spaceweb-themes',
    path: 'packages/spaceweb-themes/allThemes.js',
    limit: '22 KB',
    modifyWebpackConfig,
  },
  {
    name: 'spaceweb-form',
    path: 'packages/spaceweb-form/dist/index.js',
    ignore: ['react', 'react-dom', '@sprinklr/spaceweb', 'lodash'],
    limit: '8 KB',
    modifyWebpackConfig,
  },
  {
    name: 'spaceweb-icons',
    path: 'packages/spaceweb-icons/dist/index.js',
    ignore: ['react', 'react-dom', '@sprinklr/spaceweb'],
    modifyWebpackConfig,
  },
  {
    name: 'spaceweb-calendar',
    path: 'packages/spaceweb-calendar/dist/index.js',
    ignore: [
      'react',
      'react-dom',
      'date-fns',
      '@sprinklr/spaceweb',
      '@sprinklr/spaceweb-themes',
      '@sprinklr/spaceweb-icons',
    ],
    limit: '55 KB',
    modifyWebpackConfig,
  },
];

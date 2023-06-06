/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */

const withImages = require('next-images');
const withMDX = require('@zeit/next-mdx')({
  extension: /\.mdx?$/,
});
const withTM = require('next-transpile-modules')([
  '@sprinklr/spaceweb',
  // '@sprinklr/types',
  '@sprinklr/spaceweb-themes',
]);

const SVG_FILES = /\.svg$/;

module.exports = withTM(
  withMDX(
    withImages({
      exclude: SVG_FILES,
      webpack: config => {
        config.resolve.modules.push(__dirname);
        config.module.rules.push({
          test: SVG_FILES,
          use: [
            {
              loader: '@svgr/webpack',
              options: {
                svgoConfig: { plugins: [{ prefixIds: false }] }, // remove prefix from classname
              },
            },
          ],
        });
        config.resolve.fallback = { fs: false, path: require.resolve('path-browserify'), os: false };

        return config;
      },
      pageExtensions: ['js', 'jsx', 'mdx', 'tsx'],
      env: {
        ENABLE_DEBUGGER: 'yes', // Turn on Styletron debugging:
      },
      swcMinify: true,
      basePath: process.env.NODE_ENV === 'production' ? '/spaceweb' : '',
      assetPrefix: process.env.NODE_ENV === 'production' ? '/spaceweb' : '',
    })
  )
);

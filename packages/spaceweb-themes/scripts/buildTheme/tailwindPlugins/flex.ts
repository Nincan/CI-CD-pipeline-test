import _ from 'lodash';
import plugin from 'tailwindcss/plugin';

export default () =>
  plugin(({ addUtilities, e, theme, variants }): void => {
    const utilities = _.fromPairs(
      _.map(theme('flex'), (value, modifier) => [
        `.${e(`flex-${modifier}`)}`,
        value,
      ])
    );

    addUtilities(utilities, variants('flex'));
  });

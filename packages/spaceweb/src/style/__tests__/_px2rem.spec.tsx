/**
 * @author Ivan Torres
 */

/* eslint no-void: 0 */

import _px2rem from '../_px2rem';
import { ThemeContext } from '../../types';
import light from '@sprinklr/spaceweb-themes/hyperspace/light';

const { classes, theme } = light;

describe('_px2rem', () => {
  const fontSize16px: ThemeContext = {
    classes,
    theme: { ...theme, htmlFontSize: '16px' },
    direction: 'ltr',
  };

  const fontSize10px: ThemeContext = {
    classes,
    theme: { ...theme, htmlFontSize: '10px' },
    direction: 'ltr',
  };

  describe('with valid `length` provided', () => {
    test('translates pixels to rems', () => {
      expect(_px2rem(fontSize16px, 4)).toEqual('0.25rem');
      expect(_px2rem(fontSize16px, '4')).toEqual('0.25rem');
      expect(_px2rem(fontSize16px, '4px')).toEqual('0.25rem');
      expect(_px2rem(fontSize10px, 4)).toEqual('0.4rem');
      expect(_px2rem(fontSize10px, '4')).toEqual('0.4rem');
      expect(_px2rem(fontSize10px, '4px')).toEqual('0.4rem');
    });
  });

  describe('when `htmlFontSize` is set to percentage', () => {
    test('translates pixels to rems calculating root font-size', () => {
      const ctx: ThemeContext = {
        classes,
        theme: { ...theme, htmlFontSize: '62.5%' },
        direction: 'ltr',
      };

      expect(_px2rem(ctx, 4)).toEqual('0.4rem');
    });
  });
});

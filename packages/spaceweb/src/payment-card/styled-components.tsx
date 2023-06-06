import { getComponentSizeTheme, getDefaultSize } from '../helpers/themeHelpers';
import { StyleFn, StyleObject } from '../types';
import { SharedProps } from '../input/types';

// todo: fix this and derive from input styles
const SIZES_STYLES_MAP = {
  xxxs: {
    height: '22px',
  },
  xs: {
    height: '30px',
  },
  sm: {
    height: '34px',
  },
  md: {
    height: '38px',
  },
  lg: {
    height: '38px',
  },
};

export const getIconWrapperStyles: StyleFn<SharedProps> = ({ theme }, { $size }): StyleObject => {
  const styles = {
    marginLeft: '',
    marginRight: '',
    lineHeight: '',
    fontSize: '',
    borderRadius: '',
    ...SIZES_STYLES_MAP[$size],
  };
  const inputSizeTheme = getComponentSizeTheme(theme, 'input', $size, getDefaultSize(theme));
  styles.marginLeft = styles.marginRight = inputSizeTheme.paddingX;
  styles.fontSize = inputSizeTheme.fontSize;
  styles.lineHeight = inputSizeTheme.lineHeight;
  styles.borderRadius = inputSizeTheme?.borderRadius || theme.input.borderRadius;
  return styles;
};

import { StyleFn, StyleObject, StyleUtils } from '../types';
import { borderColor, borderRadius, borderStyle, borderWidth } from './longHandHelpers';

export const chevronStyles: StyleFn<{ $isOpen?: boolean }> = ({ theme, px2rem }, { $isOpen }) => {
  const styles: StyleObject = {
    color: theme.spr.icon03,
    transition: 'transform 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    height: px2rem(10),
    width: px2rem(10),
  };
  if ($isOpen) {
    styles.color = theme.spr.icon04;
    styles.transform = 'rotate(180deg)';
  }
  return styles;
};

/**
 * This utility can be used when scroll track is clipping the border-radius of the container.
 * https://prod-gitlab.sprinklr.com/sprinklr/frontend/spaceweb/-/merge_requests/890#note_1765218
 */
export const transparentScrollbarStyles: StyleObject = {
  '::-webkit-scrollbar': {
    backgroundColor: 'transparent',
  },
  '::-webkit-scrollbar-thumb': {
    backgroundColor: 'darkgrey',
    // border: '4px solid transparent',
    ...borderRadius('8px'),
    ...borderWidth('4px'),
    ...borderStyle('solid'),
    ...borderColor('transparent'),
    backgroundClip: 'padding-box',
  },
};

export type OutlineProps = {
  $outlineColor?: string;
  $outlineWidth?: StyleObject['outlineWidth'];
  $outlineOffset?: StyleObject['outlineOffset'];
  $outlineStyle?: string;
};
export const getOutlineStyles = ({ theme }: StyleUtils, props: OutlineProps | undefined = {}): StyleObject => {
  // TODO: default value of outlineColor
  const {
    $outlineColor = theme.spr.focus01,
    $outlineWidth = '2px',
    $outlineOffset = '2px',
    $outlineStyle = 'solid',
  } = props;

  return {
    outlineStyle: $outlineStyle,
    outlineWidth: $outlineWidth,
    outlineColor: $outlineColor,
    outlineOffset: $outlineOffset,
  };
};

export const getFocusVisibleStyles = (utils: StyleUtils, props: OutlineProps | undefined = {}): StyleObject => ({
  ':focus-visible': getOutlineStyles(utils, props),
});

import * as React from 'react';
import { chevronStyles, transparentScrollbarStyles } from '../helpers/commonStyles';
import { getComponentSizeTheme, getDefaultSize } from '../helpers/themeHelpers';
import ChevronDown from '../icon/components/chevron-down';
import { StyleFn, StyleObject, Styles } from '../types';
import { SharedProps } from './types';
import { borderColor, borderWidth } from '../helpers/longHandHelpers';
import { getInputStyles } from '../input/styled-components';
import { StyledTombstone } from '../helpers/StyledTombstone';
import { useStyle } from '../style';
import { borderRadius as borderRadiusLongHandHelper } from '../helpers/longHandHelpers';

const selectBorderColor = (
  { theme },
  { $intent = 'default', $isPseudoFocused, $isFocused, $disabled }: SharedProps
) => {
  switch ($intent) {
    case 'default':
    default: {
      if ($isPseudoFocused || $isFocused) return borderColor(theme.spr.interactive01);
      if ($disabled) return borderColor(theme.input.disabledBorderColor);
      return { ...borderColor(theme.spr.field), ':hover': { ...borderColor(theme.spr.border06) } };
    }
    case 'success':
      return borderColor(theme.spr.supportSuccess);
    case 'warning':
      return borderColor(theme.spr.supportWarning);
    case 'error':
      return borderColor(theme.spr.supportError);
  }
};

// Removing 'overrides' injected by baseweb
export const SelectArrow = ({ $isOpen, title, overrides, ...restProps }): React.ReactElement => (
  <ChevronDown
    title={title}
    $isOpen={$isOpen}
    {...restProps}
    className={[chevronStyles, 'ml-1 cursor-pointer', restProps?.className]}
  />
);

export const getSearchIconContainerStyles: Styles = ['flex relative items-center top-0 left-0 h-auto mr-2'];

export const getSearchIconStyles: StyleFn<SharedProps> = ({ theme }, { $isOpen }) => ({
  color: $isOpen ? theme.spr.interactive01 : 'currentColor',
});

export const getControlContainerStyles: Styles = [
  getInputStyles,
  // Applying paddingX only. paddingY will be applied on ValueContainer.
  'py-0 transition-none overflow-auto',
  selectBorderColor,
  transparentScrollbarStyles,
  (utils, props): StyleObject => {
    const { $multi, $isEmpty, $type, $size } = props;
    const borderRadius =
      getComponentSizeTheme(utils.theme, 'input', $size, getDefaultSize(utils.theme))?.borderRadius ||
      utils.theme.input.borderRadius;
    // Override paddingLeft for multiSelect when values are selected
    const shouldOverridePaddingLeft = $multi && !$isEmpty && $type !== 'search';
    return {
      ...borderWidth(utils.theme.borderWidth.default),
      ...(shouldOverridePaddingLeft && { paddingLeft: utils.px2rem(2) }),
      maxHeight: '120px',
      ...borderRadiusLongHandHelper(borderRadius),
    };
  },
];

export const getValueContainerStyles: Styles = [
  // For single Select read theme values from theme.input, form multiSelect read theme values from theme.multiSelect
  getInputStyles,
  // Applying paddingY only. paddingX will be applied on ControlContainer.
  'px-0 self-start',
  ({ theme }, { $multi, $isEmpty, $size }): StyleObject => {
    const multiSelectTheme = getComponentSizeTheme(theme, 'multiSelect', $size, getDefaultSize(theme));
    return $multi && !$isEmpty
      ? {
          paddingTop: multiSelectTheme.paddingY,
          paddingBottom: multiSelectTheme.paddingY,
          paddingLeft: multiSelectTheme.paddingX,
        }
      : {};
  },
];

export const getValueTypography: Styles = ({ theme }, { $selectSize }): StyleObject => {
  const { fontSize, lineHeight } = getComponentSizeTheme(theme, 'input', $selectSize, getDefaultSize(theme));
  return { fontSize, lineHeight, height: lineHeight };
};

// BaseSelect wil render this Popover component with DropdownContainer as content and ControlContainer as children/target
export const OverlaySelectPopoverOverride = ({ content, children: inputContainer, setStickySentinelRef }) => (
  <>
    {/* When the content is scrolled, below div element hides from the viewport. Helps in rendering shadow below inputContainer */}
    <div ref={setStickySentinelRef} />
    {inputContainer}
    {typeof content === 'function' ? content() : content}
  </>
);

export const SingleValueTombstone = ({ $selectSize }) => {
  const { theme } = useStyle();
  const { lineHeight } = getComponentSizeTheme(theme, 'input', $selectSize, getDefaultSize(theme));

  return (
    <StyledTombstone data-testid="single-value-tombstone" className={['w-24 rounded-8', { height: lineHeight }]} />
  );
};

export const selectMenuOverrides = {
  Menu: {
    props: {
      overrides: {
        List: {
          props: {
            overrides: {
              Root: {
                style: (_, { $maxHeight }): StyleObject => ({ maxHeight: $maxHeight, overflow: 'auto' }),
              },
            },
          },
        },
      },
    },
  },
  MenuItem: {
    props: {
      overrides: {
        ListItem: {
          props: {
            overrides: {
              Root: {
                style: {
                  wordBreak: 'break-word',
                },
              },
            },
          },
        },
      },
    },
  },
} as const;

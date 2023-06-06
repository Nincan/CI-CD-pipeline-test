import { Select as BaseSelect, SelectProps } from 'baseui/select';
import * as React from 'react';
import { StyleUtils } from '../types';
import withThemeOverride from '../helpers/baseui/withThemeOverride';
import { borderRadius } from '../helpers/longHandHelpers';
import { useLocale, Locale } from '../locale';
import MenuItem from '../menu/menu-item';
import { styled } from '../style';
import { SharedProps, Size } from './types';
import { getComponentSizeTheme } from '../helpers/themeHelpers';
import _omit from 'lodash/omit';
import { useUID } from 'react-uid';
import { HiddenElement } from './utils/hidden-element';
import { Value } from 'baseui/select/types';
import getInterpolatedString from 'baseui/helpers/i18n-interpolation';

const StyledSelect: React.ComponentType<SelectProps> = withThemeOverride(BaseSelect, theme => ({
  borders: {
    inputBorderRadius: theme.input.borderRadius,
  },
  colors: {
    borderFocus: theme.spr.focus01,
    contentPrimary: theme.spr.text01,
    contentSecondary: theme.spr.text03,
    inputBorder: theme.spr.field, //todo: confirm with designer
    inputFill: theme.spr.ui01,
    inputFillError: theme.spr.ui01,
    inputFillDisabled: theme.spr.ui02,
    inputFillActive: theme.spr.ui01,
    inputFillPositive: theme.spr.ui01,
    inputTextDisabled: theme.spr.text02,
    inputPlaceholder: theme.spr.textPlaceholder,
    inputBorderError: theme.spr.supportError, //todo: confirm with designer
    inputBorderPositive: theme.spr.supportSuccess, //todo: confirm with designer
    inputEnhancerFill: theme.spr.icon03,
    inputEnhancerFillDisabled: theme.spr.iconDisable,
    inputEnhancerTextDisabled: theme.spr.text02,
  },
}));

const NoResults = React.forwardRef<HTMLElement, { msg?: string }>(({ msg, ...props }, ref) => {
  const locale = useLocale();
  return (
    <MenuItem button={false} ref={ref} {...props}>
      {msg || locale.select.noResultsMsg}
    </MenuItem>
  );
});

export const StyledInputContainer = styled(
  'div',
  'relative inline-block bg-transparent max-w-full border-none box-border m-0 p-0 outline-none',
  ({ theme, px2rem }: StyleUtils, props: SharedProps) => {
    const { $selectSize, $isEmpty } = props;
    const { fontSize, lineHeight } = getComponentSizeTheme(theme, 'input', $selectSize, 'md');
    return {
      boxShadow: 'none',
      marginLeft: $isEmpty ? 0 : px2rem(2),
      height: lineHeight,
      maxHeight: lineHeight,
      fontSize,
      lineHeight,
    };
  }
);

export const StyledInput = styled(
  'input',
  'bg-transparent border-none inline-block m-0 p-0 max-w-full box-content outline-none',
  (_: StyleUtils, props: SharedProps) => {
    const { $searchable, $width, $disabled } = props;
    return {
      color: 'inherit',
      lineHeight: 'inherit',
      fontSize: 'inherit',
      fontWeight: 'inherit',
      letterSpacing: 'normal',
      width: !$searchable ? '1px' : $width || '100%',
      boxShadow: 'none',
      '::placeholder': {
        color: 'transparent',
      },
      ...($disabled ? { '-webkit-text-fill-color': 'transparent' } : {}),
    };
  }
);

const DEFAULT_OVERLAY_WIDTH = '300px';
const StyledOverlayContentContainer = styled('div', 'overflow-auto', ({ px2rem }, { $overlayWidth }) => ({
  width: $overlayWidth || DEFAULT_OVERLAY_WIDTH,
  ...borderRadius('inherit'),
}));

const getCommaSeparatedValues = (value: Value, labelKey: string, locale: Locale): string => {
  const commaSeparatedValues = value?.map(val => val[labelKey]).join(',');
  return value && value.length > 0
    ? `${getInterpolatedString(locale.select.selectedValuesPrefix, { values: commaSeparatedValues })}`
    : '';
};

const InputContainer = ({
  menuId,
  size,
  $value,
  $labelKey,
  placeholder,
  ...props
}: SharedProps & { menuId: string; size: Size; $value: Value; $labelKey: string; placeholder: string } & {
  children?: React.ReactElement;
}) => {
  const locale = useLocale();
  const commaSeparatedValues = getCommaSeparatedValues($value, $labelKey, locale);

  const baseAriaDescribedBy = props['aria-describedby'] ?? '';
  const selectedValuesId = useUID();
  const ariaDescribedBy = commaSeparatedValues ? `${selectedValuesId} ${baseAriaDescribedBy}` : baseAriaDescribedBy;
  const containerRef = React.useRef<HTMLElement | null>(null);

  if (!props.$searchable) {
    return (
      <>
        {commaSeparatedValues ? <HiddenElement id={selectedValuesId}>{commaSeparatedValues}</HiddenElement> : null}
        {/* eslint-disable-next-line jsx-a11y/role-supports-aria-props -- aria-placeholder is supported with combobox. This error is caused by internal issue of jsx-a11y-plugin https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/issues/783 */}
        <StyledInputContainer
          {...props}
          $selectSize={size}
          aria-owns={props.$isOpen ? menuId : null}
          aria-describedby={ariaDescribedBy}
          aria-expanded={props.$isOpen}
          role="combobox"
          ref={containerRef}
          aria-placeholder={placeholder ?? locale.select.selectPlaceholder}
          aria-haspopup="listbox"
        >
          {props.children
            ? React.cloneElement(React.Children.only(props.children), { onFocus: () => containerRef.current?.focus() })
            : null}
        </StyledInputContainer>
      </>
    );
  } else {
    return <StyledInputContainer {...props} $selectSize={size} />;
  }
};

const Input = React.forwardRef<
  HTMLInputElement,
  SharedProps & { id: string; menuId: string; placeholder: string; $value: Value; $labelKey: string }
>(({ id, menuId, placeholder, $value, $labelKey, ...props }, ref) => {
  const locale = useLocale();
  const commaSeparatedValues = getCommaSeparatedValues($value, $labelKey, locale);
  const baseAriaDescribedBy = props['aria-describedby'] ?? '';
  const selectedValuesId = useUID();
  const ariaDescribedBy =
    commaSeparatedValues || props['aria-label'] ? `${selectedValuesId} ${baseAriaDescribedBy}` : baseAriaDescribedBy;
  return (
    <>
      {commaSeparatedValues || props['aria-label'] ? (
        <HiddenElement id={selectedValuesId}>{`${commaSeparatedValues} ${props['aria-label'] || ''}`}</HiddenElement>
      ) : null}
      <StyledInput
        {..._omit(props, 'aria-label')}
        id={id}
        aria-controls={props.$searchable && props.$isOpen ? menuId : null}
        ref={ref}
        aria-describedby={ariaDescribedBy}
        placeholder={placeholder ?? locale.select.selectPlaceholder}
      />
    </>
  );
});

export {
  StyledRoot,
  StyledClearIcon,
  StyledControlContainer,
  StyledDropdownContainer,
  StyledIconsContainer,
  StyledInputSizer,
  StyledPlaceholder,
  StyledSearchIconContainer,
  StyledSelectArrow,
  StyledSingleValue,
  StyledValueContainer,
} from 'baseui/select';
export { StyledSelect, NoResults, StyledOverlayContentContainer, InputContainer, Input };

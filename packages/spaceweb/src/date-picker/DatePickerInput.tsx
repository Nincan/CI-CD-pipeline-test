import { useState, useRef, useEffect, useMemo, ReactElement, ComponentType } from 'react';
import _noop from 'lodash/noop';

import { Box } from '../box';
import { chevronStyles } from '../helpers/commonStyles';
import { borderColor } from '../helpers/longHandHelpers';
import { Input, InputProps } from '../input';
import ChevronDown from '../icon/components/chevron-down';
import CalendarIcon from '../icon/components/calendar-solid';
import ClearIconButton from '../helpers/ClearIconButton';

import { mergeOverrides, Overrides } from '../overrides';
import { StyleObject } from '../types';
import { getInputStyles } from '../input/styled-components';

import cx from '../classNames';
import useStyle from '../style/useStyle';

type DatePickerInputProps = InputProps & {
  isOpen?: boolean;
  autoSizeInput?: boolean;
};

type InputBeforeEnhancerProps = { onClick?: () => void; disabled?: boolean };

type InputAfterEnhancerProps = InputBeforeEnhancerProps & { isOpen?: boolean };

const InputBeforeEnhancer: ComponentType<InputBeforeEnhancerProps> = ({ disabled, onClick }) => (
  <Box
    className={cx('flex items-center pl-3', {
      'cursor-pointer': !disabled,
    })}
    onClick={disabled ? _noop : onClick}
  >
    <CalendarIcon className={`${disabled ? 'spr-icon-03' : 'spr-icon-01'}`} size={14} />
  </Box>
);

const InputAfterEnhancer: ComponentType<InputAfterEnhancerProps> = ({ onClick, isOpen, disabled }) => (
  <Box
    className={cx('flex items-center pr-3', {
      'cursor-pointer': !disabled,
    })}
    onClick={disabled ? _noop : onClick}
  >
    <ChevronDown className={chevronStyles} $isOpen={isOpen} />
  </Box>
);

const DEFAULT_INPUT_WIDTH = 62;

const DatePickerInput = ({
  onFocus,
  value,
  autoSizeInput,
  overrides,
  isOpen,
  disabled,
  ...props
}: DatePickerInputProps): ReactElement => {
  const [inputWidth, setInputWidth] = useState(DEFAULT_INPUT_WIDTH);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current || typeof (ref.current as any)?.scrollWidth === 'undefined') {
      return;
    }
    const newInputWidth = ref.current.scrollWidth;
    setInputWidth(newInputWidth);
  }, [value]);

  const INPUT_OVERRIDES = useMemo(
    () =>
      mergeOverrides(
        {
          Before: {
            component: InputBeforeEnhancer,
            props: {
              onClick: onFocus,
              disabled,
            },
          },
          After: {
            component: InputAfterEnhancer,
            props: {
              onClick: onFocus,
              isOpen,
              disabled,
            },
          },
          Input: {
            props: {
              readOnly: true,
            },
            style: ({ px2rem }, { $variant }): StyleObject => {
              const styles: StyleObject = {
                ...(autoSizeInput && { width: `${inputWidth}px` }),
                caretColor: 'transparent',
              };

              styles.cursor = disabled ? 'not-allowed' : 'pointer';
              if ($variant === 'line') {
                styles.paddingLeft = px2rem(12);
              }
              return styles;
            },
          },
          InputContainer: {
            style: ({ theme }, { $intent }): StyleObject => ({
              ...(isOpen && $intent === 'default' && borderColor(theme.spr.focus01)),
              ...(autoSizeInput && {
                width: 'auto',
              }),
            }),
          },
          ClearIcon: {
            component: clearIconProps => (
              <ClearIconButton
                {...clearIconProps}
                onClick={e => {
                  e.stopPropagation();
                  clearIconProps.onClick();
                }}
              />
            ),
          },
        },
        overrides as Overrides
      ),
    [overrides, onFocus, isOpen, inputWidth, disabled, autoSizeInput]
  );

  return (
    <>
      <Input {...props} value={value} onFocus={onFocus} disabled={disabled} overrides={INPUT_OVERRIDES} />
      <Box
        ref={ref}
        className={[
          (utils): StyleObject => {
            const inputStyles = getInputStyles(utils, { $size: props.size, $disabled: disabled });
            return inputStyles as StyleObject;
          },
          {
            position: 'absolute',
            top: 0,
            visibility: 'hidden',
            height: 0,
            overflow: 'scroll',
            whiteSpace: 'pre',
            letterSpacing: 'normal',
            wordSpacing: 'normal',
          },
        ]}
      >
        {value || props.placeholder}
      </Box>
    </>
  );
};

export default DatePickerInput;

import _omit from 'lodash/omit';
import _noop from 'lodash/noop';
import { MutableRefObject, useCallback, useEffect, useMemo, useState } from 'react';
import * as React from 'react';
import { Box } from '../../../box';
import { borderRadius } from '../../../helpers/longHandHelpers';
import { Loader } from '../../../loader';
import { mergeOverrides } from '../../../overrides';
import { Search } from '../../../search';
import { useStyle } from '../../../style';
import { OverlaySelectPopoverOverride } from '../../overrides';
import { OnChangeParams, OverlaySelectProps } from '../../types';
import usePopover from './usePopover';
import useStickyElement from '../../../hooks/useStickyElement';
import useUpdateEffect from '../../../hooks/useUpdateEffect';
import { StyleFn } from '../../../types';
import { useControlRef } from './useControlRef';

const useAutoFocus = ({ autoFocus, inputRef }) => {
  const [inputElement, setInputElement] = useState<HTMLInputElement | HTMLDivElement | null>(null);
  useEffect(() => {
    if (inputRef) {
      typeof inputRef === 'function'
        ? inputRef(inputElement)
        : ((inputRef as MutableRefObject<HTMLInputElement | HTMLDivElement | null>).current = inputElement);
    }
    if (autoFocus) {
      /**
       * When input is rendered inside popover, scroll jumps to top. passing preventScroll explicitly
       */
      inputElement?.focus({ preventScroll: true });
    }
    return () => {
      if (inputRef) {
        typeof inputRef === 'function'
          ? inputRef(null)
          : ((inputRef as MutableRefObject<HTMLInputElement | HTMLDivElement | null>).current = null);
      }
    };
  }, [autoFocus, inputElement, inputRef]);
  return [inputElement, setInputElement] as const;
};

function SelectLoader(): React.ReactElement {
  return (
    <Box className={['flex items-center px-3']}>
      <Loader size={14} variant="clip" />
    </Box>
  );
}

const useSearchContainerHeight = () => {
  const [containerHeight, setHeight] = useState<number>();
  const [containerElement, setContainerElement] = useState<HTMLDivElement>();
  useEffect(() => {
    if (containerElement) {
      setHeight(containerElement.getBoundingClientRect().height);
    }
  }, [containerElement, setHeight]);

  return { setContainerElement, containerHeight };
};

/*
 * These overrides are meant for OverlaySelect and not for BaseSelect
 */
const overridesToOmit = ['SelectContainer', 'Popover'];

const useOverlaySelectOverrides = (props: OverlaySelectProps & { scrollElement: HTMLElement | null }) => {
  const {
    closeOnSelect,
    autoFocus,
    inputRef,
    filterOptions,
    onInputChange,
    searchable,
    placeholder,
    isLoading,
    onChange,
    clearable = true,
    onFocus,
    onBlur,
    onCloseResetsInput,
    controlRef,
    scrollElement,
    scrollContainer = 'overlayContainer',
  } = props;
  const [inputValue, setInputValue] = useState('');
  const { popoverOpen, togglePopoverState, closePopover, openPopover } = usePopover(props);

  useUpdateEffect(() => {
    if (!popoverOpen && onCloseResetsInput) {
      setInputValue('');
    }
  }, [onCloseResetsInput, popoverOpen]);

  const [inputElement, setInputElement] = useAutoFocus({ autoFocus, inputRef });
  useControlRef(controlRef, { closePopover, openPopover, setInputValue, inputElement });
  const filterOptionsOverride: OverlaySelectProps['filterOptions'] = useCallback(
    (options, _, excludeOptions, params) => {
      if (filterOptions) {
        return filterOptions(options, inputValue, excludeOptions, params);
      }
      return options;
    },
    [filterOptions, inputValue]
  );

  const handleInputChange = useCallback(
    e => {
      onInputChange?.(e);
      setInputValue(e.target.value);
    },
    [onInputChange]
  );

  // trigger a fake input change event (as if all text was deleted)
  // reference: https://github.com/uber/baseweb/blob/master/src/input/base-input.js#L101
  const handleOnClear = useCallback(() => {
    if (inputElement) {
      Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')?.set?.call(inputElement, '');
      const event = new Event('input', { bubbles: true, cancelable: true });
      (inputElement as HTMLInputElement | HTMLDivElement).dispatchEvent(event);
      (inputElement as HTMLInputElement | HTMLDivElement).focus();
    }
  }, [inputElement]);

  const handleValuesChange = useCallback(
    (params: OnChangeParams) => {
      if (closeOnSelect) {
        closePopover();
      }
      onChange?.(params);
    },
    [closePopover, onChange, closeOnSelect]
  );

  const { isSticky, setStickySentinelRef } = useStickyElement();
  const { containerHeight, setContainerElement } = useSearchContainerHeight();

  const memoizedOverrides = useMemo(
    () => ({
      // BaseSelect wil render this Popover component with DropdownContainer as content and ControlContainer as children/target
      Popover: {
        component: OverlaySelectPopoverOverride,
        props: {
          setStickySentinelRef,
        },
      },
      ControlContainer: {
        component: Search,
        props: {
          value: inputValue,
          onChange: handleInputChange,
          inputRef: setInputElement,
          placeholder,
          size: 'sm',
          className: 'mx-3 w-auto',
          overrides: {
            After: isLoading ? SelectLoader : () => null,
            ClearIcon: {
              props: {
                onClick: handleOnClear,
              },
            },
          },
          // override baseui's onKeyDown
          onKeyDown: _noop,
          clearable,
          onFocus,
          onBlur,
        },
      },
      Root: {
        style: (({ theme, px2rem }) =>
          ({
            paddingTop: px2rem(12),
            paddingBottom: px2rem(8),
            position: 'sticky',
            zIndex: 1,
            top: '0px',
            backgroundColor: theme.spr.popup,
            boxShadow: isSticky ? theme.spr.shadow01 : 'none',
          } as unknown)) as StyleFn,
        props: {
          ref: setContainerElement,
        },
        component: searchable ? undefined : () => null,
      },
      Menu: {
        props: {
          overrides: {
            List: {
              props: {
                overrides: {
                  Root: {
                    style: {
                      ...(searchable ? { paddingTop: 0 } : {}),
                      ...borderRadius(0),
                      ...(scrollContainer === 'menuContainer' ? {} : { overflow: 'visible' }),
                    },
                  },
                },
                ...(scrollContainer === 'menuContainer' ? {} : { scrollElement }),
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
                    style: { scrollMarginTop: `${containerHeight}px` },
                  },
                },
              },
            },
          },
          $closePopover: closePopover,
        },
      },
    }),
    [
      handleInputChange,
      inputValue,
      setInputElement,
      placeholder,
      isLoading,
      searchable,
      isSticky,
      containerHeight,
      setContainerElement,
      setStickySentinelRef,
      handleOnClear,
      closePopover,
      clearable,
      onFocus,
      onBlur,
      scrollContainer,
      scrollElement,
    ]
  );

  const overrides = useMemo(
    () => mergeOverrides(memoizedOverrides, _omit(props.overrides, overridesToOmit)),
    [memoizedOverrides, props.overrides]
  );
  return {
    overrides,
    filterOptionsOverride,
    handleValuesChange,
    popoverOpen,
    closePopover,
    openPopover,
    togglePopoverState,
  };
};

export default useOverlaySelectOverrides;

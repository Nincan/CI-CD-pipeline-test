import { useMemo } from 'react';
import * as React from 'react';
import { getComponentSizeTheme, getDefaultSize } from '../helpers/themeHelpers';
import { mergeOverrides, useOverrides } from '../overrides';
import { useStyle } from '../style';

import { Tag, TagProps } from '../tag';
import { MultiValueProps } from './types';
import { StyledTombstone } from '../helpers/StyledTombstone';
import { CLEARABLE_KEY, LOADING_KEY } from './constants';

export default function MultiValue(props: MultiValueProps): React.ReactElement {
  const {
    overrides = {},
    onActionClick,
    value,
    selectSize,
    $disabled,
    $valueByIdMap,
    $valueKey,
    $size,
    $isContainerFocused,
    ...restProps
  } = props;
  const [TagComponent, tagProps] = useOverrides(overrides.Tag, Tag);
  const { theme } = useStyle();

  const multiSelectTheme = useMemo(
    () => getComponentSizeTheme(theme, 'multiSelect', selectSize, getDefaultSize(theme)),
    [selectSize, theme]
  );

  const selectedValue = $valueByIdMap?.[value[$valueKey]];
  const disabled = $disabled || selectedValue?.[CLEARABLE_KEY] === false;
  const isLoading = value?.[LOADING_KEY] ?? selectedValue?.[LOADING_KEY];
  const tagMarginX = multiSelectTheme?.tagMarginX;
  const tagMarginY = multiSelectTheme?.tagMarginY;
  const tagSize = selectSize === 'xxxs' ? 'xxxs' : 'sm';

  return (
    <TagComponent
      variant="light"
      intent="default"
      aria-label={`${typeof restProps.children === 'string' ? `${restProps.children}, ` : ''}close by backspace`}
      tabIndex={$isContainerFocused ? 0 : -1}
      onActionClick={onActionClick}
      $item={value}
      $disabled={disabled}
      size={tagSize}
      {...restProps}
      {...tagProps}
      closeable={(tagProps as TagProps).closeable ?? !disabled}
      overrides={mergeOverrides(
        {
          Root: {
            style: [
              'box-border',
              {
                marginRight: tagMarginX,
                marginBottom: tagMarginY,
                marginTop: tagMarginY,
                maxWidth: `calc(100% - ${2 * parseInt(multiSelectTheme.tagMarginX, 10)}px)`,
              },
            ],
          },
          Action: { props: { tabIndex: $isContainerFocused ? 0 : -1 } },
        },
        (tagProps as TagProps).overrides
      )}
    >
      {isLoading ? (
        <StyledTombstone data-testid="multi-value-tombstone" className="w-20 h-4 rounded-8" />
      ) : (
        props.children
      )}
    </TagComponent>
  );
}

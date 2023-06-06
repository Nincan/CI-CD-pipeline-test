import { useMemo, useRef } from 'react';
import * as React from 'react';
import _pick from 'lodash/pick';
import { OnChangeParams, Select as DefaultSelect } from '../select';
import { ListItem, ListItemProps } from '../list';
import { Typography } from '../typography';
import FlagContainer from './flag-container';
import { useLocale } from '../locale';
import { mergeOverrides, useOverrides } from '../overrides';
import { iso2FlagEmoji, countrySelectFilterOptions } from './utils';
import { Country, CountrySelectProps, PhoneInputProps } from './types';
import { COUNTRY_SELECT_OPTIONS } from './constants';

const SelectListItem = React.forwardRef<
  HTMLElement,
  ListItemProps & { $item: Country; mapIsoToLabel?: PhoneInputProps['mapIsoToLabel'] }
>(({ mapIsoToLabel, $item: { id, label, dialCode }, ...rest }, ref) => (
  <ListItem {...rest} startEnhancer={iso2FlagEmoji(id)} ref={ref}>
    {dialCode}
    <Typography data-testid={id} data-entity-type="country-label" className="spr-text-03 ml-1">
      ({mapIsoToLabel ? mapIsoToLabel(id) : label})
    </Typography>
  </ListItem>
));

const CountrySelect = (
  props: CountrySelectProps & { inputRef: React.MutableRefObject<HTMLInputElement> }
): React.ReactElement => {
  const {
    size,
    disabled,
    inputRef,
    onChange,
    countries,
    value,
    mapIsoToLabel,
    maxDropdownHeight,
    maxDropdownWidth,
    overrides,
  } = props;

  const locale = useLocale();
  const overlayContentContainerRef = useRef();

  const mergedOverrides = useMemo(
    () =>
      mergeOverrides(
        {
          CountrySelect: {
            props: {
              overrides: {
                Menu: {
                  props: {
                    'data-testid': 'country-select-menu',
                    parentRef: overlayContentContainerRef,
                  },
                },
                MenuItem: {
                  props: {
                    overrides: {
                      ListItem: {
                        component: SelectListItem,
                        props: {
                          mapIsoToLabel,
                        },
                      },
                    },
                  },
                },
                Popover: {
                  props: {
                    returnFocus: false,
                    placement: 'bottomLeft',
                    popperOptions: {
                      modifiers: {
                        offset: {
                          enabled: true,
                          offset: size === 'sm' ? '-6px, 4px' : size === 'md' ? '-10px, 7px' : '-10px, 10px',
                        },
                      },
                    },
                  },
                },
                OverlayContentContainer: {
                  props: {
                    'data-testid': 'country-select-overlay',
                    ref: overlayContentContainerRef,
                  },
                },
              },
            },
          },
        },
        overrides
      ),
    [mapIsoToLabel, overrides, size]
  );

  const [Select, selectProps] = useOverrides(mergedOverrides?.CountrySelect, DefaultSelect);

  const flagContainerProps = {
    size,
    disabled,
    value,
    overrides: _pick(overrides, ['FlagContainer']),
  };

  return (
    // @ts-ignore
    <Select
      type="overlay"
      options={countries ?? COUNTRY_SELECT_OPTIONS}
      value={[value.country]}
      onChange={(params: Omit<OnChangeParams, 'option'> & { option: Country }) => {
        if (onChange) {
          onChange({ ...value, country: params.option });
        }
      }}
      onClose={() => {
        if (inputRef && inputRef.current) {
          inputRef.current.focus();
        }
      }}
      disabled={disabled}
      placeholder={locale.phoneInput.countrySelectPlaceholder}
      maxDropdownHeight={maxDropdownHeight}
      overlayWidth={maxDropdownWidth}
      filterOptions={countrySelectFilterOptions}
      virtual
      {...selectProps}
    >
      <FlagContainer {...flagContainerProps} />
    </Select>
  );
};

export default CountrySelect;

import type { OnChangeParams as BaseOnChangeParams } from 'baseui/select';
import _noop from 'lodash/noop';
import _pick from 'lodash/pick';
import _omit from 'lodash/omit';
import _keyBy from 'lodash/keyBy';
import memoizeOne from 'memoize-one';
import { Component } from 'react';
import * as React from 'react';
import { mergeAndConvertOverrides } from '../helpers/baseui/useConvertOverrides';
import { borderRadius, borderWidth } from '../helpers/longHandHelpers';
import Search from '../icon/components/search';
import { Loader } from '../loader';
import { Locale, LocaleConsumer } from '../locale';
import { Overrides } from '../overrides';
import { Popover } from '../popover';
import SpaceStyleConsumer from '../spaceConsumer';
import { typeAdaptor } from './adaptor';
import { STATE_CHANGE_TYPE } from './constants';
import defaultProps from './default-props';
import MultiValue from './multi-value';
import {
  getControlContainerStyles,
  getSearchIconContainerStyles,
  getSearchIconStyles,
  getValueContainerStyles,
  getValueTypography,
  SelectArrow,
  SingleValueTombstone,
} from './overrides';
import { getPlaceholderTypography } from '../input/styled-components';
import SelectMenuAdapter from './selectMenuAdapter';
import ClearIconButton from '../helpers/ClearIconButton';

import { Input, InputContainer, StyledSelect } from './styled-component';
import {
  BaseSelectProps,
  OnChangeParams,
  Option,
  Options,
  Optgroups,
  SELECT_ALL_ID,
  Value,
  CLEAR_OPTION_ID,
} from './types';
import { add$props } from '../helpers';

import { combineRefs } from '../hooks/useCombinedRef';
import { getUniqueId } from '../hooks/useUniqueId';
import { mergeOptions } from './utils/merge-options';

class BaseSelect extends Component<BaseSelectProps & typeof defaultProps, { isContainerFocused: boolean }> {
  static defaultProps = defaultProps;

  state = {
    isContainerFocused: false,
  };

  lastSelectedValue = this.props.value;

  id = getUniqueId();

  menuId = getUniqueId();

  createdOptions: Options | undefined;

  getMemoizedNormalizedOptions = memoizeOne(
    (valueKey: string, options1?: Options, options2?: Options): Value => mergeOptions(valueKey, options1, options2)
  );

  getValueByIdMap = memoizeOne((value: Value, valueKey: string) => _keyBy(value, valueKey));

  shouldDisplaySelectAll = (): boolean => {
    const { multi, hideSelectAll, options, valueKey } = this.props;
    return (
      multi && !hideSelectAll && this.getMemoizedNormalizedOptions(valueKey, options, this.createdOptions).length > 0
    );
  };

  // in creatable select, value length can be more than length of options
  isSelectAllChecked = (value: Value, options?: Options) =>
    this.props.__selectAllShouldReturnAllOptions
      ? this.props.__selectAllSelected
      : value?.length >=
        this.getMemoizedNormalizedOptions(this.props.valueKey, options, this.createdOptions).filter(
          opt => !opt.disabled
        ).length;

  getSelectOverrides =
    // FIXME: Remove use of any
    (): Overrides<any> => {
      const {
        id = this.id,
        valueKey,
        labelKey,
        value,
        multi,
        overrides,
        noResultsMsg,
        options,
        className,
        style,
        intent,
        size,
        disabled,
        captureScroll,
        placement,
        popoverMinWidth,
        searchable,
        virtual,
        ignoreBoundary,
        clearAsOption,
        selectOnTab,
      } = this.props;
      return {
        Root: {
          style: [className, style],
          // https://github.com/uber/baseweb/issues/3702#issuecomment-792665393
          props: {
            tabIndex: -1,
            onFocus: () => this.setState({ isContainerFocused: true }),
          },
        },
        StatefulMenu: {
          component: SelectMenuAdapter,
          props: {
            id: this.menuId,
            value,
            overrides: _pick(overrides, ['Menu', 'MenuItem', 'NoResults', 'Divider', 'ListItemText']),
            valueKey,
            labelKey,
            multi,
            selectAllSelected: this.isSelectAllChecked(value, options),
            shouldDisplaySelectAll: this.shouldDisplaySelectAll(),
            noResultsMsg,
            captureScroll,
            virtual,
            overscanCount: 20,
            selectOnTab,
          },
        },
        DropdownContainer: {
          props: {
            // remove `listBox` role applied by baseui. `listBox` will be applied on Menu
            role: null,
          },
          style: { ...(popoverMinWidth ? { minWidth: popoverMinWidth } : {}), ...borderRadius('inherit') },
        },
        // aria-selected is applied on SelectMenuItem. No need to apply it on OptionContent
        OptionContent: {
          style: { fontWeight: 'inherit', wordBreak: 'break-word' },
          props: { 'aria-selected': undefined },
        },
        ControlContainer: { style: getControlContainerStyles, props: add$props({ intent, size, disabled }) },
        ValueContainer: {
          style: getValueContainerStyles,
          props: { ...add$props({ intent, size, disabled }) },
        },
        MultiValue: {
          component: MultiValue,
          props: {
            'data-testid': 'combobox-selected-value',
            selectSize: size,
            $value: value,
            $valueByIdMap: this.getValueByIdMap(value, valueKey),
            $valueKey: valueKey,
            $isContainerFocused: this.state.isContainerFocused,
          },
        },
        SingleValue: {
          component: value?.[0]?.__loading ? SingleValueTombstone : undefined,
          style: getValueTypography,
          props: { 'data-testid': 'combobox-selected-value', $selectSize: size, $value: value },
        },
        InputContainer: {
          component: InputContainer,
          props: { menuId: this.menuId, size, $value: value, $labelKey: labelKey, placeholder: this.props.placeholder },
        },
        Input: {
          component: Input,
          props: {
            id,
            'aria-required': this.props['aria-required'],
            menuId: searchable ? this.menuId : null,
            onPaste: this.handlePaste,
            placeholder: this.props.placeholder,
            $value: value,
            $labelKey: labelKey,
            'aria-label': this.props['aria-label'],
          },
        },
        Placeholder: {
          style: getPlaceholderTypography,
        },
        IconsContainer: { style: 'cursor-pointer px-0 sticky top-0' },
        SelectArrow: { component: SelectArrow },
        ClearIcon: {
          component: clearAsOption ? () => null : ClearIconButton,
          props: { tabIndex: this.state.isContainerFocused ? 0 : -1 },
        },
        SearchIcon: {
          component: Search,
          style: getSearchIconStyles,
        },
        SearchIconContainer: { style: getSearchIconContainerStyles },
        Popover: {
          component: Popover,
          props: {
            placement,
            showArrow: false,
            returnFocus: false,
            overrides: { Body: { style: 'mt-2' } },
            ignoreBoundary,
          },
        },
        LoadingIndicator: {
          component: () => (
            <Loader
              size={16}
              variant="clip"
              className="mx-1"
              overrides={{
                Loader: {
                  style: { ...borderWidth('2px') },
                },
              }}
            />
          ),
        },
      };
    };

  /*
   * 1. Add selected values which are not present in Options (to display newly created option)
   * 2. Add selectAll option in multi-select
   * */
  getOptions = memoizeOne(
    (
      locale: Locale,
      createdOptions: Options | undefined,
      options?: Options,
      shouldPrependClearOption?: boolean
    ): Value => {
      const { valueKey, labelKey, clearAsOptionLabel, multi } = this.props;
      let optionArr = this.getMemoizedNormalizedOptions(valueKey, options, createdOptions);

      if (shouldPrependClearOption) {
        optionArr = [
          {
            [valueKey]: CLEAR_OPTION_ID,
            [labelKey]: clearAsOptionLabel ?? locale.select.clearOptionLabel,
            [CLEAR_OPTION_ID]: true,
          },
          ...optionArr,
        ];
      }

      if (!this.shouldDisplaySelectAll()) {
        return optionArr;
      }

      return [
        { [valueKey]: SELECT_ALL_ID, [labelKey]: locale.select.selectAllLabel, [SELECT_ALL_ID]: true },
        ...optionArr,
      ];
    }
  );

  defaultCreateOption = (label: String): Options => {
    const { labelKey, valueKey } = this.props;
    return [{ [labelKey]: label.trim(), [valueKey]: label.trim() }];
  };

  getCreatedOptions = (option: Option): Promise<Options> => {
    const { labelKey, createOption = this.defaultCreateOption } = this.props;

    if (typeof option[labelKey] === 'string') {
      return Promise.resolve(createOption(option[labelKey]));
    }
    return Promise.resolve([
      {
        ...option,
        isCreatable: false,
      },
    ]);
  };

  getCreatedValues = (options: Options): Options => {
    if (Array.isArray(options)) {
      return options.map(option => ({ ...option, isCreatable: true }));
    }
    return Object.keys(options as Optgroups).reduce(
      (acc, key) => ({
        ...acc,
        [key]: (options as Optgroups)[key]?.map(option => ({ ...option, isCreatable: true })),
      }),
      {} as Optgroups
    );
  };

  handleBlur = (e: React.FocusEvent | MouseEvent) => {
    if (!this.props.clearable && !this.props.multi && !this.props.value.length && this.lastSelectedValue.length) {
      this.props.onChange({
        option: this.lastSelectedValue[0],
        type: STATE_CHANGE_TYPE.select,
        value: this.lastSelectedValue,
      });
    }
    this.setState({ isContainerFocused: false });
    this.props?.onBlur(e);
  };

  handleChange = async (params: BaseOnChangeParams): Promise<void> => {
    const {
      options,
      onChange = _noop,
      value,
      creatable,
      valueKey,
      __selectAllShouldReturnAllOptions,
      multi,
    } = this.props;

    if (params.value.length > 0) {
      this.lastSelectedValue = params.value;
    }
    //select the user input on option selection
    if (params.type === STATE_CHANGE_TYPE.select && this.inputRef.current && 'select' in this.inputRef.current) {
      this.inputRef.current.select();
    }

    // intercept changes in select-all state
    if (params.option && params.option[SELECT_ALL_ID]) {
      const prevSelectAllState = this.isSelectAllChecked(value, options);
      // since we are not letting baseui handle state of select all, baseui will always assume that select all is unchecked
      // Thus we need to intercept STATE_CHANGE_TYPE.select type only
      if (params.type === STATE_CHANGE_TYPE.select) {
        onChange(
          prevSelectAllState
            ? { type: STATE_CHANGE_TYPE.clear, value: [] }
            : {
                type: STATE_CHANGE_TYPE.selectAll,
                value: __selectAllShouldReturnAllOptions
                  ? []
                  : mergeOptions(valueKey, options, this.createdOptions).filter(opt => !opt.disabled),
              }
        );
      }
      return;
    }

    if (params.option && params.option[CLEAR_OPTION_ID]) {
      onChange({
        type: STATE_CHANGE_TYPE.clear,
        value: [],
        option: null,
      });
      return;
    }

    if (creatable && params.type === STATE_CHANGE_TYPE.select && params.option && params.option.isCreatable) {
      const newCreatedOptions = await this.getCreatedOptions(params.option);
      this.createdOptions = mergeOptions(valueKey, this.createdOptions, newCreatedOptions);

      // select newCreatedOptions
      const newCreatedValues = this.getCreatedValues(newCreatedOptions);
      const mergedValue = mergeOptions(valueKey, value, newCreatedValues);
      onChange({
        option: { ...newCreatedOptions?.[0], isCreatable: true },
        type: STATE_CHANGE_TYPE.select,
        value: multi ? mergedValue : [mergedValue[mergedValue.length - 1]],
      });
      return;
    }

    onChange(params);
  };

  handlePaste = (e: React.ClipboardEvent): void => {
    const { onPaste, onChange = _noop, value, valueKey, multi } = this.props;

    const pastedOptions = onPaste?.(e);
    if (!pastedOptions) {
      return;
    }

    this.createdOptions = mergeOptions(valueKey, this.createdOptions, pastedOptions);

    const mergedValue = mergeOptions(valueKey, value, pastedOptions);
    onChange({ type: STATE_CHANGE_TYPE.select, value: multi ? mergedValue : [mergedValue[mergedValue.length - 1]] });
  };

  handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
    const {
      onChange = _noop,
      value,
      valueKey,
      onInputChange,
      multi,
      delimiter,
      createOption = this.defaultCreateOption,
    } = this.props;
    onInputChange?.(e);
    const val = e.target.value;
    const shouldCreateOption = typeof delimiter === 'string' && val.includes(delimiter);
    if (!shouldCreateOption) {
      return;
    }

    const labels = val.split(delimiter).filter(label => label.trim());

    let createdOptions: Options[] = [];
    try {
      const resolvedOptions = await Promise.all(labels.map(label => createOption(label)));
      createdOptions = resolvedOptions.filter(opt => !!opt).flat();
    } catch (err) {
      console.error(err);
    }
    if (createdOptions.length > 0) {
      this.createdOptions = mergeOptions(valueKey, this.createdOptions, createdOptions as Options);
      const mergedValue = mergeOptions(valueKey, value, createdOptions as Options);

      onChange({
        type: STATE_CHANGE_TYPE.inputChange,
        value: multi ? mergedValue : [mergedValue[mergedValue.length - 1]],
      });

      this.inputRef.current?.focus();
      this.inputRef.current?.setSelectionRange(0, val.length);
    }
  };

  inputRef = React.createRef<HTMLInputElement>();

  render(): React.ReactElement {
    const { options, overrides: selectOverrides, type, controlRef, inputRef, value, clearAsOption, multi } = this.props;

    const shouldPrependClearOption = clearAsOption && !multi && value && value.length > 0;

    return (
      <LocaleConsumer>
        {locale => (
          <SpaceStyleConsumer>
            {(utils): React.ReactElement => (
              <StyledSelect
                {..._omit(this.props, 'size')}
                overrides={mergeAndConvertOverrides(this.getSelectOverrides(), selectOverrides, utils)}
                controlRef={controlRef}
                inputRef={combineRefs<HTMLInputElement>(this.inputRef, inputRef)}
                options={this.getOptions(locale, this.createdOptions, options, shouldPrependClearOption)}
                onChange={this.handleChange}
                type={typeAdaptor[type]}
                onInputChange={this.handleInputChange}
                placeholder={this.props.placeholder ?? locale.select.selectPlaceholder}
                onBlur={this.handleBlur}
              />
            )}
          </SpaceStyleConsumer>
        )}
      </LocaleConsumer>
    );
  }
}

export default BaseSelect;

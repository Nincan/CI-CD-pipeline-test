import { useStyletron } from 'baseui';
import { StyledLink } from 'baseui/link';
import * as React from 'react';
import { ReactElement, PropsWithChildren, ReactNode } from 'react';
import { assertUnreachable, Error, PropTypes, TPropValue, useValueDebounce } from 'react-view';
import { Checkbox } from 'spaceweb/checkbox';
import { Input } from 'spaceweb/input';
import { Radio, RadioGroup } from 'spaceweb/radio';
import { Select } from 'spaceweb/select';
import { StatefulTooltip } from 'spaceweb/tooltip';
import { SpacePropsTypes } from '../../componentConfigs/common';

import Editor from './editor';
import { useStyle } from 'spaceweb/style';
import { StyleObject } from 'spaceweb/types';

const getTooltip = (description: string, type: string, name: string): React.ReactElement => (
  <span key={name}>
    <p>
      <b>{name}</b>: <i>{type}</i>
    </p>
    <p>{description}</p>
  </span>
);

const Spacing = ({ children }: PropsWithChildren<{}>): ReactElement => {
  const { css, px2rem } = useStyle();
  return <div className={css({ margin: `${px2rem(10)} 0` })}>{children}</div>;
};

const Label = ({ children, tooltip }: PropsWithChildren<{ tooltip: ReactNode }>): ReactElement => {
  const [, $theme] = useStyletron();
  const { css } = useStyle();

  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label
      className={css({
        ...$theme.typography.font250,
        color: $theme.colors.contentPrimary,
      })}
    >
      <StatefulTooltip accessibilityType="tooltip" content={tooltip} size="lg">
        <span
          className={css({
            textDecoration: 'underline',
            ':hover': {
              color: $theme.colors.contentSecondary,
            },
          })}
        >
          {children}
        </span>
      </StatefulTooltip>
    </label>
  );
};

const Knob = ({
  name,
  error,
  type,
  val: globalVal,
  set: globalSet,
  options = {},
  description,
  placeholder,
  enumName,
  custom,
}: {
  name: string;
  error: string | null;
  description: string;
  val: TPropValue;
  set: (val: TPropValue) => void;
  type: PropTypes;
  options?: { [key: string]: string };
  placeholder?: string;
  enumName?: string;
  custom?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}): ReactElement | null => {
  const [val, set] = useValueDebounce<TPropValue>(globalVal, globalSet);
  const [, $theme] = useStyletron();
  const { css, px2rem, theme } = useStyle();

  switch (type) {
    case PropTypes.Ref:
      return (
        <Spacing>
          <Label tooltip={getTooltip(description, type, name)}>{name}</Label>
          <StyledLink
            href="https://reactjs.org/docs/refs-and-the-dom.html"
            target="_blank"
            rel="noopener noreferrer"
            $style={{
              fontSize: '14px',
              display: 'block',
            }}
          >
            React Ref documentation
          </StyledLink>
          <Error msg={error} isPopup />
        </Spacing>
      );
    case PropTypes.String:
    case PropTypes.Date:
    case PropTypes.Number:
      return (
        <Spacing>
          <Label tooltip={getTooltip(description, type, name)}>{name}</Label>
          <Input
            intent={error ? 'error' : undefined}
            onChange={(event): void => set((event.target as HTMLInputElement).value)}
            placeholder={placeholder}
            size="md"
            value={val ? String(val) : undefined}
            overrides={{ Input: { props: { spellCheck: false } } }}
          />
          <Error msg={error} isPopup />
        </Spacing>
      );
    case PropTypes.Boolean:
      return (
        <Spacing>
          <Checkbox
            checked={Boolean(val)}
            onChange={(): void => {
              globalSet(!val);
            }}
          >
            <StatefulTooltip
              accessibilityType="tooltip"
              content={getTooltip(description, type, name)}
              placement="right"
              size="lg"
            >
              <span
                className={css({
                  textDecoration: 'underline',
                  ':hover': {
                    color: $theme.colors.contentSecondary,
                  },
                })}
              >
                {name}
              </span>
            </StatefulTooltip>
          </Checkbox>
          <Error msg={error} isPopup />
        </Spacing>
      );
    case PropTypes.Enum: {
      const optionsKeys = Object.keys(options);
      const numberOfOptions = optionsKeys.length;
      const selectOptions = optionsKeys.map(key => ({
        id: key,
        option: options[key],
      }));
      const valueKey = val && String(val).split('.')[1];
      return (
        <Spacing>
          <Label tooltip={getTooltip(description, type, name)}>{name}</Label>
          {numberOfOptions < 7 ? (
            <RadioGroup
              name="radio group"
              align="horizontal"
              overrides={{
                RadioGroupRoot: {
                  style: (): StyleObject => ({
                    flexWrap: 'wrap',
                    marginTop: 0,
                    marginBottom: px2rem(8),
                  }),
                },
              }}
              onChange={(e): void => {
                globalSet((e.target as HTMLInputElement).value);
              }}
              value={String(val)}
            >
              {Object.keys(options).map(opt => (
                <Radio
                  key={opt}
                  value={`${enumName || name.toUpperCase()}.${opt}`}
                  overrides={{
                    Root: {
                      style: (): StyleObject => ({
                        marginRight: $theme.sizing.scale600,
                        marginTop: 0,
                        marginBottom: 0,
                      }),
                    },
                    Label: {
                      style: (): StyleObject => theme.typography.bs1,
                    },
                  }}
                >
                  {opt}
                </Radio>
              ))}
            </RadioGroup>
          ) : (
            <Select
              options={selectOptions}
              clearable={false}
              value={[{ id: valueKey || '', option: valueKey }]}
              labelKey="option"
              valueKey="id"
              onChange={({ value }): void => {
                globalSet(`${enumName || name.toUpperCase()}.${value[0].id}`);
              }}
            />
          )}
          <Error msg={error} isPopup />
        </Spacing>
      );
    }
    case PropTypes.ReactNode:
    case PropTypes.Function:
    case PropTypes.Array:
    case PropTypes.Object:
      return (
        <Spacing>
          <Label tooltip={getTooltip(description, type, name)}>{name}</Label>
          <Editor
            onChange={(code): void => {
              globalSet(code);
            }}
            code={val ? String(val) : ''}
            placeholder={placeholder}
            small
          />
          <Error msg={error} isPopup />
        </Spacing>
      );
    case PropTypes.Custom:
      if (custom.spaceKnobPropFlag !== true) return null;

      if (custom.type === SpacePropsTypes.FixedString) {
        const numberOfOptions = custom.options.length;
        const selectOptions = custom.options.map((key: unknown) => ({
          id: key,
          option: key,
        }));
        return (
          <Spacing>
            <Label tooltip={getTooltip(description, type, name)}>{name}</Label>
            {numberOfOptions < 7 ? (
              <RadioGroup
                name="radio group"
                align="horizontal"
                overrides={{
                  RadioGroupRoot: {
                    style: (): StyleObject => ({
                      flexWrap: 'wrap',
                      marginTop: 0,
                      marginBottom: px2rem(8),
                    }),
                  },
                }}
                onChange={(e): void => {
                  globalSet((e.target as HTMLInputElement).value);
                }}
                value={String(val)}
              >
                {custom.options.map(
                  (opt: string): React.ReactElement => (
                    <Radio
                      key={opt}
                      value={opt}
                      overrides={{
                        Root: {
                          style: (): StyleObject => ({
                            marginRight: $theme.sizing.scale600,
                            marginTop: 0,
                            marginBottom: 0,
                          }),
                        },
                        Label: {
                          style: (): StyleObject => theme.typography.bs1,
                        },
                      }}
                    >
                      {opt}
                    </Radio>
                  )
                )}
              </RadioGroup>
            ) : (
              <Select
                options={selectOptions}
                clearable={false}
                value={[{ id: String(val || ''), option: val }]}
                labelKey="option"
                valueKey="id"
                onChange={({ value }): void => {
                  globalSet(value[0].id);
                }}
              />
            )}
            <Error msg={error} isPopup />
          </Spacing>
        );
      }
      return null;
    default:
      return assertUnreachable();
  }
};

export default Knob;

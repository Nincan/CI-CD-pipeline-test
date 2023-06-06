import * as React from 'react';
import { ReactElement } from 'react';
import { Accordion, Panel } from 'baseui/accordion';
import { Typography } from 'spaceweb/typography';
import Link from 'next/link';
import { StyledLink } from 'baseui/link';

import Override, { getHighlightStyles } from './override';
import NestedTooltip from './nested-tooltip';
import { useThemeContext } from '../themeProperties';
import { YardConfig } from '../../componentConfigs/types';

type TOverridesProps = {
  set: any;
  overrides: any;
  componentConfig: any;
  componentName: string;
  isNested?: boolean;
};

const Header = ({ componentName }) => (
  <Typography className="mx-2 mb-4" variant="l2" $as="p">
    Additionally, you can fully customize any part of the {componentName} component through the overrides prop (
    <Link href="/guides/understanding-overrides">
      <StyledLink href="/guides/understanding-overrides">learn more</StyledLink>
    </Link>
    ). Try to update different <b>style overrides</b> in the explorer below:
  </Typography>
);

const Overrides = ({
  overrides,
  set,
  componentName,
  componentConfig,
  isNested,
}: TOverridesProps): ReactElement | null => {
  const { isDarkMode } = useThemeContext();
  const isLightTheme = !isDarkMode;
  if (!overrides || !overrides.custom || !overrides.custom.names || overrides.custom.names.length === 0) {
    return null;
  }

  const overridesObj: {
    [key: string]: {
      style: any;
      nested?: YardConfig;
      nestedValue?: any;
    };
  } = {};

  overrides.custom.names.forEach((key: string | YardConfig) => {
    const stringKey = typeof key === 'string' ? key : key.componentName;
    if (overrides.value && overrides.value[stringKey]) {
      overridesObj[stringKey] = overrides.value[stringKey];
    } else {
      overridesObj[stringKey] = {
        style: null,
      };
    }
    overridesObj[stringKey]['nested'] = typeof key === 'string' ? undefined : key;
  });

  const getNewState = (expanded: (string | number)[]) => {
    const returnValue: any = { ...overrides.value };
    if (overrides.value) {
      Object.keys(overrides.value).forEach(key => {
        returnValue[key]['active'] = false;
      });
    }
    expanded.forEach(key => {
      if (overridesObj[key].nestedValue || overridesObj[key].nested) {
        if (!returnValue[key]) {
          returnValue[key] = {
            style: undefined,
          };
        }
      } else if (overridesObj[key].style === null) {
        returnValue[key] = {
          style: getHighlightStyles(isLightTheme, []),
        };
      } else {
        returnValue[key] = {
          style: overridesObj[key].style,
        };
      }
      returnValue[key]['active'] = true;
    });
    return returnValue;
  };

  const handleChange = ({ expanded }: { expanded: (string | number)[] }) => {
    const newState = getNewState(expanded);
    set(Object.keys(newState).length > 0 ? newState : undefined);
  };

  const expanded = Object.keys(overrides.value ? overrides.value : {})
    .map(key => {
      const override = overrides.value[key];
      if (override.active) {
        return key;
      } else {
        return null;
      }
    })
    .filter(val => !!val);

  return (
    <React.Fragment>
      {!isNested && <Header componentName={componentName} />}
      <Accordion
        onChange={handleChange}
        accordion={false}
        overrides={{
          Root: {
            style: {
              marginLeft: isNested ? '12px' : '0px',
              width: 'auto',
            },
          },
        }}
        initialState={{ expanded: expanded as string[] }}
      >
        {Object.keys(overridesObj).map(overrideKey => {
          const { nested } = overridesObj[overrideKey];
          return (
            <Panel
              key={overrideKey}
              title={
                <span>
                  {overrideKey}
                  {nested && <NestedTooltip name={componentName} nestedName={nested.componentName} />}
                </span>
              }
              overrides={{
                Content: {
                  style: {
                    backgroundColor: 'transparent',
                    paddingLeft: 0,
                    paddingRight: 0,
                    ...(nested && {
                      paddingTop: 0,
                      paddingBottom: 0,
                    }),
                  },
                },
              }}
            >
              {nested ? (
                <Overrides
                  overrides={{
                    ...nested.props.overrides,
                    value:
                      overrides.value && overrides.value[overrideKey]
                        ? overrides.value[overrideKey].nestedValue
                        : undefined,
                  }}
                  componentConfig={nested.props}
                  componentName={nested.componentName}
                  set={(propValue: any) => {
                    set(
                      {
                        ...getNewState(expanded as string[]),
                        [overrideKey]: {
                          active: Object.entries(propValue).some(([, val]: any) => val.active),
                          nestedValue: propValue,
                        },
                      },
                      'overrides'
                    );
                  }}
                  isNested
                />
              ) : (
                <Override
                  key={overrideKey}
                  overrideKey={overrideKey}
                  overridesObj={overridesObj}
                  overrides={overrides}
                  componentConfig={componentConfig}
                  componentName={componentName}
                  set={set}
                />
              )}
            </Panel>
          );
        })}
      </Accordion>
    </React.Fragment>
  );
};

export default Overrides;

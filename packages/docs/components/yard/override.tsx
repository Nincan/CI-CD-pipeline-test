import * as React from 'react';
import { ReactElement, PropsWithChildren } from 'react';

import { formatCode } from 'react-view';
import { Button } from 'spaceweb/button';
import { ButtonGroup } from 'spaceweb/button-group';
import { StatefulTooltip } from 'spaceweb/tooltip';
import { toggleOverrideSharedProps } from './ast';
import Editor from './editor';
import { useThemeContext } from '../themeProperties';

export const getHighlightStyles = (isLightTheme: boolean, sharedProps: string[]) =>
  formatCode(`({theme}, { ${sharedProps.join(',')} }) => { return ({
    outline: \`1px solid \${theme.spr.focus01}\`,
    backgroundColor: theme.spr.highlight,
    })}
  `);

const getEmptyStyles = (sharedProps: string[]) =>
  formatCode(`({theme}, { ${sharedProps.join(',')} }) => { return ({})}
`);

type TProps = {
  overrideKey: string;
  overrides: any;
  overridesObj: any;
  componentConfig: any;
  componentName: string;
  set: (args: any) => void;
};

const SharedPropsTooltip = ({
  componentConfig,
  children,
}: PropsWithChildren<{ componentConfig: any }>): ReactElement => {
  const sharedProps = Object.keys(componentConfig.overrides.custom.sharedProps);
  const getDescription = (name: string): React.ReactNode => {
    let metaObj: { type: string; description: string } | undefined;
    if (typeof componentConfig.overrides.custom.sharedProps[name] === 'string') {
      metaObj = componentConfig[componentConfig.overrides.custom.sharedProps[name]];
    } else {
      metaObj = componentConfig.overrides.custom.sharedProps[name];
    }
    if (!metaObj) return null;
    return (
      metaObj &&
      metaObj.type &&
      metaObj.description && (
        <>
          <i>{metaObj.type}</i> - {metaObj.description}
        </>
      )
    );
  };
  return (
    <StatefulTooltip
      accessibilityType="tooltip"
      placement="bottomLeft"
      content={
        <>
          <p>These props are passed to the override function:</p>
          <ul>
            <li>
              <strong>$theme</strong>: <i>ThemeT</i> - Global theme object.
            </li>
            {sharedProps.map(prop => {
              const description = getDescription(prop);
              return (
                description && (
                  <li key={prop}>
                    <strong>{prop}</strong>: {description}
                  </li>
                )
              );
            })}
          </ul>
        </>
      }
    >
      {children}
    </StatefulTooltip>
  );
};

const Override = ({ overrideKey, overrides, overridesObj, componentConfig, set }: TProps): ReactElement => {
  const { isDarkMode } = useThemeContext();
  const isLightTheme = !isDarkMode;
  const code = overridesObj[overrideKey] ? overridesObj[overrideKey].style : '';
  return (
    <>
      <Editor
        onChange={newCode => {
          set({
            ...overrides.value,
            [overrideKey]: { style: newCode, active: true },
          });
        }}
        code={code}
      />
      <ButtonGroup size="sm" overrides={{ Root: { style: 'mt-2 md:flex-wrap' } }}>
        <Button
          variant="tertiary"
          onClick={() => {
            set({
              ...overrides.value,
              [overrideKey]: {
                style: formatCode(overrides.value[overrideKey].style),
                active: true,
              },
            });
          }}
        >
          Format
        </Button>
        <Button
          variant="tertiary"
          onClick={() => {
            const newCode = formatCode(
              toggleOverrideSharedProps(overrides.value[overrideKey].style, Object.keys(overrides.custom.sharedProps))
            );
            set({
              ...overrides.value,
              [overrideKey]: {
                style: newCode,
                active: true,
              },
            });
          }}
        >
          <SharedPropsTooltip componentConfig={componentConfig}>Toggle shared props</SharedPropsTooltip>
        </Button>
        <Button
          variant="tertiary"
          onClick={() => {
            set({
              ...overrides.value,
              [overrideKey]: {
                style: getEmptyStyles([]),
                active: true,
              },
            });
          }}
        >
          Empty
        </Button>
        <Button
          variant="tertiary"
          onClick={() => {
            set({
              ...overrides.value,
              [overrideKey]: {
                style: getHighlightStyles(isLightTheme, []),
                active: true,
              },
            });
          }}
        >
          Reset
        </Button>
      </ButtonGroup>
    </>
  );
};

export default Override;

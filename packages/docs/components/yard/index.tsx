import { ReactElement } from 'react';

// baseui imports
import { createTheme, lightThemePrimitives, darkThemePrimitives, ThemeProvider } from 'baseui';
import { Card } from 'baseui/card';
import { useRouter } from 'next/router';

import { useView, Compiler, Error, TProp } from 'react-view';
import { Loader } from 'spaceweb/loader';
import { useStyle } from 'spaceweb/style';

// yard (baseweb customization of react-view)
import { TProviderValue } from './provider';
import { customProps, TCustomPropFields, createSpaceCustomProp } from './custom-props';
import Overrides from './overrides';
import Editor from './editor';
import ActionButtons from './action-buttons';
import Knobs from './knobs';
import { StatefulTabs, TabsPanel, TabList, Tab } from 'spaceweb/tabs';
import { countProps, countOverrides } from './utils';
import PropsTooltip from './props-tooltip';
import { YardConfig } from '../../componentConfigs/types';
import { SpacePropsTypes } from '../../componentConfigs/common';
import { Box } from 'spaceweb/box';

const Yard = ({
  componentName,
  placeholderHeight,
  scope,
  props,
  imports,
  queryStringName,
  mapTokensToProps,
}: YardConfig & {
  componentName: string;
  placeholderHeight: number;
  queryStringName?: string;
  mapTokensToProps?: { [key: string]: any };
}): ReactElement => {
  const { theme } = useStyle();
  const { query, push, pathname } = useRouter();

  const initialCode = (typeof queryStringName !== 'undefined' ? query[queryStringName] : query.code) as string;

  let changedProps = props,
    changedCustomProps = customProps;

  Object.keys(changedProps).forEach(propName => {
    if (changedProps[propName].type === SpacePropsTypes.FixedString) {
      changedProps = {
        ...changedProps,
        [propName]: {
          ...changedProps[propName],
          type: SpacePropsTypes.Custom,
          custom: {
            spaceKnobPropFlag: true,
            type: SpacePropsTypes.FixedString,
            options: changedProps[propName].options,
          },
        },
      };
      changedCustomProps = {
        ...changedCustomProps,
        [propName]: createSpaceCustomProp(SpacePropsTypes.FixedString),
      };
    }
  });

  const params = useView<TProviderValue, TCustomPropFields>({
    componentName,
    props: changedProps as { [key: string]: TProp },
    scope: {
      ...scope,
      ThemeProvider,
      lightThemePrimitives,
      darkThemePrimitives,
      createTheme,
    },
    imports,
    customProps: changedCustomProps,
    initialCode,
    onUpdate: ({ code }) => {
      const queryKey = queryStringName || 'code';
      push(
        {
          pathname,
          query: {
            [queryKey]: code,
          },
        },
        undefined,
        { scroll: false, shallow: true }
      );
    },
  });

  const activeProps = countProps(params.knobProps.state, changedProps as { [key: string]: TProp });
  const activeOverrides = countOverrides(params.knobProps.state.overrides);

  const showOverrides = props.overrides?.custom?.names?.length > 0;
  const showTheme = false; //theme.length > 0;

  return (
    <Card overrides={{ Root: { style: { backgroundColor: theme.spr.ui01, overflow: 'unset' } } }}>
      <Compiler
        {...params.compilerProps}
        minHeight={placeholderHeight}
        placeholder={() => (
          <Box
            className={[
              'w-full flex justify-center items-center',
              {
                height: `${placeholderHeight}px`,
              },
            ]}
          >
            <Loader delay={0} size={placeholderHeight > 50 ? 50 : placeholderHeight} variant="clip" />
          </Box>
        )}
      />
      <Error msg={params.errorProps.msg} isPopup />
      {showOverrides || showTheme ? (
        <StatefulTabs>
          <TabList className={['mb-4 pl-0', { backgroundColor: 'transparent' }]}>
            <Tab className="ml-0">{`Props${activeProps > 0 ? ` (${activeProps})` : ''}`}</Tab>
            {showOverrides && (
              <Tab className="ml-0">{`Style Overrides${activeOverrides > 0 ? ` (${activeOverrides})` : ''}`}</Tab>
            )}
          </TabList>
          <TabsPanel tabId="0">
            <Knobs {...params.knobProps} />
          </TabsPanel>
          <TabsPanel tabId="1">
            <Overrides
              componentName={componentName}
              componentConfig={props}
              overrides={params.knobProps.state.overrides}
              set={(propValue: any) => {
                params.knobProps.set(propValue, 'overrides');
              }}
            />
          </TabsPanel>
        </StatefulTabs>
      ) : (
        <Box className="mb-4">
          <Knobs {...params.knobProps} />
        </Box>
      )}
      <Editor
        {...params.editorProps}
        transformToken={tokenProps => {
          const token = tokenProps.children.trim();
          if (mapTokensToProps && mapTokensToProps[token]) {
            return <PropsTooltip {...tokenProps} typeDefinition={mapTokensToProps[token]} />;
          }
          return <span {...tokenProps} />;
        }}
      />
      <Error {...params.errorProps} />
      <ActionButtons
        {...params.actions}
        code={params.editorProps.code}
        componentName={componentName}
        importsConfig={imports}
      />
    </Card>
  );
};

export default Yard;

import { ReactElement, ReactNode, useEffect, useMemo } from 'react';
import * as React from 'react';

import CustomBaseProvider from './CustomBaseProvider';
import { initFocusVisible, teardown } from 'baseui/utils/focusVisible';
import { StandardEngine } from 'styletron-standard';

import { Direction, ThemeModule } from '@sprinklr/spaceweb-themes/types';

import { DocumentProvider, useDocument } from './DocumentProvider';
import { Override } from '../overrides';
import { StyleProvider, getStyleEngine } from '../styleEngine';
import BASEWEB_THEMES from '../themes';
import { LocaleProvider } from '../locale';
import { LAYERS_DEFAULT_ZINDEX, LayersManager } from '../layer';
import { ThemeProvider, useTheme } from '../theme';

export type Props = {
  children: ReactNode;
  debug?: boolean;
  direction?: Direction;
  langCode?: string;
  styleEngine?: StandardEngine;
  layersZIndex?: number;
  overrides?: {
    AppContainer?: Override<Record<string, any>>;
    LayersContainer?: Override<Record<string, any>>;
  };
  theme: ThemeModule;
  locale?: React.ComponentProps<typeof LocaleProvider>['locale'];
  ownerDocument?: Document;
  density?: 'COMPACT' | 'COMFORTABLE' | 'SPACIOUS' | 'DEFAULT' | undefined;
};

function SpacewebProvider(props: Omit<Props, 'ownerDocument'>): ReactElement {
  const {
    children,
    layersZIndex = LAYERS_DEFAULT_ZINDEX,
    overrides,
    theme,
    locale,
    debug = false,
    density,
    langCode,
  } = props;
  const doc = useDocument();
  const styleEngine = props.styleEngine || getStyleEngine(doc);

  // TODO: This must be removed once baseui code exposes focusVisible from utils/index
  // https://github.com/uber/baseweb/issues/3322
  useEffect(() => {
    initFocusVisible({ ownerDocument: doc });
    return (): void => teardown(doc);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const outerTheme = useTheme();
  const direction = props.direction || outerTheme.direction || 'ltr';

  const localeValue = useMemo(
    () => ({
      ...locale,
      langCode,
    }),
    [locale, langCode]
  );

  const themeValue = useMemo(
    () => ({
      ...theme,
      direction,
    }),
    [theme, direction]
  );

  const baseProviderTheme = useMemo(
    () => ({
      ...BASEWEB_THEMES[theme.theme.name],
      direction,
    }),
    [direction, theme]
  );

  return (
    <StyleProvider debug={debug} styleEngine={styleEngine}>
      <ThemeProvider theme={themeValue} containerElement={doc?.documentElement} density={density}>
        <LocaleProvider locale={localeValue}>
          <CustomBaseProvider overrides={overrides} theme={baseProviderTheme}>
            <LayersManager zIndex={layersZIndex} host={doc?.body}>
              {children}
            </LayersManager>
          </CustomBaseProvider>
        </LocaleProvider>
      </ThemeProvider>
    </StyleProvider>
  );
}

function SpacewebProviderWithDoc({ ownerDocument, children, ...rest }: Props): ReactElement {
  return (
    <DocumentProvider value={ownerDocument}>
      <SpacewebProvider {...rest}>{children}</SpacewebProvider>
    </DocumentProvider>
  );
}

export default SpacewebProviderWithDoc;

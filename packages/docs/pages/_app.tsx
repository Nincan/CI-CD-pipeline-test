import { ReactElement } from 'react';
import * as React from 'react';
import { Block } from 'baseui/block';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { Snackbar, SnackbarProvider } from '../contexts/Snackbar';

import { StyleObject } from 'spaceweb/types';
import SpaceConsumer from 'spaceweb/spaceConsumer';

import ThemeProperties from '../components/themeProperties';

import 'core-js/features/array/flat';
import '@sprinklr/spaceweb-themes/space/themeVars.min.css';
import '@sprinklr/spaceweb-themes/hyperspace/themeVars.min.css';
import '@sprinklr/spaceweb-themes/utilities.min.css';
import '@sprinklr/spaceweb-themes/styles/normalize.min.css';
import '@sprinklr/spaceweb-themes/styles/globals.min.css';

// TODO: Make this to work
// const enableDebugger = process.env.ENABLE_DEBUGGER === 'yes';

const MyApp = ({ Component, pageProps, router }: AppProps): React.ReactElement => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <ThemeProperties>
      <SnackbarProvider>
        <SpaceConsumer>
          {({ getStyle }): ReactElement => (
            <Block $style={getStyle('min-h-screen spr-ui-01 w-screen') as StyleObject}>
              <Component {...pageProps} path={router.asPath} />
            </Block>
          )}
        </SpaceConsumer>
        <Snackbar />
      </SnackbarProvider>
    </ThemeProperties>
  </>
);

export default MyApp;

/* eslint react/no-danger: 0 */

import { ReactElement } from 'react';

import Document, { Head, Main, NextScript, Html } from 'next/document';
import { RenderPageResult } from 'next-server/dist/lib/utils';

import { StyleProvider, getStylesheets, isServer } from 'spaceweb/styleEngine';
import { Sheet } from 'spaceweb';

type InitialProps = RenderPageResult & { stylesheets: Sheet[] };

export default class MyDocument extends Document<InitialProps> {
  static getInitialProps(props): Promise<InitialProps> {
    const page = props.renderPage(
      App =>
        (pageProps): ReactElement =>
          (
            <StyleProvider debug>
              <App {...pageProps} />
            </StyleProvider>
          )
    );

    if (isServer) return { ...page, stylesheets: getStylesheets() };

    return page;
  }

  render(): ReactElement {
    return (
      <Html lang="en">
        <Head>
          <title>Spaceweb</title>
          <link rel="icon" href="/spaceweb/favicon.ico" />
          {this.props.stylesheets.map((sheet, i) => (
            <style
              className="_spaceweb_hydrate_"
              dangerouslySetInnerHTML={{ __html: sheet.css }}
              media={sheet.attrs.media}
              data-hydrate={sheet.attrs['data-hydrate']}
              key={i} //eslint-disable-line react/no-array-index-key
            />
          ))}
          <style>{`
            html {
              font-size: 62.5%;
              letter-spacing: -.12px;
              text-rendering: optimizeLegibility;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
            body {
              font-family: -apple-system,BlinkMacSystemFont,Roboto,Segoe UI,Noto Sans,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Helvetica Neue,Helvetica,sans-serif;
              margin: 0; 
            }
            *:focus{
              outline: none;
            }
          `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

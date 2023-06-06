/* eslint @typescript-eslint/no-use-before-define: 0 */

import { useMemo, PropsWithChildren, ReactElement } from 'react';
import { Client, Server } from 'styletron-engine-atomic';
import { DebugEngine, Provider as StyletronProvider } from 'styletron-react';

import { StandardEngine, Sheet } from '../types';
import { useDocument } from '../spacewebProvider/DocumentProvider';

export type ProviderProps = {
  styleEngine?: StandardEngine;
  debug?: boolean;
};

export const SPACEWEB_STYLE_PREFIX: Readonly<string> = 'sw--';
export const SPACEWEB_STYLE_CONTAINER_ID: Readonly<string> = 'spaceweb-style-cache';
export const isServer: Readonly<boolean> = typeof window === 'undefined';

class NoopDebugEngine {
  debug = (): string => '';
}

// NOTE: Define styletron as module variable (singleton)
let styletron: StandardEngine | undefined;

const hasStyletron = (): boolean => typeof styletron !== 'undefined';

// Throws and error if not called from the server.
const ensureServer = (): void => {
  if (!isServer) {
    throw new Error('This method can only be called from the server.');
  }
};

// Throws and error if called from the server.
const ensureClient = (): void => {
  if (isServer) {
    throw new Error('This method can only be called from the browser.');
  }
};

// Throws an error if Styletron engine is not initialized (`getStyleEngine`).
const ensureEngine = (): void | Error => {
  if (!hasStyletron()) throw new Error("Styletron engine hasn't been initialized.");
};

export const hydrate: (ownerDocument?: Document) => HTMLCollectionOf<HTMLStyleElement> = ownerDocument =>
  (ownerDocument || document).getElementsByClassName('_spaceweb_hydrate_') as HTMLCollectionOf<HTMLStyleElement>;

// Gets isomorphic Styletron engine.
export const getStyleEngine: (ownerDocument?: Document) => StandardEngine = ownerDocument => {
  if (isServer) {
    if (typeof styletron !== 'undefined') return styletron;
    styletron = new Server({ prefix: SPACEWEB_STYLE_PREFIX });
  } else {
    const doc = ownerDocument || document;
    const el = doc.getElementById(SPACEWEB_STYLE_CONTAINER_ID) as Element | null;
    if (el && styletron) {
      return styletron;
    }
    // adds a style tag in document.head to make sure only one instance of styletron is created in an app.
    appendCacheContainer(ownerDocument);
    styletron = new Client({
      hydrate: hydrate(ownerDocument),
      prefix: SPACEWEB_STYLE_PREFIX,
    });
  }

  return styletron;
};

// @ts-ignore
StyletronProvider.displayName = 'StyletronProvider';
// Style engine provider (a.k.a. StyletronProvider).
export const StyleProvider = (props: PropsWithChildren<ProviderProps>): ReactElement => {
  const doc = useDocument();
  const debugEngine = useMemo(() => (props.debug ? new DebugEngine() : new NoopDebugEngine()), [props.debug]);
  return (
    <StyletronProvider
      debug={debugEngine}
      value={props.styleEngine || getStyleEngine(doc)}
      debugAfterHydration={!!props.debug}
    >
      {props.children}
    </StyletronProvider>
  );
};
StyleProvider.displayName = 'StyleProvider';

// Gets hydration stylesheets as `Sheet[]` (e.g. Next.js).
export const getStylesheets = (): Sheet[] => {
  ensureServer();
  ensureEngine();
  return (styletron as Server).getStylesheets();
};

// Gets hydration stylesheets HTML code as string.
export const getStylesheetsHtml = (): string => {
  ensureServer();
  ensureEngine();
  return (styletron as Server).getStylesheetsHtml();
};

// Appends cache styles to the DOM and returns element's instance.
export const appendCacheContainer: (ownerDocument?: Document) => Element = ownerDocument => {
  ensureClient();

  const doc = ownerDocument || document;
  let el = doc.getElementById(SPACEWEB_STYLE_CONTAINER_ID) as Element | null;

  if (el) return el;

  el = doc.createElement('style');
  el.id = SPACEWEB_STYLE_CONTAINER_ID;
  doc.head.appendChild(el);

  return el;
};

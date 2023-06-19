import { useEffect, useState } from 'react';

export const isBrowser = typeof window !== 'undefined';

const getInitialState = (query: string, defaultState?: boolean) => {
  // Prevent a React hydration mismatch when a default value is provided by not defaulting to window.matchMedia(query).matches.
  if (defaultState !== undefined) {
    return defaultState;
  }

  if (isBrowser) {
    return window.matchMedia(query).matches;
  }

  // A default value has not been provided, and you are rendering on the server, warn of a possible hydration mismatch when defaulting to false.
  if (process.env.NODE_ENV !== 'production') {
    console.warn(
      '`useMedia` When server side rendering, defaultState should be defined to prevent a hydration mismatches.'
    );
  }

  return false;
};

const useMedia = (query: string, defaultState?: boolean) => {
  const [state, setState] = useState(getInitialState(query, defaultState));

  useEffect(() => {
    let mounted = true;
    const mediaQueryList = window.matchMedia(query);
    const onChange = () => {
      if (!mounted) {
        return;
      }
      setState(!!mediaQueryList.matches);
    };

    // addListener is deprecated but older version of safari still have not implemented addEventListener so adding check
    if ('addEventListener' in mediaQueryList) {
      mediaQueryList.addEventListener('change', onChange);
    } else {
      //@ts-ignore
      mediaQueryList.addListener(onChange);
    }

    setState(mediaQueryList.matches);

    return () => {
      mounted = false;
      if ('removeEventListener' in mediaQueryList) {
        mediaQueryList.removeEventListener('change', onChange);
      } else {
        //@ts-ignore
        mediaQueryList.removeListener(onChange);
      }
    };
  }, [query]);

  return state;
};

export default useMedia;

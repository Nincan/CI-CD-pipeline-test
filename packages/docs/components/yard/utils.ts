import { TProp } from 'react-view';
import { TProviderValue } from './provider';

export type TPropValueOverrides = {
  [key: string]: {
    active: boolean;
    style: string;
  };
};

export const countProps = (props: { [key: string]: TProp }, propsConfig: { [key: string]: TProp }) => {
  let changedProps = 0;
  Object.keys(props).forEach(prop => {
    if (
      prop !== 'overrides' &&
      props[prop].value !== '' &&
      typeof props[prop].value !== 'undefined' &&
      props[prop].value !== propsConfig[prop].value
    ) {
      changedProps += 1;
    }
  });
  return changedProps;
};

export const countOverrides = (overrides: any) => {
  const existingOverrides = overrides?.value ? Object.keys(overrides.value) : [];
  return existingOverrides.filter(key => overrides.value[key].active).length;
};

export const countThemeValues = (themeState: TProviderValue) => {
  if (!themeState) return 0;
  return Object.keys(themeState).length;
};

export const fetchShortenedUrl = async (url: string): Promise<Response> =>
  fetch('https://api-ssl.bitly.com/v4/shorten', {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
      Authorization: 'Bearer 6582bc718a8b1cf679126f776da131041ed644df',
    }),
    body: JSON.stringify({
      long_url: url,
    }),
  });

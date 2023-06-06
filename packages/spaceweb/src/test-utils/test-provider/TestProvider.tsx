import { ReactElement, useMemo } from 'react';
import * as React from 'react';
import { ThemeModule } from '@sprinklr/spaceweb-themes/types';

import SpacewebProvider from '../../spacewebProvider';
import { getStyleEngine } from '../../styleEngine';
import { useTheme } from '../../theme';
import { convertToTestableTheme } from './helpers';

type WithOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

const TestProvider = (
  props: WithOptional<WithOptional<React.ComponentProps<typeof SpacewebProvider>, 'theme'>, 'styleEngine'>
): ReactElement => {
  const themeModule = useTheme();
  const testableTheme = useMemo(() => convertToTestableTheme(themeModule as ThemeModule), [themeModule]);
  const { styleEngine = getStyleEngine(), theme = testableTheme } = props;

  return <SpacewebProvider theme={theme} styleEngine={styleEngine} {...props} debug />;
};

export default TestProvider;

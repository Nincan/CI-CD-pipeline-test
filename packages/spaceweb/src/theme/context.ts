import { createContext, useContext } from 'react';
import { ThemeContext } from '../types';
import hyperspaceLight from '@sprinklr/spaceweb-themes/hyperspace/light';

export const themeContext = createContext<ThemeContext>(hyperspaceLight);

export const useTheme = (): ThemeContext => useContext(themeContext);

export const ThemeConsumer = themeContext.Consumer;

import { createThemedStyled, createThemedUseStyletron, createThemedWithStyle } from 'baseui';
import { ThemeT } from 'styletron';

/**
 * @deprecated use spaceweb/styled
 */
export const styled = createThemedStyled<ThemeT>(); // remove once spaceweb/styled provides props to style callback
/**
 * @deprecated
 */
export const withStyle = createThemedWithStyle<ThemeT>();
/**
 * @deprecated use spaceweb/useStyle
 */
export const useStyletron = createThemedUseStyletron<ThemeT>();

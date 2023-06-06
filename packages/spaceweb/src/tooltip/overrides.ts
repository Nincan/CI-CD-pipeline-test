import { SharedProps } from './types';
import { StyleFn, Styles } from '../types';
import { Property } from 'csstype';

export const getArrowStyle: StyleFn<SharedProps> = ({ theme }) => ({ backgroundColor: theme.spr.tooltip01 });

export const getBodyStyle: StyleFn<SharedProps> = () => ({
  backgroundColor: 'transparent',
  boxShadow: 'none',
});

const getInnerMaxWidth: StyleFn<SharedProps> = ({ px2rem }, { $size }) => {
  let maxWidth: string = '50vw';
  // many have used default=sm size to let tooltip get auto-width
  // if ($size === 'sm') maxWidth = px2rem(120);
  if ($size === 'md') maxWidth = px2rem(180);
  if ($size === 'lg') maxWidth = px2rem(240);
  return { maxWidth };
};

const getTypography: StyleFn<SharedProps> = ({ theme }, { $size }) => {
  // TODO: Isn't the point of having typography not to have to override styles, designs must match the defined styles:
  if ($size === 'sm') return { ...theme.typography.l1, fontWeight: theme.fontWeight.medium as Property.FontWeight };
  if ($size === 'md') return { ...theme.typography.bs3, fontWeight: theme.fontWeight.normal as Property.FontWeight };
  return { ...theme.typography.bs3, fontWeight: theme.fontWeight.normal as Property.FontWeight };
};

export const innerStyles: Styles = [
  'break-words',
  utils => {
    const { theme } = utils;
    return {
      backgroundColor: theme.spr.tooltip01,
      color: theme.spr.text06,
      borderTopLeftRadius: theme.borderRadius['4'],
      borderTopRightRadius: theme.borderRadius['4'],
      borderBottomRightRadius: theme.borderRadius['4'],
      borderBottomLeftRadius: theme.borderRadius['4'],
      borderColor: theme.spr.tooltipBorder,
      paddingTop: theme.padding['2'],
      paddingBottom: theme.padding['2'],
      paddingLeft: theme.padding['3'],
      paddingRight: theme.padding['3'],
      boxSizing: 'border-box',
    };
  },
  getTypography,
  getInnerMaxWidth,
];

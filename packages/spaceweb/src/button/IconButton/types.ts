import { ButtonProps, ButtonSharedProps } from '../types';
import { Size } from '../../types';
import { StatefulTooltipProps } from '../../tooltip';

type BaseIconButtonProps = Omit<ButtonProps, 'size'> & {
  size?: Size;
  bordered?: boolean;
};

type IconButtonPropsWithAriaLabel = BaseIconButtonProps & {
  'aria-label': string;
};

type IconButtonPropsWithTooltip = BaseIconButtonProps & {
  tooltipContent: StatefulTooltipProps['content'];
};

export type IconButtonProps = IconButtonPropsWithAriaLabel | IconButtonPropsWithTooltip;
export type SharedProps = Omit<ButtonSharedProps, '$size'> & { $size?: Size; $bordered?: boolean };

import { mergeOverrides } from '../overrides';
import { getToggleTrackOverrides, getToggleOverrides, getLabelOverrides } from './styled-components';
import { add$props } from '../helpers';
import { OutlineProps } from '../helpers/commonStyles';
import { StatefulSwitchProps, SwitchProps } from './types';

type AdaptProps = SwitchProps | StatefulSwitchProps;

export const useSwitchAdapter = (props: AdaptProps): Omit<AdaptProps, keyof OutlineProps> => {
  const { overrides, $outlineStyle, $outlineColor, $outlineOffset, $outlineWidth, ...restProps } = props;
  const mergedOverrides = mergeOverrides(
    {
      Toggle: {
        style: getToggleOverrides,
      },
      ToggleTrack: {
        style: getToggleTrackOverrides,
      },
      Label: {
        style: getLabelOverrides,
      },
    },
    overrides
  );

  return { ...restProps, overrides: mergedOverrides };
};

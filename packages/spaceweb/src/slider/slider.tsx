import { ReactElement } from 'react';
import { Slider as BaseSlider } from 'baseui/slider';
import { useConvertOverrides } from '../helpers/baseui/useConvertOverrides';
import Mark from './mark';
import { getInnerTrackStyles, getThumbStyles, getInnerThumbStyles, getThumbValueStyles } from './styled-components';
import { SliderProps } from './types';
import { isServer } from '../spacewebProvider/utils';

// @ts-ignore
BaseSlider.displayName = 'BaseSlider';

const defaultMarkLabel: SliderProps['getMarkLabel'] = ({ $markIndex, $min, $step }) =>
  `${($min || 0) + $markIndex * $step}`;

const Slider = ({
  overrides,
  markLabel,
  intent = 'default',
  getMarkLabel = defaultMarkLabel,
  className,
  style,
  ...restProps
}: SliderProps): ReactElement => {
  const mergedOverrides = useConvertOverrides(
    {
      Root: {
        style: ['p-4', className, style],
        props: {
          $intent: intent,
          'data-spaceweb': 'slider',
        },
      },
      Track: {
        style: 'p-0',
      },
      InnerTrack: {
        style: getInnerTrackStyles,
        props: {
          $intent: intent,
          'data-testid': 'slider-track',
        },
      },
      Mark: {
        component: Mark,
        props: {
          $intent: intent,
          'data-testid': 'slider-mark',
          getMarkLabel,
          markLabel,
          overrides: {
            MarkLabel: overrides?.MarkLabel,
          },
        },
      },
      Thumb: {
        // In SSR, Thumbs are not properly positioned, hence hiding thumbs.
        // Refer https://github.com/tajo/react-range/issues/67#issuecomment-591703422
        component: isServer ? () => null : undefined,
        style: getThumbStyles,
        props: {
          $intent: intent,
        },
      },
      InnerThumb: {
        style: getInnerThumbStyles,
        props: {
          $intent: intent,
        },
      },
      ThumbValue: {
        style: getThumbValueStyles,
        props: {
          $intent: intent,
        },
      },
      TickBar: {
        component: () => null,
      },
    },
    overrides
  );

  return <BaseSlider overrides={mergedOverrides} {...restProps} />;
};

Slider.displayName = 'Slider';

export default Slider;

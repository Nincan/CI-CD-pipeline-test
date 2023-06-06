import {
  SharedProps as BaseSharedProps,
  SliderProps as BaseSliderProps,
  StatefulContainerProps as BaseStatefulContainerProps,
  StatefulSliderProps as BaseStatefulSliderProps,
} from 'baseui/slider';
import { Intent, SpacewebComponentProps } from '../types';
import { Override } from '../overrides';

type GetMarkLabelFn = (props: SharedProps & { $markIndex: number }) => React.ReactNode;

type CommonSliderProps = {
  intent?: Intent;
  markLabel?: boolean;
  overrides?: {
    Root?: Override<SharedProps & Record<string, any>>;
    Track?: Override<SharedProps & Record<string, any>>;
    InnerTrack?: Override<SharedProps & Record<string, any>>;
    Thumb?: Override<SharedProps & Record<string, any>>;
    InnerThumb?: Override<SharedProps & Record<string, any>>;
    ThumbValue?: Override<SharedProps & Record<string, any>>;
    Mark?: Override<SharedProps & Record<string, any>>;
    MarkLabel?: Override<SharedProps & Record<string, any>>;
  };
  disabled?: boolean;
  getMarkLabel?: GetMarkLabelFn;
};

export type SharedProps = BaseSharedProps & {
  $intent?: boolean;
  $step: number;
};

export type SliderProps = SpacewebComponentProps<Omit<BaseSliderProps, 'overrides'>> & CommonSliderProps;

export type StatefulContainerProps = SpacewebComponentProps<
  Omit<BaseStatefulContainerProps, 'overrides' | 'stateReducer' | 'min' | 'max' | 'step' | 'onChange' | 'onFinalChange'>
> &
  CommonSliderProps & {
    // these fields are optional but baseui has marked them as mandatory
    stateReducer?: BaseStatefulContainerProps['stateReducer'];
    min?: BaseStatefulContainerProps['min'];
    max?: BaseStatefulContainerProps['max'];
    step?: BaseStatefulContainerProps['step'];
    onChange?: BaseStatefulContainerProps['onChange'];
    onFinalChange?: BaseStatefulContainerProps['onFinalChange'];
  };

export type StatefulSliderProps = SpacewebComponentProps<Omit<BaseStatefulSliderProps, 'overrides'>> &
  CommonSliderProps;

export type MarkProps = SharedProps & {
  $markIndex: number;
  overrides?: {
    MarkLabel?: Override<SharedProps & Record<string, any>>;
  };
  getMarkLabel: GetMarkLabelFn;
  markLabel?: boolean;
};

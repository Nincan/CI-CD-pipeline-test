import { ReactElement } from 'react';
import StatefulContainer from './stateful-slider-container';
import Slider from './slider';
import { StatefulSliderProps } from './types';

const StatefulSlider = (props: StatefulSliderProps): ReactElement => (
  <StatefulContainer {...props}>
    {sliderProps => <Slider {...sliderProps} overrides={props.overrides} />}
  </StatefulContainer>
);

StatefulSlider.displayName = 'StatefulSlider';

export default StatefulSlider;

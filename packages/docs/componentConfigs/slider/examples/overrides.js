import * as React from 'react';
import { Slider } from 'spaceweb/slider';

const overrides = {
  Thumb: {
    style: 'h-8 w-8 typography-l1 spr-text-05',
  },
  ThumbValue: {
    component: ({ $value, $thumbIndex }) => $value[$thumbIndex],
  },
  InnerThumb: {
    component: () => null,
  },
};

const Overrides = () => {
  const [_value, setValue] = React.useState([10]);

  return <Slider value={_value} onChange={({ value }) => setValue(value)} overrides={overrides} />;
};

export default Overrides;

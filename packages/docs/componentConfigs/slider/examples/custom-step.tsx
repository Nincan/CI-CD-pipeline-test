import * as React from 'react';
import { ReactElement } from 'react';
import { Slider } from 'spaceweb/slider';

const CustomStep = (): ReactElement => {
  const [_value, setValue] = React.useState([10]);

  return <Slider value={_value} step={10} min={-100} max={100} onChange={({ value }) => setValue(value)} />;
};

export default CustomStep;

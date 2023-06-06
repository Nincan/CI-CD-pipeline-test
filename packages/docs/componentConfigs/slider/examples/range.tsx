import * as React from 'react';
import { ReactElement } from 'react';
import { Slider } from 'spaceweb/slider';

const Range = (): ReactElement => {
  const [_value, setValue] = React.useState([10, 50]);

  return <Slider value={_value} onChange={({ value }) => setValue(value)} />;
};

export default Range;

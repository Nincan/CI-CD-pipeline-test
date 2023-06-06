import * as React from 'react';
import { Slider } from 'spaceweb/slider';

const MarkLabel = () => {
  const [_value, setValue] = React.useState([25]);

  return <Slider value={_value} step={5} marks markLabel onChange={({ value }) => setValue(value)} />;
};

export default MarkLabel;

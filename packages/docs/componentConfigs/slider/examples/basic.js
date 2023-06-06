import * as React from 'react';
import { Slider } from 'spaceweb/slider';

const Basic = () => {
  const [_value, setvalue] = React.useState([10]);

  return <Slider value={_value} onChange={({ value }) => setvalue(value)} />;
};

export default Basic;

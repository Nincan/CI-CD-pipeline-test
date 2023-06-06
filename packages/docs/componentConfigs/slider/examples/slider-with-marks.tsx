import * as React from 'react';
import { ReactElement } from 'react';
import { Slider } from 'spaceweb/slider';

const WithMarks = (): ReactElement => {
  const [_value, setValue] = React.useState([10]);

  return <Slider value={_value} marks step={5} onChange={({ value }) => setValue(value)} />;
};

export default WithMarks;

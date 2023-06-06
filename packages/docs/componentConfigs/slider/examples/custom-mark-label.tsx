import * as React from 'react';
import { ReactElement } from 'react';
import { Slider } from 'spaceweb/slider';

const getMarkLabel = ({ $markIndex }) => ($markIndex % 5 === 0 ? $markIndex : null);

const CustomMarkLabel = (): ReactElement => {
  const [_value, setValue] = React.useState([25]);

  return (
    <Slider value={_value} onChange={({ value }) => setValue(value)} marks markLabel getMarkLabel={getMarkLabel} />
  );
};

export default CustomMarkLabel;

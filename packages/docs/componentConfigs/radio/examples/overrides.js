import * as React from 'react';
import { Typography } from 'spaceweb/typography';
import { Radio, RadioGroup } from 'spaceweb/radio';
import useStyle from 'spaceweb/style/useStyle';

export default () => {
  const [value, setValue] = React.useState('1');
  const { theme } = useStyle();

  return (
    <RadioGroup name="radio group" onChange={e => setValue(e.target.value)} value={value}>
      <Radio
        overrides={{
          Label: ({ $value }) => <Typography>Custom label for value: {$value}</Typography>,
          RadioMarkOuter: {
            style: () => ({
              backgroundColor: theme.spr.clrGreen,
            }),
          },
        }}
        value="1"
      >
        First
      </Radio>
      <Radio
        overrides={{
          Label: ({ $value }) => <Typography>Custom label for value: {$value}</Typography>,
          RadioMarkOuter: {
            style: () => ({
              backgroundColor: theme.spr.clrGreen,
            }),
          },
        }}
        value="2"
      >
        Second
      </Radio>
      <Radio
        overrides={{
          Label: ({ $value }) => <Typography>Custom label for value: {$value}</Typography>,
          RadioMarkOuter: {
            style: () => ({
              backgroundColor: theme.spr.clrGreen,
            }),
          },
        }}
        value="3"
      >
        Third
      </Radio>
    </RadioGroup>
  );
};

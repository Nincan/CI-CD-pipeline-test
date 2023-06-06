import * as React from 'react';
import { Input } from 'spaceweb/input';
import { Select, Value } from 'spaceweb/select';
import { Stack } from 'spaceweb/stack';

export default (): React.ReactElement => {
  const [value, setValue] = React.useState<Value>([{ label: 'AliceBlue', id: '#F0F8FF' }]);
  return (
    <Stack direction="vertical" gap={4}>
      <Input startEnhancer="@" placeholder="Input with a start enhancer" />
      <Input endEnhancer=".00" placeholder="Input with an end enhancer" />
      <Input
        startEnhancer={
          <Select
            options={[
              { label: 'AliceBlue', id: '#F0F8FF' },
              { label: 'AntiqueWhite', id: '#FAEBD7' },
              { label: 'Aqua', id: '#00FFFF' },
              { label: 'Aquamarine', id: '#7FFFD4' },
              { label: 'Azure', id: '#F0FFFF' },
              { label: 'Beige', id: '#F5F5DC' },
            ]}
            value={value}
            placeholder="Select color"
            onChange={(params): void => setValue(params.value)}
            overrides={{
              ControlContainer: {
                style: {
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                  borderRightWidth: 0,
                },
              },
            }}
          />
        }
        placeholder="Input with custom enhancers"
        overrides={{
          StartEnhancer: {
            style: {
              paddingRight: 0,
              paddingLeft: 0,
              borderTopWidth: 0,
              borderBottomWidth: 0,
              borderLeftWidth: 0,
              borderRightWidth: 0,
            },
          },
        }}
      />
    </Stack>
  );
};

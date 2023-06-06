import * as React from 'react';
import { Select, Value } from 'spaceweb/select';

export default (): React.ReactElement => {
  const [value, setValue] = React.useState<Value>([{ label: 'Atlanta', id: 'ATL' }]);

  return (
    <Select
      overrides={{
        MultiValue: {
          props: {
            overrides: {
              Tag: {
                props: {
                  overrides: {
                    Root: {
                      style: {
                        borderTopLeftRadius: 0,
                        borderTopRightRadius: 0,
                        borderBottomRightRadius: 0,
                        borderBottomLeftRadius: 0,
                        backgroundColor: 'slateblue',
                      },
                    },
                    Action: {
                      style: {
                        borderTopLeftRadius: 0,
                        borderTopRightRadius: 0,
                        borderBottomRightRadius: 0,
                        borderBottomLeftRadius: 0,
                        ':hover': {
                          backgroundColor: 'mediumpurple',
                        },
                        ':focus': {
                          backgroundColor: 'mediumpurple',
                        },
                      },
                    },
                    Text: {
                      style: {
                        color: 'lavender',
                      },
                    },
                    ActionIcon: {
                      props: {
                        color: 'lavender',
                      },
                    },
                  },
                },
              },
            },
          },
        },
      }}
      multi
      type="search"
      options={[
        { label: 'Atlanta', id: 'ATL' },
        { label: 'Baltimore', id: 'BWI' },
        { label: 'Chicago', id: 'ORD' },
        { label: 'Denver', id: 'DEN' },
      ]}
      onChange={({ value: _value }): void => setValue(_value)}
      value={value}
    />
  );
};

import { forwardRef, ReactElement, useState } from 'react';
import { PhoneInput, Value } from 'spaceweb/phone-input';
import { Tag } from 'spaceweb/tag';

const CustomFlagContainer = forwardRef((props: any, ref) => {
  const { $iso: iso, variant, size, ...rest } = props;
  return (
    <Tag variant="solid" size="sm" ref={ref} closeable={false} {...rest}>
      {iso}
    </Tag>
  );
});

const FlagContainerOverrides = (): ReactElement => {
  const [value, setValue] = useState<Value>(undefined);

  return (
    <PhoneInput
      value={value}
      onChange={setValue}
      overrides={{
        FlagContainer: {
          component: CustomFlagContainer,
          props: {
            style: ({ px2rem }) => ({
              marginLeft: `${px2rem(12)} /* @noflip */`,
            }),
          },
        },
      }}
    />
  );
};

export default FlagContainerOverrides;

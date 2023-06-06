import { forwardRef, useState } from 'react';
import { PhoneInput } from 'spaceweb/phone-input';
import { Tag } from 'spaceweb/tag';

const CustomFlagContainer = forwardRef((props, ref) => {
  const { $iso: iso, variant, size, ...rest } = props;
  return (
    <Tag variant="solid" size="sm" ref={ref} closeable={false} {...rest}>
      {iso}
    </Tag>
  );
});
const FlagContainerOverrides = () => {
  const [value, setValue] = useState(undefined);
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

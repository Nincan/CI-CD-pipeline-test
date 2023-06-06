import * as React from 'react';
import { Avatar } from 'spaceweb/avatar';

const CustomSizes = (): React.ReactElement => (
  <>
    {[24, 30, 40, 50, 60, 70, 80].map((size, index) => (
      <Avatar
        allowPhoneInitials
        name={String(size)}
        size={size}
        src={`https://api.adorable.io/avatars/285/${index}@adorable.io.png`}
        key={size}
      />
    ))}
  </>
);

export default CustomSizes;

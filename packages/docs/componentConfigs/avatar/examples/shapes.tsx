import * as React from 'react';
import { Avatar, Size } from 'spaceweb/avatar';

export default (): React.ReactElement => (
  <>
    {['sm', 'md', 'lg', 'xl'].map((size, index) => (
      <Avatar
        name="user"
        size={size as Size}
        src={`https://material-ui.com/static/images/avatar/${index + 1}.jpg`}
        key={size}
      />
    ))}
    <br />
    {['sm', 'md', 'lg', 'xl'].map((size, index) => (
      <Avatar
        name="user"
        size={size as Size}
        src={`https://material-ui.com/static/images/avatar/${index + 1}.jpg`}
        key={size}
        shape="rectangle"
      />
    ))}
  </>
);

import * as React from 'react';
import { Typography } from 'spaceweb/typography';

const textString = 'Hover this typography text.';

export default (): React.ReactElement => (
  <Typography
    variant="h2"
    className={[
      'border-1 border-solid spr-border-02 spr-support-success-text cursor-pointer h-32 w-32 inline-flex hover:spr-support-success-highlight hover:w-full',
      ({ theme }) => ({
        ':hover': theme.typography.h1,
      }),
    ]}
  >
    {textString}
  </Typography>
);

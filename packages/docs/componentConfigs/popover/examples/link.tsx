import * as React from 'react';
import cx from 'spaceweb/classNames';
import { Link } from 'spaceweb/link';
import { StatefulPopover } from 'spaceweb/popover';
import { Typography } from 'spaceweb/typography';

export default (): React.ReactElement => (
  <StatefulPopover
    content={
      <Typography variant="bs3" className="p-4">
        hello world
      </Typography>
    }
    accessibilityType="tooltip"
  >
    {({ isOpen }) => (
      <Link href="javascript:void(0);" tabIndex={0} className={cx({ underline: isOpen })}>
        Open
      </Link>
    )}
  </StatefulPopover>
);

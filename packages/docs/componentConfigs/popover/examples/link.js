import cx from 'spaceweb/classNames';
import { StatefulPopover } from 'spaceweb/popover';
import { Link } from 'spaceweb/link';
import { Typography } from 'spaceweb/typography';

export default () => (
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

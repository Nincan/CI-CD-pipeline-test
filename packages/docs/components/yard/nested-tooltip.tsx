import { ReactElement } from 'react';

import { StatefulTooltip } from 'spaceweb/tooltip';
import { Box } from 'spaceweb/box';
import { Typography } from 'spaceweb/typography';
import { Link } from 'spaceweb/link';

const NestedTooltip = ({ name, nestedName }: { name: string; nestedName: string }): ReactElement => {
  return (
    <StatefulTooltip
      content={() => (
        <Box className="max-w-xl mx-1">
          <p>
            <b>{nestedName}</b> is a nested override of <b>{name}</b>. It means that {name} component is using another
            Spaceweb component {nestedName} as its sub-component.
          </p>
          <p>
            Since {nestedName} has its own set of overrides, you have to target nested sub-component to change relevant
            styles. You can utilize this interactive playground and see the resulting code below.
          </p>
          <p>
            <Link className="text-13" href="/guides/understanding-overrides#override-nested-components">
              Learn more about nested overrides.
            </Link>
          </p>
        </Box>
      )}
      returnFocus
      showArrow
    >
      <Typography className="ml-2 underline spr-text-04">nested</Typography>
    </StatefulTooltip>
  );
};

export default NestedTooltip;

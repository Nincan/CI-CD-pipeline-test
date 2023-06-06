import { ReactElement } from 'react';
import { H2 } from './markdown-elements';
import { Box } from 'spaceweb/box';
import { Stack } from 'spaceweb/stack';
import { Avatar } from 'spaceweb/avatar';
import { Link } from 'spaceweb/link';
import { Typography } from 'spaceweb/typography';
import { StatefulTooltip } from 'spaceweb/tooltip';

import contributors from '../../../contributors';

type Contributor = {
  name: string;
  email: string;
  avatar: string;
  gitlabUrl: string;
};

const Contributors = (): ReactElement => {
  const contributorsList: Contributor[] = Object.values(contributors);
  return (
    <>
      <Stack direction="vertical" gap={4}>
        <H2>Thanks to our contributors!</H2>
        <Box className="flex flex-wrap">
          {contributorsList.map(contributor => (
            <StatefulTooltip content={contributor.name} accessibilityType="tooltip">
              <Box className="mr-4 mb-4 cursor-pointer" $as="a" href={contributor.gitlabUrl}>
                <Avatar
                  size="xl"
                  name={contributor.name}
                  src={contributor.avatar}
                  shape="rectangle"
                  overrides={{
                    Root: {
                      style: ({}) => ({
                        transitionProperty: 'all',
                        transitionDuration: '.2s',
                        transitionTimingFunction: 'ease-in',
                        ':hover': {
                          transform: 'scale(1.2)',
                        },
                      }),
                    },
                  }}
                ></Avatar>
              </Box>
            </StatefulTooltip>
          ))}
        </Box>
        <Typography className="spr-text-01" variant="h5" weight="regular">
          Checkout this list of{' '}
          <Link href="https://prod-gitlab.sprinklr.com/sprinklr/frontend/spaceweb/-/issues?label_name%5B%5D=good+first+issue">
            good first issue
          </Link>{' '}
          to make your contribution!
        </Typography>
      </Stack>
    </>
  );
};

export default Contributors;

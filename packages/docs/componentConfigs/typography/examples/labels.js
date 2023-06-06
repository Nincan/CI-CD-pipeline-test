import * as React from 'react';
import { Typography } from 'spaceweb/typography';
import { Stack } from 'spaceweb/stack';

const textString = 'We ignite opportunity by setting the world in motion.';

export default () => (
    <Stack direction="vertical" gap={6}>
        <Typography variant="l1" $as="div">
            l1 - {textString}
        </Typography>
        <Typography variant="l2" $as="div">
            l2 - {textString}
        </Typography>
        <Typography variant="l3" $as="div">
            l3 - {textString}
        </Typography>
        <Typography variant="l4" $as="div">
            l4 - {textString}
        </Typography>
    </Stack>
);

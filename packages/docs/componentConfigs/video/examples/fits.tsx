import { Fragment } from 'react';
import * as React from 'react';
import { Video } from 'spaceweb/video';

import { ObjectFitProperty } from '../../types';

export default (props: { src: string }): React.ReactElement[] =>
  ['contain', 'fill'].map(fit => (
    <Fragment key={fit}>
      <span>{fit}</span>
      <Video
        {...props}
        width={400}
        height={200}
        disabled
        overrides={{
          Video: {
            style: {
              objectFit: fit as ObjectFitProperty,
            },
          },
        }}
      />
    </Fragment>
  ));

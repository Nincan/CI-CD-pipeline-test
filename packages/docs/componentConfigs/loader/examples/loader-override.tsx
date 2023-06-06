import * as React from 'react';
import { Loader } from 'spaceweb/loader';

export default (): React.ReactElement => (
  <Loader
    loadingContent="Loading"
    overrides={{
      BeatLoaderBall: { style: { marginLeft: '4px', marginRight: '4px' } },
      Text: { props: { variant: 'h4', weight: 'bold' } },
    }}
  />
);

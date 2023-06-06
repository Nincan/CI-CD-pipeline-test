import { Loader } from 'spaceweb/loader';

export default () => (
  <Loader
    loadingContent="Loading"
    overrides={{
      BeatLoaderBall: { style: { marginLeft: '4px', marginRight: '4px' } },
      Text: { props: { variant: 'h4', weight: 'bold' } },
    }}
  />
);

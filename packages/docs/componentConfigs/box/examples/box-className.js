import { Box } from 'spaceweb/box';

const BoxClassName = () => (
  <Box
    className={[
      'spr-support-error-text truncate cursor-pointer border border-dashed spr-card-border spr-shadow-01',
      { height: '4rem' },
      ({ theme, px2rem }) => ({ width: px2rem(128), ':hover': { backgroundColor: theme.spr.uiHover, width: '100%' } }),
    ]}
  >
    Hover me( I am styled with className )
  </Box>
);

export default BoxClassName;

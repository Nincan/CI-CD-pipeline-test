import { Box } from 'spaceweb/box';

const overrides = {
  Box: {
    style: ({ theme }) => ({
      color: theme.spr.supportSuccessText,
    }),
  },
};

const BoxOverridesAPI = () => <Box overrides={overrides}>This is styled with overrides API</Box>;

export default BoxOverridesAPI;

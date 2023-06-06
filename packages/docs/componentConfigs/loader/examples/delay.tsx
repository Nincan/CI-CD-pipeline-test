import { useState } from 'react';
import { Box } from 'spaceweb/box';
import { Checkbox } from 'spaceweb/checkbox';
import { Loader } from 'spaceweb/loader';

export default () => {
  const [loading, setLoading] = useState(false);
  const toggleLoading = () => setLoading(prevState => !prevState);
  return (
    <Box className="flex items-center">
      <Checkbox checked={loading} onChange={toggleLoading}>
        Loading State
      </Checkbox>
      {loading && <Loader className="ml-4" variant="clip" delay={500} />}
    </Box>
  );
};

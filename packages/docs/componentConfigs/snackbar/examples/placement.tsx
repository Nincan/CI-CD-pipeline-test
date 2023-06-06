import * as React from 'react';
import { StatefulSelect } from 'spaceweb/select';
import { Snackbar } from 'spaceweb/snackbar';

const placements = ['topLeft', 'top', 'topRight', 'bottomLeft', 'bottom', 'bottomRight'].map(p => ({
  id: p,
  label: p,
}));

export default (): React.ReactElement => {
  const [placement, setPlacement] = React.useState<string | undefined>();
  return (
    <>
      <StatefulSelect options={placements} onChange={({ value }): void => setPlacement(value?.[0]?.id as string)} />
      <Snackbar message={placement} />
    </>
  );
};

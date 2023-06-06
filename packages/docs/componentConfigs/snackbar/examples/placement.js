import { useState } from 'react';
import { StatefulSelect } from 'spaceweb/select';
import { Snackbar } from 'spaceweb/snackbar';

const placements = ['topLeft', 'top', 'topRight', 'bottomLeft', 'bottom', 'bottomRight'].map(p => ({
  id: p,
  label: p,
}));

export default () => {
  const [placement, setPlacement] = useState();
  return (
    <>
      <StatefulSelect options={placements} onChange={({ value }) => setPlacement(value?.[0]?.id)} />
      <Snackbar message={placement} placement={placement} />
    </>
  );
};

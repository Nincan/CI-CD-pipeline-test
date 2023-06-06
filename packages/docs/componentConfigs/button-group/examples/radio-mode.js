import * as React from 'react';
import { Button } from 'spaceweb/button';
import { ButtonGroup } from 'spaceweb/button-group';

export default () => {
  const [selected, setSelected] = React.useState();
  return (
    <ButtonGroup
      mode="radio"
      variant="secondary"
      selected={selected}
      onClick={(_event, index) => {
        setSelected(index);
      }}
    >
      <Button>Label</Button>
      <Button>Label</Button>
      <Button>Label</Button>
    </ButtonGroup>
  );
};

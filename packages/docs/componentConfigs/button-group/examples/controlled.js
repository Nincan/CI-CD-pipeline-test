import { useState } from 'react';
import { Button } from 'spaceweb/button';
import { ButtonGroup } from 'spaceweb/button-group';
import useStyle from 'spaceweb/style/useStyle';

function ControlledButtonGroup() {
  const { css, theme } = useStyle();
  const [selected, setSelected] = useState(1);
  const [boldClickCount, setBoldClickCount] = useState(0);
  const fontWeight = selected === 0 ? theme.fontWeight.semibold : theme.fontWeight.normal;
  return (
    <>
      <ButtonGroup
        selected={selected}
        variant="secondary"
        mode="radio"
        onClick={(_, index) => {
          if (selected !== index) {
            setSelected(index);
          }
        }}
      >
        <Button onClick={() => setBoldClickCount(boldClickCount + 1)}>Bold</Button>
        <Button>Normal</Button>
      </ButtonGroup>

      <div
        className={css('pt-2', {
          fontWeight,
        })}
      >
        Lorem ipsum dolor sit amet, ea insolens deseruisse mnesarchum mea. An munere utroque mentitum vis, ea rebum
        inani iudicabit has. Cu his dolorum perpetua. Mea atqui tation partem ne, ei vim etiam volumus nominavi. Cum id
        atqui cotidieque, quaeque nostrum salutandi cum at, idque scaevola platonem mei ad.
      </div>

      <div className={css('pt-4')}>The Bold option has been selected {boldClickCount} times</div>
    </>
  );
}
export default ControlledButtonGroup;

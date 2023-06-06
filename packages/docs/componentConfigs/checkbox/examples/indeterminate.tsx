import * as React from 'react';

import { Checkbox } from 'spaceweb/checkbox';
import useStyle from 'spaceweb/style/useStyle';

function GroupList(): React.ReactElement {
  const { css } = useStyle();
  const [checkboxes, setCheckboxes] = React.useState([true, false]);

  const allChecked = checkboxes.every(Boolean);
  const isIndeterminate = checkboxes.some(Boolean) && !allChecked;

  return (
    <div>
      <Checkbox
        onChange={(event: React.FormEvent<HTMLInputElement>): void => {
          const target = event.target as HTMLInputElement;
          setCheckboxes([target.checked, target.checked]);
        }}
        isIndeterminate={isIndeterminate}
        checked={allChecked}
      >
        Indeterminate checkbox if not all child-checkboxes are checked
      </Checkbox>
      <div className={css('p-2')}>
        <Checkbox
          checked={checkboxes[0]}
          onChange={(event: React.FormEvent<HTMLInputElement>): void => {
            const target = event.target as HTMLInputElement;
            setCheckboxes([target.checked, checkboxes[1]]);
          }}
        >
          First child checkbox
        </Checkbox>
        <Checkbox
          checked={checkboxes[1]}
          onChange={(event: React.FormEvent<HTMLInputElement>): void => {
            const target = event.target as HTMLInputElement;
            setCheckboxes([checkboxes[0], target.checked]);
          }}
        >
          Second child checkbox
        </Checkbox>
      </div>
    </div>
  );
}

export default GroupList;

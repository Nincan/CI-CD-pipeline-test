import * as React from 'react';
import SearchIcon from 'spaceweb-icons/line/Search';

import { StatefulCheckbox } from 'spaceweb/checkbox';

type CheckmarkProps = {
  checked: boolean;
};

export default (): React.ReactNode => (
  <StatefulCheckbox
    onChange={console.log}
    overrides={{
      Checkmark: ({ checked = false }: CheckmarkProps): React.ReactElement => (
        <SearchIcon size={14} className={checked ? 'spr-icon-04' : 'spr-icon-02'} />
      ),
    }}
  >
    With style overrides
  </StatefulCheckbox>
);

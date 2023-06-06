import Search from 'spaceweb-icons/line/Search';

import { StatefulCheckbox } from 'spaceweb/checkbox';

export default () => (
  <StatefulCheckbox
    onChange={console.log}
    overrides={{
      Checkmark: ({ checked = false }) => <Search size={14} className={checked ? 'spr-icon-04' : 'spr-icon-02'} />,
    }}
  >
    With style overrides
  </StatefulCheckbox>
);

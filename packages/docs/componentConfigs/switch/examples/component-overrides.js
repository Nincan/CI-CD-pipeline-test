import { StatefulSwitch } from 'spaceweb/switch';

import SearchIcon from 'spaceweb-icons/line/Search';
import AddIcon from 'spaceweb-icons/line/Add';

export default () => (
  <StatefulSwitch
    onChange={console.log}
    overrides={{
      ToggleTrack: ({ $checked }) => (
        <div>
          {$checked ? <SearchIcon size={14} className="spr-icon-02" /> : <AddIcon size={14} className="spr-icon-02" />}
        </div>
      ),
    }}
  >
    With toggle track overrides
  </StatefulSwitch>
);

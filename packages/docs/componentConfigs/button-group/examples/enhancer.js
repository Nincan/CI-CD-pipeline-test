import { IconTextButton } from 'spaceweb/button';
import { StatefulButtonGroup } from 'spaceweb/button-group';
import Search from 'spaceweb-icons/line/Search';
import ChevronDown from 'spaceweb-icons/line/ChevronDown';
import Close from 'spaceweb-icons/line/Close';

export default () => (
  <StatefulButtonGroup variant="default">
    <IconTextButton icon={Search} bordered>
      Search
    </IconTextButton>
    <IconTextButton icon={ChevronDown} bordered>
      Dropdown
    </IconTextButton>
    <IconTextButton icon={Close} bordered>
      Close
    </IconTextButton>
  </StatefulButtonGroup>
);

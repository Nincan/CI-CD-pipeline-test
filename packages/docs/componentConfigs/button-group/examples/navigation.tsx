import { StatefulButtonGroup } from 'spaceweb/button-group';
import { Button } from 'spaceweb/button';
import ChevronDown from 'spaceweb-icons/solid/ChevronDown';

const NavigationButtonGroup = () => (
  <StatefulButtonGroup variant="secondary">
    <Button variant="secondary" startEnhancer={<ChevronDown size={14} className="transform rotate-90" />}>
      Back
    </Button>
    <Button variant="secondary" endEnhancer={<ChevronDown size={14} className="transform -rotate-90" />}>
      Next
    </Button>
  </StatefulButtonGroup>
);

export default NavigationButtonGroup;

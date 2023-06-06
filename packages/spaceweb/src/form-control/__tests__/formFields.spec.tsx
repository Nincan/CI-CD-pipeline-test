import { render } from '@testing-library/react';
import { TestProvider } from '../../test-utils/test-provider';

import { Avatar } from '../../avatar';
import { StatefulCheckbox } from '../../checkbox';
import { StatefulInput } from '../../input';
import { StatefulSelect } from '../../select';
import { Tag } from '../../tag';
import { StatefulTextarea } from '../../textarea';
import { DatePicker } from '../../date-picker';
import { FormControl } from '../form-control';

const OPTIONS = [
  {
    label: 'AliceBlue',
    id: '#F0F8FF',
  },
  {
    label: 'AntiqueWhite',
    id: '#FAEBD7',
  },
  {
    label: 'Aqua',
    id: '#00FFFF',
  },
  {
    label: 'Aquamarine',
    id: '#7FFFD4',
  },
  {
    label: 'Beige',
    id: '#F5F5DC',
  },
];

/**
 * None of the Form Field Component should render button inside them which does not have type="button" explicitly defined.
 * https://css-tricks.com/use-button-element/#button-is-a-form-element - By default button rendered inside `form` element is of type `submit`.
 */
describe('Form fields', function() {
  it('should only render buttons which has type="button"', function() {
    render(
      <TestProvider>
        <form>
          <FormControl
            subTextAsIcon
            subText="FormControl subText"
            required
            label="FormControl label"
            caption="FormControl caption"
          >
            <StatefulInput initialState={{ value: 'StatefulInput' }} clearable />
          </FormControl>
          <StatefulSelect initialState={{ value: [OPTIONS[1], OPTIONS[4]] }} multi options={OPTIONS} startOpen />
          <DatePicker value={new Date()} clearable />
          <StatefulCheckbox initialState={{ checked: true }} />
          <StatefulTextarea initialState={{ value: 'StatefulTextArea' }} />

          {/*Used inside Select*/}
          <Tag closeable />
          <Avatar name="Jane Doe" size="md" shape="circle" />
        </form>
      </TestProvider>
    );

    const allButtonNodes = document.getElementsByTagName('button');
    const allButtonNodesWithTypeButton = document.querySelectorAll('button[type="button"]');
    expect(allButtonNodes.length).toBe(allButtonNodesWithTypeButton.length);
  });
});

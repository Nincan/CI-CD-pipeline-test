import SpacewebProvider from 'spaceweb/spacewebProvider';
import { Button } from 'spaceweb/button';
import sprLight from '@sprinklr/spaceweb-themes/space/light';
import _merge from 'lodash/merge';
import { ThemeModule } from '@sprinklr/spaceweb-themes/types';

const SWTheme = () => {
  const overriddenTheme = _merge({}, sprLight, {
    classes: {
      'spr-interactive-01': { backgroundColor: 'lightblue' },
      'spr-interactive-focus': { backgroundColor: 'blue' },
      'spr-interactive-hover': { backgroundColor: 'blue' },
    },
    theme: { spr: { interactive01: 'lightblue', interactiveHover: 'blue', interactiveFocus: 'blue' } },
  }) as ThemeModule;
  return (
    <SpacewebProvider theme={overriddenTheme} direction="rtl">
      <Button>New Themed Button</Button>
    </SpacewebProvider>
  );
};

export default SWTheme;

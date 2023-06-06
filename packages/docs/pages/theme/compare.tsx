import { ReactElement, PropsWithChildren, useState } from 'react';
import hyperspaceLight from '@sprinklr/spaceweb-themes/hyperspace/light';
import hyperspaceDark from '@sprinklr/spaceweb-themes/hyperspace/dark';
import spacewebLight from '@sprinklr/spaceweb-themes/space/light';
import spacewebDark from '@sprinklr/spaceweb-themes/space/dark';
import { BaseButton } from 'spaceweb/base-button';
import { Box } from 'spaceweb/box';
import { borderRadius } from 'spaceweb/helpers/longHandHelpers';
import { ThemeProvider } from 'spaceweb/theme';
import { Typography } from 'spaceweb/typography';
import Bulb from 'spaceweb-icons/solid/Bulb';

import Button from '../../components/themeCompareExamples/button';
import ButtonGroupExample from '../../components/themeCompareExamples/buttonGroup';
import IconButton from '../../components/themeCompareExamples/iconButton';
import Input from '../../components/themeCompareExamples/input';
import LinkComponent from '../../components/themeCompareExamples/link';
import Select from '../../components/themeCompareExamples/select';
import Tab from '../../components/themeCompareExamples/tab';
import TypographyExample from '../../components/themeCompareExamples/typography';
import Checkbox from '../../components/themeCompareExamples/checkbox';
import FormControl from '../../components/themeCompareExamples/formControl';
import Radio from '../../components/themeCompareExamples/radio';
import Avatar from '../../components/themeCompareExamples/avatar';
import Search from '../../components/themeCompareExamples/search';
import Textarea from '../../components/themeCompareExamples/textarea';
import Tag from '../../components/themeCompareExamples/tag';
import DatePicker from '../../components/themeCompareExamples/datePicker';
import TimePicker from '../../components/themeCompareExamples/timePicker';
import TimeZonePicker from '../../components/themeCompareExamples/timeZonePicker';
import TimeRangePicker from '../../components/themeCompareExamples/timeRangePicker';
import List from '../../components/themeCompareExamples/list';
import Menu from '../../components/themeCompareExamples/menu';
import Modal from '../../components/themeCompareExamples/modal';
import Tooltip from '../../components/themeCompareExamples/tooltip';
import Popover from '../../components/themeCompareExamples/popover';
import Form from '../../components/themeCompareExamples/forms';
import { useThemeContext } from '../../components/themeProperties';
import ComfortableIcon from 'spaceweb-icons/solid/Comfortable';
import { Select as BaseSelect } from 'spaceweb/select';
import DensityExample from '../../components/themeCompareExamples/density';

const Components = (): ReactElement => (
  <Box className="flex justify-center">
    <Box className="mt-8 flex justify-center items-center flex-col" style={{ width: '600px' }}>
      <Button />
      <ButtonGroupExample />
      <IconButton aria-label="Icon Button" />
      <Input />
      <Tab />
      <LinkComponent />
      <TypographyExample />
      <Checkbox />
      <FormControl />
      <Radio />
      <Avatar />
      <Search />
      <Textarea />
      <Tag />
      <List />
    </Box>
  </Box>
);

const PopupComponents = (): ReactElement => (
  <Box className="flex justify-center">
    <Box className="mt-8 flex justify-center items-center flex-col" style={{ width: '600px' }}>
      <Select />
      <DatePicker />
      <TimePicker />
      <TimeZonePicker />
      <TimeRangePicker />
      <Menu />
      <Modal />
      <Tooltip />
      <Popover />
    </Box>
  </Box>
);

const FormComponent = (): ReactElement => (
  <Box className="flex justify-center">
    <Box className="mt-8 flex justify-center items-center flex-col" style={{ width: '600px' }}>
      <Form />
    </Box>
  </Box>
);

const Compare = (props: PropsWithChildren<{}>): ReactElement => {
  const { isDarkMode } = useThemeContext();
  return (
    <Box className="flex">
      <Box className="flex-1 pt-6 border-r-2 border-b-solid spr-border-01">
        <Typography variant="h1" className="flex justify-center">
          Space
        </Typography>
        <ThemeProvider theme={isDarkMode ? spacewebDark : spacewebLight}>{props.children}</ThemeProvider>
      </Box>
      <Box className="flex-1 pt-6">
        <Typography variant="h1" className="flex justify-center">
          Hyperspace
        </Typography>
        <ThemeProvider theme={isDarkMode ? hyperspaceDark : hyperspaceLight}>{props.children}</ThemeProvider>
      </Box>
    </Box>
  );
};

const IconographyPage = (props: {
  toggleTheme: () => void;
  toggleDirection: () => void;
  path: string;
  toggleThemeMode: () => void;
}): ReactElement => {
  const { toggleDarkMode, setDensityName, density } = useThemeContext();
  const [state, setState] = useState('DEFAULT');
  return (
    <Box className="spr-text-01">
      <Compare>
        <Components />
      </Compare>
      <Typography variant="h1" className="w-full text-center py-6">
        Popup Components
      </Typography>
      <Compare>
        <PopupComponents />
      </Compare>
      <BaseButton
        onClick={toggleDarkMode}
        className={['fixed spr-tooltip-01 px-3 py-3', { top: '4px', right: '4px', ...borderRadius('6px') }]}
      >
        <Bulb className="h-7 w-7 spr-text-05" />
      </BaseButton>

      <BaseSelect
        options={[
          { id: 'DEFAULT', density: 'DEFAULT' },
          { id: 'COMFORTABLE', density: 'COMFORTABLE' },
          { id: 'SPACIOUS', density: 'SPACIOUS' },
          { id: 'COMPACT', density: 'COMPACT' },
        ]}
        labelKey="id"
        valueKey="density"
        onChange={({ value: _value }): void => {
          console.log(_value);
          setDensityName(_value[0].density);
        }}
        value={[{ id: density, density }]}
        className={[
          'fixed spr-tooltip-01 px-3 py-3',
          { width: '150px', top: '4px', right: '74px', ...borderRadius('6px') },
        ]}
      />

      <Typography variant="h1" className="w-full text-center py-6">
        Spaceweb form
      </Typography>
      <Compare>
        <FormComponent />
      </Compare>
      <Typography variant="h1" className="w-full text-center py-6">
        Density
      </Typography>
      <Compare>
        <DensityExample />
      </Compare>
    </Box>
  );
};

export default IconographyPage;

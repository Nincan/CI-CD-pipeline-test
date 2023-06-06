import useStyle from 'spaceweb/style/useStyle';
import { useOverrides, mergeOverrides, getOverrides } from 'spaceweb/overrides';
import { Button, IconButton } from 'spaceweb/button';
import { ButtonGroup, StatefulButtonGroup } from 'spaceweb/button-group';
import { RadioGroup, Radio, StatefulRadioGroup } from 'spaceweb/radio';
import { Checkbox, StatefulCheckbox } from 'spaceweb/checkbox';
import { Switch } from 'spaceweb/switch';
import { PhoneInput } from 'spaceweb/phone-input';
import { FormControl } from 'spaceweb/form-control';
import { Input, StatefulInput, MaskedInput } from 'spaceweb/input';
import { PaymentCard } from 'spaceweb/payment-card';
import { Textarea } from 'spaceweb/textarea';
import { Search, StatefulSearch } from 'spaceweb/search';
import { Select, StatefulSelect } from 'spaceweb/select';
import { AsyncSelect, GroupedAsyncSelect } from 'spaceweb/asyncSelect';
import { Tag, AvatarTag } from 'spaceweb/tag';
import { Slider, StatefulSlider } from 'spaceweb/slider';
import { DatePicker, StatelessDatePicker } from 'spaceweb/date-picker';
import { TimezonePicker } from 'spaceweb/time-zone-picker';
import { TimePicker } from 'spaceweb/time-picker';
import { TimeRangePicker } from 'spaceweb/time-range-picker';
import { Typography } from 'spaceweb/typography';
import { Avatar, StyledAvatar } from 'spaceweb/avatar';
import { Badge } from 'spaceweb/badge';
import { DateInput } from 'spaceweb/date-input';
import {
  List,
  ListItem,
  ListItemText,
  StyledList,
  StyledListItem,
  StyledStartEnhancer,
  StyledEndEnhancer,
  StyledListItemDivider,
} from 'spaceweb/list';
import { Image } from 'spaceweb/image';
import { Video } from 'spaceweb/video';
import { Loader } from 'spaceweb/loader';
import { LinearProgress, CircularProgress } from 'spaceweb/progress';
import { Snackbar } from 'spaceweb/snackbar';
import { Box } from 'spaceweb/box';
import { Stack, StackItem } from 'spaceweb/stack';
import { Grid, Col } from 'spaceweb/grid';
import { BaseButton, StyledBaseButton } from 'spaceweb/base-button';
import SpacewebProvider from 'spaceweb/spacewebProvider';
import sprLight from '@sprinklr/spaceweb-themes/space/light';
import sprDark from '@sprinklr/spaceweb-themes/space/dark';
import { TabList, Tab, StatefulTabs } from 'spaceweb/tabs';
import { Link } from 'spaceweb/link';
import { Menu, MenuItem } from 'spaceweb/menu';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'spaceweb/modal';
import { StatefulTooltip } from 'spaceweb/tooltip';
import { StatefulPopover } from 'spaceweb/popover';
import { ThemeProvider } from 'spaceweb/theme';
import { Banner, BannerItem } from 'spaceweb/banner';
import { getCharacter } from 'rickmortyapi';
import { Breadcrumb, BreadcrumbItem } from 'spaceweb/breadcrumb';

// numeraljs bug
// TypeError: en-us locale already registered.
// at Function.numeral.register (spaceweb/node_modules/numeral/numeral.js:468:19)
/*
import { BarChart } from '@sprinklr/spaceweb-charts/components/charts/barChart';
import { SelfServeCard } from 'componentConfigs/charts/SelfServeCard';
import { BubblePlotChart } from '@sprinklr/spaceweb-charts/components/charts/bubblePlotChart';
import { data } from '@sprinklr/spaceweb-charts/components/charts/fixtures';
import { MetricBarChart } from '@sprinklr/spaceweb-charts/components/charts/metricBarChart/MetricBarChart';
import { ColumnChart } from '@sprinklr/spaceweb-charts/components/charts/columnChart';
import { LineChart } from '@sprinklr/spaceweb-charts/components/charts/lineChart';
import { PieChart } from '@sprinklr/spaceweb-charts/components/charts/pieChart';
import { GeoChart } from '@sprinklr/spaceweb-charts/components/charts/geoChart/GeoChart';
import { WordCloud } from '@sprinklr/spaceweb-charts/components/charts/wordCloud';
*/

import { YardConfig } from 'componentConfigs/types';

const LivePreviewConfig: Omit<YardConfig, 'imports' | 'props'> = {
  componentName: 'div',
  scope: {
    DateInput,
    useStyle,
    Button,
    IconButton,
    ButtonGroup,
    StatefulButtonGroup,
    Radio,
    RadioGroup,
    StatefulRadioGroup,
    Checkbox,
    StatefulCheckbox,
    FormControl,
    Input,
    MaskedInput,
    StatefulInput,
    PaymentCard,
    Textarea,
    Search,
    StatefulSearch,
    Select,
    AsyncSelect,
    GroupedAsyncSelect,
    StatefulSelect,
    Tag,
    AvatarTag,
    Slider,
    StatefulSlider,
    DatePicker,
    StatelessDatePicker,
    TimezonePicker,
    TimePicker,
    TimeRangePicker,
    Typography,
    Avatar,
    StyledAvatar,
    Badge,
    List,
    ListItem,
    ListItemText,
    StyledList,
    StyledListItem,
    StyledListItemDivider,
    StyledStartEnhancer,
    StyledEndEnhancer,
    Image,
    Video,
    Loader,
    LinearProgress,
    CircularProgress,
    Snackbar,
    Box,
    Stack,
    StackItem,
    Grid,
    Col,
    BaseButton,
    StyledBaseButton,
    SpacewebProvider,
    sprLight,
    sprDark,
    TabList,
    Tab,
    StatefulTabs,
    Link,
    Menu,
    MenuItem,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    StatefulTooltip,
    StatefulPopover,
    useOverrides,
    mergeOverrides,
    getOverrides,
    ThemeProvider,
    Banner,
    BannerItem,
    Switch,
    PhoneInput,
    getCharacter,
    Breadcrumb,
    BreadcrumbItem,
    /*
                    BarChart,
                    SelfServeCard,
                    data,
                    BubblePlotChart,
                    MetricBarChart,
                    ColumnChart,
                    LineChart,
                    PieChart,
                    GeoChart,
                    WordCloud,*/
  },
  theme: [],
};

const CODE_QUERY_PARAM = 'code';

const INITIAL_CODE = `import * as React from "react";
import { Button } from "spaceweb/button";

export default () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [nameValue, setNameValue] = React.useState("");
  const [ccValue, setCCValue] = React.useState("");
  const [checked, setChecked] = React.useState(false);

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      <Box className="border border-solid rounded-4 spr-border-01 my-16 p-4 nav-ui-01">
        <Box className="my-4">
          <Stack direction="vertical" gap={3}>
            <Typography className="spr-text-01" variant="h1" align="center">
              Welcome to Spaceweb Live
            </Typography>
            <Typography className="spr-text-02 mx-2" variant="h3">
              A new way to test your components.
            </Typography>
          </Stack>
          <Stack className="mx-2 my-4" direction="vertical" gap={2}>
            <Typography className="spr-text-01" variant="l1">
              Component imports are not necessary.
            </Typography>
            <Typography className="spr-text-01 mx-2" variant="l2" $as="em">
              * Charts and icons are not supported.
            </Typography>
          </Stack>
        </Box>
        <hr />
        <Typography className="spr-text-01 mx-2" variant="h3">
          Some example components:
        </Typography>
        <Box className="flex flex-col justify-center px-2">
          <Button
            className="my-3"
            intent="success"
            onClick={() => setIsModalOpen(true)}
          >
            Click me to open a modal.
          </Button>
          <Modal onClose={closeModal} isOpen={isModalOpen}>
            <ModalHeader noBorder>Hello world</ModalHeader>
            <ModalBody className="px-7">
              Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla
              ornare faucibus ex, non facilisis nisl. Maecenas aliquet mauris ut
              tempus.
            </ModalBody>
            <ModalFooter noBorder>
              <Button className="mr-4" variant="secondary" onClick={closeModal}>
                Cancel
              </Button>
              <Button onClick={closeModal}>Okay</Button>
            </ModalFooter>
          </Modal>
          <List className="border border-solid rounded-4 spr-border-01">
            <ListItem>
              <PaymentCard
                value={ccValue}
                onChange={(e) => setCCValue(e.target.value)}
                debouncedOnChange={(e) => console.log(e.target.value)}
                debounceInterval={200}
                style="w-3/4"
                intent="default"
                size="lg"
                variant="default"
                placeholder="Please enter your credit card number..."
              />
            </ListItem>
            <ListItem>
              <Box className="flex justify-between">
                <Input
                  value={nameValue}
                  onChange={(e) => setNameValue(e.target.value)}
                  debouncedOnChange={(e) => console.log(e.target.value)}
                  debounceInterval={200}
                  style="w-3/4"
                  intent="default"
                  size="lg"
                  variant="default"
                  placeholder="Your Name"
                />
                <Button onClick={() => alert("Your name is: " + nameValue + " and your credit card number is: " + ccValue)}>Submit</Button>
              </Box>
            </ListItem>
          </List>
        </Box>
        <Stack className="my-4" direction="vertical" gap={3}>
          <Typography className="spr-text-01 text-center" variant="h2">
            Ready to start coding?
          </Typography>
          <Checkbox
            className="justify-center"
            checked={checked}
            size="md"
            intent="default"
            onChange={(e) => setChecked(e.target.checked)}
          >
            I am ready!
          </Checkbox>
        </Stack>
      </Box>
    </>
  );
};
`;

export { LivePreviewConfig, CODE_QUERY_PARAM, INITIAL_CODE };

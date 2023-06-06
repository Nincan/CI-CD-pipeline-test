import { Calendar, DateFnsLocalizer } from '@sprinklr/spaceweb-calendar';
import { Box } from '@sprinklr/spaceweb/box';

import hiLocale from 'date-fns/locale/hi';

import '@sprinklr/spaceweb-calendar/styles/calendar.css';

import { EVENTS } from './fixtures';

// start week from Monday
const LOCALIZER: DateFnsLocalizer = {
  locale: hiLocale,
};
const Locale = () => (
  <Box>
    <Box className={['mt-10', { height: '70vh', minWidth: '800px' }]}>
      <Calendar
        localizer={LOCALIZER}
        startAccessor="start"
        endAccessor="end"
        events={EVENTS}
        defaultView="week"
        view="week"
      />
    </Box>
  </Box>
);

export default Locale;

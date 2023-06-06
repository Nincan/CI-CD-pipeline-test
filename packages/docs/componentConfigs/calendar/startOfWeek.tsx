import { Calendar, DateFnsLocalizer } from '@sprinklr/spaceweb-calendar';
import { Box } from '@sprinklr/spaceweb/box';

import startOfWeek from 'date-fns/startOfWeek';

import '@sprinklr/spaceweb-calendar/styles/calendar.css';

import { EVENTS } from './fixtures';

// start week from Monday
const LOCALIZER: DateFnsLocalizer = {
  startOfWeek: (date, options) => startOfWeek(date, { ...options, weekStartsOn: 1 }),
};
const StartOfWeek = () => (
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

export default StartOfWeek;

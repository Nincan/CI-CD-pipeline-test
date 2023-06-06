import { useState, useCallback, useMemo, HTMLAttributes } from 'react';
import { useStyle } from 'spaceweb/style';

import { Button } from 'spaceweb/button';
import { ButtonGroup } from 'spaceweb/button-group';
import { Calendar, Event } from '@sprinklr/spaceweb-calendar';
import { Box } from '@sprinklr/spaceweb/box';

import addDays from 'date-fns/addDays';
import getHours from 'date-fns/getHours';
import getMinutes from 'date-fns/getMinutes';
import getDay from 'date-fns/getDay';

import '@sprinklr/spaceweb-calendar/styles/calendar.css';

import { EVENTS, getRandomIntent } from './fixtures';
import { SlotPropGetter } from 'react-big-calendar';

const VIEWS = [
  { label: 'Week', id: 'week' },
  { label: 'Day', id: 'day' },
];

const MIN_HOURS = 9;
const MAX_HOURS = 17;

const BaseCalendar = () => {
  const [selectedView, setSelectedView] = useState<'week' | 'day'>('week');
  const [visibleDate, setVisibleDate] = useState<Date>(new Date());
  const [events, setEvents] = useState<Event[]>(EVENTS);

  const { getStyle } = useStyle();

  const handleViewChange = useCallback(view => {
    if (['week', 'day'].includes(view)) {
      setSelectedView(view);
    }
  }, []);

  const onSelectSlot = useCallback(
    ({ start, end }) =>
      setEvents(prev =>
        prev.concat([
          {
            id: prev.length,
            start: new Date(start),
            end: new Date(end),
            intent: getRandomIntent(),
            title: `Event ${prev.length}`,
          },
        ])
      ),
    []
  );

  const onSelecting = useCallback(({ start, end }) => {
    if (
      getHours(start) >= MIN_HOURS &&
      (getHours(end) < MAX_HOURS || (getHours(end) === MAX_HOURS && getMinutes(end) === 0))
    ) {
      return true;
    }
    return false;
  }, []);

  const slotPropGetter: SlotPropGetter = useCallback(
    date => {
      if (getHours(date) >= MIN_HOURS && getHours(date) < MAX_HOURS && getDay(date) >= 1 && getDay(date) <= 5) {
        return { style: getStyle('spr-ui-01') as HTMLAttributes<HTMLDivElement> };
      }
      return {};
    },
    [getStyle]
  );

  return (
    <Box>
      <Controls selectedView={selectedView} setSelectedView={setSelectedView} setVisibleDate={setVisibleDate} />
      <Box className={['mt-10', { height: '70vh', minWidth: '800px' }]}>
        <Calendar
          startAccessor="start"
          endAccessor="end"
          events={events}
          defaultView="week"
          view={selectedView}
          date={visibleDate}
          selectable
          onSelectSlot={onSelectSlot}
          onSelecting={onSelecting}
          onView={handleViewChange}
          slotPropGetter={slotPropGetter}
        />
      </Box>
    </Box>
  );
};

function Controls({ selectedView, setVisibleDate, setSelectedView }) {
  const selectedButtonGroup = useMemo(() => [VIEWS.findIndex(({ id }) => id === selectedView)], [selectedView]);
  return (
    <Box>
      <ButtonGroup
        className="mr-10"
        onClick={(event, index) => {
          setSelectedView(VIEWS[index].id);
        }}
        selected={selectedButtonGroup}
      >
        <Button>Week</Button>
        <Button>Day</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button onClick={() => setVisibleDate(last => addDays(last, selectedView === 'week' ? -7 : -1))}>
          Previous
        </Button>
        <Button onClick={() => setVisibleDate(new Date())}>Today</Button>
        <Button onClick={() => setVisibleDate(last => addDays(last, selectedView === 'week' ? 7 : 1))}>Next</Button>
      </ButtonGroup>
    </Box>
  );
}

export default BaseCalendar;

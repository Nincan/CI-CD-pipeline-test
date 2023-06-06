import { useState, useCallback, useMemo } from 'react';
import { Button } from 'spaceweb/button';
import { ButtonGroup } from 'spaceweb/button-group';
import { Calendar, Event } from '@sprinklr/spaceweb-calendar';
import { Box } from '@sprinklr/spaceweb/box';

import addDays from 'date-fns/addDays';

import '@sprinklr/spaceweb-calendar/styles/calendar.css';

import { EVENTS, getRandomIntent } from './fixtures';

const VIEWS = [
  { label: 'Month', id: 'month' },
  { label: 'Week', id: 'week' },
  { label: 'Day', id: 'day' },
];

const BaseCalendar = () => {
  const [selectedView, setSelectedView] = useState<'week' | 'day'>('week');
  const [visibleDate, setVisibleDate] = useState<Date>(new Date());
  const [events, setEvents] = useState<Event[]>(EVENTS);

  const scrollToTime = useMemo(() => new Date(), []);

  const handleViewChange = useCallback(view => {
    if (['month', 'week', 'day'].includes(view)) {
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
          onView={handleViewChange}
          scrollToTime={scrollToTime}
          popup
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
        <Button>Month</Button>
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

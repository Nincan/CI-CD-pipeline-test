import { Calendar } from '@sprinklr/spaceweb-calendar';
import type { EventId } from '@sprinklr/spaceweb-calendar';
import { Box } from '@sprinklr/spaceweb/box';

import '@sprinklr/spaceweb-calendar/styles/calendar.css';

import { EVENTS } from './fixtures';
import { useCallback, useState } from 'react';

const BulkSelect = () => {
  const [selectedEvents, setSelectedEvents] = useState<Set<EventId>>(new Set());

  const onSelectEvent = useCallback(event => {
    setSelectedEvents(prev => {
      const newSet = new Set(prev);
      if (prev.has(event.id)) {
        newSet.delete(event.id);
      } else {
        newSet.add(event.id);
      }
      return newSet;
    });
  }, []);
  return (
    <Box>
      <Box className={['mt-10', { height: '70vh', minWidth: '800px' }]}>
        <Calendar
          startAccessor="start"
          endAccessor="end"
          events={EVENTS}
          defaultView="week"
          view="week"
          selected={selectedEvents}
          onSelectEvent={onSelectEvent}
        />
      </Box>
    </Box>
  );
};

export default BulkSelect;

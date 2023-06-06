import { useCallback, useMemo, useState } from 'react';
import { Button } from 'spaceweb/button';
import { ButtonGroup } from 'spaceweb/button-group';
import { Calendar } from '@sprinklr/spaceweb-calendar';
import { Box } from '@sprinklr/spaceweb/box';

import '@sprinklr/spaceweb-calendar/styles/calendar.css';

const VIEWS = [
  { label: 'Week', id: 'week' },
  { label: 'Day', id: 'day' },
];

const LoadingCalendar = () => {
  const [selectedView, setSelectedView] = useState<'week' | 'day'>('week');

  const handleViewChange = useCallback(view => {
    if (['week', 'day'].includes(view)) {
      setSelectedView(view);
    }
  }, []);

  return (
    <Box>
      <Controls selectedView={selectedView} setSelectedView={setSelectedView} />
      <Box className={['mt-10', { height: '70vh', minWidth: '800px' }]}>
        <Calendar
          startAccessor="start"
          endAccessor="end"
          loading
          events={[]}
          defaultView="week"
          view={selectedView}
          onView={handleViewChange}
        />
      </Box>
    </Box>
  );
};

function Controls({ selectedView, setSelectedView }) {
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
    </Box>
  );
}

export default LoadingCalendar;

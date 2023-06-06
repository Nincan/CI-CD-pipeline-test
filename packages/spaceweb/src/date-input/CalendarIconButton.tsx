import { ReactElement } from 'react';

import BaseCalendarIcon from '../icon/components/calendar-solid';
import { IconButton } from '../button';
import { Box } from '../box';

import { SharedProps } from 'baseui/input';
import { useLocale } from '../locale';
import { useStyle } from '../style';

export const CalendarIconButton = (props: SharedProps): ReactElement => {
  const locale = useLocale();
  const { theme } = useStyle();
  return (
    <Box className="flex items-center h-full pl-1">
      <IconButton
        size={theme.density === 'COMPACT' ? 'xxxs' : 'xxs'}
        className="flex items-center"
        disabled={props.$disabled}
        type="button"
        aria-label={locale.calendar.calendarButtonAriaLabel}
      >
        <BaseCalendarIcon />
      </IconButton>
    </Box>
  );
};

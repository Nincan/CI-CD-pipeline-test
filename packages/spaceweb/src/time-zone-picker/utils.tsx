import { findTimeZone, getZonedTime, listTimeZones } from 'timezone-support/dist/index-1900-2050';
import { formatZonedTime } from 'timezone-support/dist/parse-format';

import { Timezone } from './types';

export const buildTimeZones = (compareDate: Date): Timezone[] =>
  listTimeZones()
    .map(zone => {
      const timezone = findTimeZone(zone);
      const zonedTime = getZonedTime(compareDate, timezone);

      // formatZonedTime generates timezone labels based on string that is passed in second arguement
      // 'z' gets replaced by timezone abbreviation and 'Z' gets replaced by time difference
      const formatted = formatZonedTime(zonedTime, `z - [${zone}] ([GMT] Z)`).replace('_', ' ');

      const option = {
        id: zone,
        label: formatted,
        offset: zonedTime.zone!.offset,
      };

      return option;
    })
    .map(option => {
      // Some timezone abbreviations has digits in it. Below regex removes those abbreviation
      const rgx = /(^(\+|-)\d+\s- )/;
      const matches = option.label.match(rgx);
      if (matches) {
        const prefix = matches[0];
        option.label = option.label.split(prefix)[1];
      }
      return option;
    })
    .sort((a, b) => {
      const offsetDelta = b.offset - a.offset;
      if (offsetDelta !== 0) return offsetDelta;

      if (a.label < b.label) return -1;
      if (a.label > b.label) return 1;
      return 0;
    });

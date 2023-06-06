import { buildTimeZones } from '../utils';
import * as timeZoneUtils from 'timezone-support/dist/index-1900-2050';

const TIME_ZONES = [
  'Europe/Andorra',
  'Asia/Dubai',
  'Europe/Tirane',
  'Europe/Brussels',
  'Asia/Thimphu',
  'Africa/Casablanca',
  'America/Argentina/Mendoza',
  'Asia/Barnaul',
  'Asia/Chita',
  'Etc/GMT-9',
  'Indian/Mahe',
  'Pacific/Tarawa',
];

const listTimeZonesMock = jest.spyOn(timeZoneUtils, 'listTimeZones');
listTimeZonesMock.mockImplementation(() => TIME_ZONES);

describe('buildTimeZones', () => {
  const timeZoneList = buildTimeZones(new Date());

  test('buildTimeZones should generate timezones with correct label format', () => {
    timeZoneList.forEach(({ label, id }) => {
      expect(label).toEqual(expect.stringMatching(new RegExp(`${id} \\(GMT [+|-]\\d\\d:\\d\\d\\)`)));
    });
  });
});

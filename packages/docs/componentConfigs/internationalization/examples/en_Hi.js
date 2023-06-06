import { LocaleProvider } from 'spaceweb/locale';
import { StatefulSelect } from 'spaceweb/select';

const en_Hi = {
  select: {
    noResultsMsg: 'कोई परिणाम नहीं',
  },
};

export default () => (
  <LocaleProvider locale={en_Hi}>
    <StatefulSelect />
  </LocaleProvider>
);

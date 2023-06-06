import { useState } from 'react';
import { PhoneInput, ISO_TO_FLAG_OFFSET } from 'spaceweb/phone-input';

const iso2FlagEmoji = iso =>
  String.fromCodePoint(...Array.from(iso.toUpperCase()).map(char => char.charCodeAt(0) + ISO_TO_FLAG_OFFSET));
const CustomMapIsoToLabel = () => {
  const [value, setValue] = useState(undefined);
  return <PhoneInput value={value} onChange={setValue} mapIsoToLabel={iso => iso2FlagEmoji(iso)} />;
};
export default CustomMapIsoToLabel;

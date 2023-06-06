import { Typography } from 'spaceweb/typography';

export function FirstColumnRenderer({ data, rowIndex, config }) {
  return (
    <Typography variant={data[rowIndex].Variant} className="spr-text-01 pl-2 truncate">{`${
      data[rowIndex][config.columnKey]
    }`}</Typography>
  );
}

export function ColumnRenderer({ data, rowIndex, config }) {
  return (
    <Typography style={{ whiteSpace: 'break-spaces' }} className="spr-text-01 pl-2 truncate">{`${
      data[rowIndex][config.columnKey]
    }`}</Typography>
  );
}

import * as React from 'react';
import { StaticTable } from '@sprinklr/spaceweb-table/variants/StaticTable';
import { DISPLAY_VARIANT_DATA, DISPLAY_VARIANT_COLUMNS } from '../data';

const overrides = { Table: { props: { rowHeight: 50 } } };

export default (): React.ReactElement => (
  <StaticTable overrides={overrides} hideFooter data={DISPLAY_VARIANT_DATA} columns={DISPLAY_VARIANT_COLUMNS} />
);

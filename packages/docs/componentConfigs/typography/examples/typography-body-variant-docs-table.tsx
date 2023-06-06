import * as React from 'react';
import { StaticTable } from '@sprinklr/spaceweb-table/variants/StaticTable';
import { BODY_VARIANT_COLUMNS, BODY_VARIANT_DATA } from '../data';

const overrides = { Table: { props: { rowHeight: 50 } } };

export default (): React.ReactElement => (
  <StaticTable overrides={overrides} hideFooter data={BODY_VARIANT_DATA} columns={BODY_VARIANT_COLUMNS} />
);

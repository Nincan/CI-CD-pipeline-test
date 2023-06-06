import { FirstColumnRenderer, ColumnRenderer } from './utils';
export const BODY_VARIANT_DATA = [
  {
    id: '0',
    Variant: 'body-8',
    'Font Size': '8px',
    'Line Height': '10px',
    Usage: 'Limited Usage for specific reason',
  },
  {
    id: '1',
    Variant: 'body-10',
    'Font Size': '10px',
    'Line Height': '12px',
    Usage: 'Limited Usage for specific reason',
  },
  {
    id: '2',
    Variant: 'body-12',
    'Font Size': '12px',
    'Line Height': '15px',
    Usage: 'Limited Usage for specific reason',
  },
  {
    id: '3',
    Variant: 'body-13',
    'Font Size': '13px',
    'Line Height': '16px',
    Usage: 'Default size for Compact Mode. Body text, controls, meta data, commands, checkbox and switch groups.',
  },
  {
    id: '4',
    Variant: 'body-14',
    'Font Size': '14px',
    'Line Height': '18px',
    Usage: 'Default size Comfort Mode. Body text, controls, commands, checkbox and switch groups.',
  },
  {
    id: '5',
    Variant: 'body-16',
    'Font Size': '16px',
    'Line Height': '20px',
    Usage: 'Body copy that has slightly higher level in hierarchy than 14px, but is NOT a headline.',
  },
];

export const DISPLAY_VARIANT_DATA = [
  {
    id: '0',
    Variant: 'display-18',
    'Font Size': '18px',
    'Line Height': '24px',
    Usage: 'Smallest size for any headline for small areas.',
  },
  {
    id: '1',
    Variant: 'display-20',
    'Font Size': '20px',
    'Line Height': '26px',
    Usage: 'Most common header size for Page Controls.',
  },
  {
    id: '2',
    Variant: 'display-24',
    'Font Size': '24px',
    'Line Height': '34px',
    Usage: 'Header variant',
  },
  {
    id: '3',
    Variant: 'display-28',
    'Font Size': '28px',
    'Line Height': '34px',
    Usage: 'Header variant',
  },
  {
    id: '4',
    Variant: 'display-32',
    'Font Size': '32px',
    'Line Height': '38px',
    Usage: 'Header variant',
  },
  {
    id: '5',
    Variant: 'display-40',
    'Font Size': '40px',
    'Line Height': '46px',
    Usage: 'Largest header size, only used in specific instances',
  },
  {
    id: '6',
    Variant: 'display-42',
    'Font Size': '42px',
    'Line Height': '48px',
    Usage: 'Use cases only',
  },
];

export const DISPLAY_VARIANT_COLUMNS = [
  {
    columnKey: 'Variant',
    width: 170,
    cellRenderer: FirstColumnRenderer,
    displayName: 'Variant',
  },
  {
    columnKey: 'Font Size',
    width: 28,
    cellRenderer: ColumnRenderer,
    displayName: 'Font Size',
  },
  {
    columnKey: 'Line Height',
    width: 40,
    cellRenderer: ColumnRenderer,
    displayName: 'Line Height',
  },
  {
    columnKey: 'Usage',
    width: 200,
    cellRenderer: ColumnRenderer,
    displayName: 'Usage',
  },
];

export const BODY_VARIANT_COLUMNS = [
  {
    columnKey: 'Variant',
    width: 100,
    cellRenderer: FirstColumnRenderer,
    displayName: 'Variant',
  },
  {
    columnKey: 'Font Size',
    width: 35,
    cellRenderer: ColumnRenderer,
    displayName: 'Font Size',
  },
  {
    columnKey: 'Line Height',
    width: 45,
    cellRenderer: ColumnRenderer,
    displayName: 'Line Height',
  },
  {
    columnKey: 'Usage',
    width: 320,
    cellRenderer: ColumnRenderer,
    displayName: 'Usage',
  },
];

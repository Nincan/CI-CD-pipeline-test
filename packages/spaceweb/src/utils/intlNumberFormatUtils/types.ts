export const NUMBER_VARIANTS = {
  EXPANDED_AUTO_FORMAT: 'expandedAutoFormat',
  COMPACT_AUTO_FORMAT: 'compactAutoFormat',
  EXPANDED_DECIMAL_FORMAT: 'expandedDecimalFormat',
  COMPACT_DECIMAL_FORMAT: 'compactDecimalFormat',
} as const;

export type ExpandedAutoFormat = {
  type: typeof NUMBER_VARIANTS.EXPANDED_AUTO_FORMAT;
};

export type CompactAutoFormat = {
  type: typeof NUMBER_VARIANTS.COMPACT_AUTO_FORMAT;
};

export type ExpandedDecimalFormat = {
  type: typeof NUMBER_VARIANTS.EXPANDED_DECIMAL_FORMAT;
  decimalDigits: number;
};

export type CompactDecimalFormat = {
  type: typeof NUMBER_VARIANTS.COMPACT_DECIMAL_FORMAT;
  decimalDigits: number;
};

export type NumberVariant = ExpandedAutoFormat | CompactAutoFormat | ExpandedDecimalFormat | CompactDecimalFormat;

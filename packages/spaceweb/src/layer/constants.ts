export const LAYERS_DEFAULT_ZINDEX = 9999;

export const Z_INDEX = {
  OVERLAY: LAYERS_DEFAULT_ZINDEX, // Modals
  // NOTE: Popover/Tooltip should always be rendered on top of other layers(e.g. Modal)
  POPOVER: 10010, // Popover/Tooltip
  SNACKBAR: 10020, // Snackbar should have the highest zIndex
} as const;

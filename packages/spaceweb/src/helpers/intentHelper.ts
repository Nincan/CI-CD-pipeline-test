export const intentColor = ({ theme }, { $intent = 'default' }, defaultColor = theme.spr.focus01) => {
  switch ($intent) {
    case 'default':
    default: {
      return defaultColor;
    }
    case 'success':
      return theme.spr.supportSuccess;
    case 'warning':
      return theme.spr.supportWarning;
    case 'error':
      return theme.spr.supportError;
  }
};

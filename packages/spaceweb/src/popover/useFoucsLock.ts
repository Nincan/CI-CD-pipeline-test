type Params = { focusLock: boolean; returnFocus: boolean };
export const useFocusLock = ({ focusLock, returnFocus }: Params): Params => {
  let _focusLock = focusLock;
  if (returnFocus) {
    // according to baseui - focusLock should be true for returnFocus to work
    _focusLock = true;
  }
  return { focusLock: _focusLock, returnFocus };
};

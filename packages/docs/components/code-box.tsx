import { ReactElement, PropsWithChildren } from 'react';
import { useStyle } from 'spaceweb/style';

const CodeBox = ({ children }: PropsWithChildren<{}>): ReactElement => {
  const { css, theme } = useStyle();
  return (
    <div
      className={css('pl-2 mb-4 mt-4', {
        overflow: 'auto',
        borderLeft: `5px solid ${theme.spr.highlight}`,
        backgroundColor: theme.spr.ui01,
      })}
    >
      {children}
    </div>
  );
};

export default CodeBox;

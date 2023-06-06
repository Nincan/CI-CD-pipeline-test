import { ReactElement } from 'react';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import { lightTheme } from 'react-view';
import darkTheme from './yard/dark-theme';
import CodeBox from './code-box';
import { useThemeContext } from './themeProperties';

const Code = ({ children, language }: { language: Language; children: string }): ReactElement => {
  const { isDarkMode } = useThemeContext();
  return (
    <CodeBox>
      <Highlight
        {...defaultProps}
        code={children.replace(/[\r\n]+$/, '')}
        language={language}
        theme={isDarkMode ? darkTheme : lightTheme}
      >
        {({ style, tokens, getLineProps, getTokenProps }) => (
          <pre dir="ltr" style={{ ...style, padding: '10px 10px' }}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </CodeBox>
  );
};

Code.defaultProps = {
  language: 'jsx',
};

export default Code;

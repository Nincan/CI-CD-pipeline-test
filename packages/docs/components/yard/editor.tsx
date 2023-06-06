import * as React from 'react';
import SimpleEditor from 'react-simple-code-editor';
import Highlight, { Prism } from 'prism-react-renderer';
// NOTE: `getInputContainerStyles` is internal method and should not be imported directly
import { getInputContainerStyles } from 'spaceweb/input/styled-components';
import useStyle from 'spaceweb/style/useStyle';

import { lightTheme, useValueDebounce, TTransformToken, TEditorProps, TEditorLanguage } from 'react-view';
import darkTheme from './dark-theme';
import { useThemeContext } from '../themeProperties';
import { Box } from 'spaceweb/box';

const highlightCode = (
  code: string,
  theme: typeof lightTheme,
  transformToken?: TTransformToken,
  language?: TEditorLanguage
): React.ReactElement => (
  <Highlight Prism={Prism} code={code} theme={theme} language={language || 'jsx'}>
    {({ tokens, getLineProps, getTokenProps }): React.ReactElement => (
      <>
        {tokens.map((line, i) => (
          <div {...getLineProps({ line, key: i })}>
            {line.map((token, key) => {
              const tokenProps = getTokenProps({ token, key });

              if (transformToken) {
                return transformToken(tokenProps);
              }
              return <span {...tokenProps} />;
            })}
          </div>
        ))}
      </>
    )}
  </Highlight>
);

const Editor = ({
  code: globalCode,
  transformToken,
  onChange,
  placeholder,
  className,
  language,
  small,
  fullHeight,
  innerPadding,
}: TEditorProps & { fullHeight?: boolean; innerPadding?: number }): React.ReactElement => {
  const { css } = useStyle();
  const { isDarkMode } = useThemeContext();
  const plainStyles = isDarkMode ? darkTheme : lightTheme;
  const editorTheme = {
    ...plainStyles,
    plain: {
      ...plainStyles.plain,
      fontSize: small ? '13px' : '14px',
      whiteSpace: 'break-spaces',
    },
  };

  const [code, setCode] = useValueDebounce<string>(globalCode, onChange);

  return (
    <Box
      className={
        className ||
        css([
          {
            paddingLeft: '4px',
            paddingRight: '4px',
            paddingTop: small ? '2px' : '0px',
            paddingBottom: small ? '2px' : '0px',
            maxWidth: small ? '100%' : 'auto',
            overflow: 'hidden',
          },
          getInputContainerStyles,
        ])
      }
    >
      <style>{`
      .npm__react-simple-code-editor__textarea { outline: none !important } ${
        fullHeight ? '.innerEditor { min-height: 100vh }' : ''
      }
      `}</style>
      <SimpleEditor
        value={code || ''}
        placeholder={placeholder}
        highlight={_code => highlightCode(_code, editorTheme, transformToken, language)}
        onValueChange={_code => setCode(_code)}
        padding={innerPadding ?? small ? 4 : 12}
        style={editorTheme.plain as React.CSSProperties}
        className="innerEditor"
      />
    </Box>
  );
};
export default Editor;

import { useState, useEffect, ReactElement } from 'react';
import { useView, Compiler, Error } from 'react-view';
import { useRouter } from 'next/router';
import presetTypescript from '@babel/preset-typescript';
import { Box } from 'spaceweb/box';
import { Popover } from 'spaceweb/popover';
import { IconButton } from 'spaceweb/button';
import Close from 'spaceweb-icons/line/Close';
import { Stack, StackItem } from 'spaceweb/stack';
import { Typography } from 'spaceweb/typography';
import useStyle from 'spaceweb/style/useStyle';
import { transparentScrollbarStyles } from 'spaceweb/helpers/commonStyles';
import { LivePreviewConfig } from './config';
import Editor from '../yard/editor';

export type LayoutType = 'horizontal' | 'vertical' | 'fullscreen';
export interface LivePreviewProps {
  layoutType: LayoutType;
  smScreen?: boolean;
  queryStringName?: string;
  initialCode?: string;
}

// "a" is used as a workaround since the textarea does not respond to input when "button" appears in the Popover.
const CloseButton = (closeProps): ReactElement => (
  <IconButton $as="a" aria-label="Close Icon Button" {...closeProps}>
    <Close />
  </IconButton>
);

const LivePreview = ({
  layoutType,
  smScreen = false,
  queryStringName,
  initialCode,
}: LivePreviewProps): ReactElement => {
  const router = useRouter();
  const { push, pathname } = router;

  const params = useView({
    initialCode,
    scope: LivePreviewConfig.scope,
    onUpdate: ({ code }) => {
      const queryKey = queryStringName || 'code';
      push({
        pathname,
        query: {
          [queryKey]: code,
        },
      });
    },
  });

  const [opened, setOpened] = useState(false);
  const { css, theme } = useStyle();

  useEffect(() => {
    setOpened(Boolean(params.errorProps.msg));
  }, [params.errorProps.msg]);

  return (
    <Box
      className={css(`box-border flex flex-auto p-1 relative ${layoutType === 'horizontal' ? 'flex-col' : ''}`, {
        height: 'calc(100vh - 100px)',
      })}
    >
      {layoutType !== 'fullscreen' && !smScreen && (
        <Box
          className={css(
            'flex flex-1 border border-solid spr-border-02 spr-ui-01 rounded-lg overflow-auto relative spr-border-01',
            { ':hover': { borderColor: theme.spr.focus01 }, ':focus': { borderColor: theme.spr.focus01 } }
          )}
        >
          <Box
            className="overflow-auto spr-ui-01 flex-1 relative"
            overrides={{
              Box: {
                style: [transparentScrollbarStyles],
              },
            }}
          >
            <Editor
              className="box-border px-1 overflow-hidden border-0"
              language="tsx"
              innerPadding={8}
              fullHeight
              {...params.editorProps}
            />
            <Popover
              isOpen={opened}
              content={
                <Stack
                  gap={0}
                  direction="vertical"
                  className="max-w-sm md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg"
                >
                  <Box className="flex justify-between items-center pl-4">
                    <Typography className="spr-text-01" weight="semibold" variant="h4">
                      Compilation failed
                    </Typography>
                    <CloseButton onClick={() => setOpened(false)} />
                  </Box>
                  <StackItem>
                    <Error {...params.errorProps} />
                  </StackItem>
                </Stack>
              }
              accessibilityType="none"
              autoFocus={false}
              returnFocus={false}
            >
              <div />
            </Popover>
          </Box>
        </Box>
      )}
      <Box
        className={`${
          layoutType !== 'fullscreen' && !smScreen ? 'hidden md:flex' : 'flex'
        } flex-1 border border-solid spr-border-02 rounded-lg relative overflow-auto`}
      >
        <Box className="overflow-auto spr-ui-01 flex-1 relative">
          <Compiler {...params.compilerProps} presets={[presetTypescript]} />
        </Box>
      </Box>
    </Box>
  );
};

export default LivePreview;

import * as React from 'react';
import { ButtonGroup } from 'spaceweb/button-group';
import { Button, IconButton } from 'spaceweb/button';
import { Box } from 'spaceweb/box';
import { Typography } from 'spaceweb/typography';
import Column1Icon from 'spaceweb-icons/solid/Column1';
import Column2Icon from 'spaceweb-icons/solid/Column2';
import CanvasAssetIcon from 'spaceweb-icons/solid/CanvasAsset';
import { LivePreview } from '../livePreview';
import { fetchShortenedUrl } from '../yard/utils';
import copy from 'copy-to-clipboard';
import { useRouter } from 'next/router';
import { CODE_QUERY_PARAM, INITIAL_CODE } from '../livePreview/config';

enum Layouts {
  vertical = 0,
  horizontal = 1,
  fullscreen = 2,
}
type LayoutType = keyof typeof Layouts;

interface LiveEditorProps {
  layoutType?: LayoutType;
}

type ShareState = 'default' | 'loading' | 'success' | 'error';
type ShareButtonProps = {
  text: string;
  intent: 'default' | 'success' | 'error';
  enabled: boolean;
};

const getShareButtonProps = (state: ShareState): ShareButtonProps => {
  switch (state) {
    case 'default':
      return { text: 'Share', intent: 'default', enabled: true };
    case 'loading':
      return { text: 'Getting link...', intent: 'default', enabled: false };
    case 'success':
      return { text: 'Link copied!', intent: 'success', enabled: true };
    case 'error':
      return { text: 'Failed to copy link', intent: 'error', enabled: true };
    default:
      throw new Error('Invalid share state');
  }
};

const LiveEditor = ({ layoutType = 'vertical' }: LiveEditorProps): React.ReactElement => {
  const [selectedIndex, setSelectedIndex] = React.useState([Layouts[layoutType]]);
  const [smScreen, setSmScreen] = React.useState(false);

  const [shareState, setShareState] = React.useState<ShareState>('default');

  const handleShareCode = async (e: React.MouseEvent): Promise<void> => {
    e.preventDefault();

    setShareState('loading');

    try {
      const response = await fetchShortenedUrl(String(window.location));
      const data = await response.json();

      if (data && data.link) {
        copy(data.link.replace('http://', 'https://'));
      } else {
        throw new Error(data.description);
      }

      setShareState('success');
    } catch (err) {
      console.error(err);
      copy(String(window.location));

      setShareState('error');
    }
  };

  const handleCodePreviewButtonClick = (event: React.MouseEvent<HTMLElement, MouseEvent>, index: number): void => {
    // Preview button (available on mobile only) is equivalent to fullscreen
    if (index === 1) {
      setSmScreen(true);
      setSelectedIndex([Layouts.fullscreen]);
    } else {
      setSmScreen(false);
      setSelectedIndex([Layouts.vertical]);
    }
  };

  const handleLayoutButtonClick = (event: React.MouseEvent<HTMLElement, MouseEvent>, index: number): void => {
    setSelectedIndex([index]);
    setSmScreen(index === Layouts.fullscreen);
  };

  // useView can only be initialised once and query params are only available after first render.
  const { isReady, query } = useRouter();
  const [hydrated, setHydrated] = React.useState(false);
  const [initialCode, setInitialCode] = React.useState(INITIAL_CODE);
  React.useEffect(() => {
    if (!isReady) {
      return;
    }

    setHydrated(true);
    const code = query[CODE_QUERY_PARAM];
    if (typeof code !== 'undefined') {
      setInitialCode(code as string);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isReady]);

  return (
    <>
      <Box className="flex justify-between">
        <Box className="flex items-center">
          <Typography variant="h2" className="spr-text-01 px-2 mt-2 mb-2 mr-2">
            Live Editor
          </Typography>
          <Button
            className="hidden md:inline-flex"
            variant="tertiary"
            onClick={handleShareCode}
            size="sm"
            disabled={!getShareButtonProps(shareState).enabled}
            intent={getShareButtonProps(shareState).intent}
          >
            {getShareButtonProps(shareState).text}
          </Button>
        </Box>
        <ButtonGroup
          className="inline-flex md:hidden justify-end border-0"
          variant="tertiary"
          intent="default"
          size="sm"
          onClick={handleCodePreviewButtonClick}
          shape="default"
          selected={[Number(smScreen)]}
        >
          <Button>Code</Button>
          <Button>Preview</Button>
        </ButtonGroup>
        <ButtonGroup
          className="hidden md:inline-flex justify-end border-0"
          variant="secondary"
          intent="default"
          size="xl"
          onClick={handleLayoutButtonClick}
          shape="square"
          selected={selectedIndex}
        >
          <IconButton bordered tooltipContent="Vertical">
            <Column2Icon />
          </IconButton>
          <IconButton bordered tooltipContent="Horizontal">
            <CanvasAssetIcon />
          </IconButton>
          <IconButton bordered tooltipContent="Full Preview">
            <Column1Icon />
          </IconButton>
        </ButtonGroup>
      </Box>
      {hydrated && (
        <LivePreview
          layoutType={Layouts[selectedIndex[0]] as LayoutType}
          smScreen={smScreen}
          queryStringName={CODE_QUERY_PARAM}
          initialCode={initialCode}
        />
      )}
    </>
  );
};

export default LiveEditor;

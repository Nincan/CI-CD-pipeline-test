import * as React from 'react';
import { Button } from 'spaceweb/button';
import { ButtonGroup } from 'spaceweb/button-group';
import { TImportsConfig } from 'react-view';
import { useRouter } from 'next/router';
import copy from 'copy-to-clipboard';
import { StyleObject } from 'spaceweb/types';
import { useStyle } from 'spaceweb/style';
import { fetchShortenedUrl } from './utils';

type ActionButtonsProps = {
  formatCode: () => void;
  copyCode: () => void;
  copyUrl: () => void;
  reset: () => void;
  code: string;
  componentName: string;
  importsConfig: TImportsConfig;
};

const ActionButtons = ({
  formatCode,
  copyCode,
  reset,
  importsConfig,
  code,
}: ActionButtonsProps): React.ReactElement => {
  const { push, pathname, basePath } = useRouter();
  const { px2rem } = useStyle();

  const onReset = React.useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      reset();
      push(pathname);
    },
    [reset, push, pathname]
  );

  const onCopyUrl = React.useCallback(async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      const response = await fetchShortenedUrl(String(window.location));
      const resJson = await response.json();
      copy(resJson.link.replace('http://', 'https://'));
    } catch (err) {
      console.error(err);
    }
  }, []);

  const onOpenExample = React.useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      const rootPath = window.location.origin + basePath;
      const url = `${rootPath}/live-editor?code=${encodeURIComponent(code)}`;
      window.open(url, '_blank');
    },
    [basePath, code]
  );

  return (
    <ButtonGroup className="mt-2 flex-wrap" variant="tertiary" size="sm">
      <Button onClick={formatCode}>Format</Button>
      <Button onClick={copyCode}>Copy</Button>
      <Button onClick={onReset}>Reset</Button>
      <Button onClick={onCopyUrl}>Copy URL</Button>
      <Button onClick={onOpenExample}>Try example on Live Editor</Button>
      {/* <Button
        $as="a"
        href={`/cheat-sheet#${Object.keys(importsConfig)[0]
          .split('/')[1]
          .toLowerCase()}`}
      >
        API
      </Button> */}
    </ButtonGroup>
  );
};

export default ActionButtons;

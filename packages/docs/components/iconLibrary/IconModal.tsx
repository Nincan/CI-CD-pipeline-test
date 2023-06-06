/* eslint-disable import/prefer-default-export */
import { useState, ReactElement } from 'react';
import copyToClipboard from 'copy-to-clipboard';

import { Button } from 'spaceweb/button';
import { Box } from 'spaceweb/box';
import { Link } from 'spaceweb/link';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'spaceweb/modal';
import * as AllIcons from 'spaceweb-icons';
import { useNotification } from '../../contexts/Snackbar';

import Code from '../code';
//import { isColoredIcon } from './utlis';
import { IconMetadata } from './types';

const getIconUsageCode = (iconMetadata: IconMetadata): string =>
  `import ${iconMetadata.name}Icon from '@sprinklr/spaceweb-icons/${iconMetadata.path}';`;

const createDownloadHref = (content: string): string => `data:text/plain;charset=utf-8,${encodeURIComponent(content)}`;

export const IconModal = ({
  iconMetadata,
  onClose,
  isOpen,
}: {
  iconMetadata: IconMetadata;
  onClose: () => unknown;
  isOpen: boolean;
}): ReactElement => {
  const [svgContainerRef, setSvgContainerRef] = useState<HTMLElement | null>(null);
  const IconComponent = AllIcons[iconMetadata.fullName];
  const notify = useNotification();

  const usageCode = getIconUsageCode(iconMetadata);
  const copyCode = (): void => {
    copyToClipboard(usageCode);
    notify({ message: 'Code copied to Clipboard' });
    onClose();
  };

  const svgContent = svgContainerRef?.innerHTML;

  return (
    <Modal onClose={onClose} closeable isOpen={isOpen} size="sm">
      <ModalHeader>{`${iconMetadata.name}.svg`}</ModalHeader>
      <ModalBody>
        <Box ref={setSvgContainerRef} className={['spr-ui-03 flex justify-center items-center', { height: '230px' }]}>
          <IconComponent size={120} className="spr-icon-01" />
        </Box>
        <Box className={['mt-4', { fontSize: '14px' }]}>
          <Code language="jsx">{usageCode}</Code>
        </Box>
      </ModalBody>
      <ModalFooter>
        {svgContent ? (
          <Button variant="tertiary" className="mr-2">
            <Link
              className="hover:no-underline"
              download={`${iconMetadata.fullName}.svg`}
              href={createDownloadHref(svgContent)}
            >
              Download SVG
            </Link>
          </Button>
        ) : null}
        <Button onClick={copyCode}>Copy Code</Button>
      </ModalFooter>
    </Modal>
  );
};

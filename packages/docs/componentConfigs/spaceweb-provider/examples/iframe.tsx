import { useState } from 'react';
import { createPortal } from 'react-dom';
import { Box } from 'spaceweb/box';
import SpacewebProvider from 'spaceweb/spacewebProvider';
import sprLight from '@sprinklr/spaceweb-themes/space/light';

const App = props => (
  <SpacewebProvider theme={sprLight} ownerDocument={props.ownerDocument}>
    <Box className="spr-support-success-text">This iframe is styled</Box>
  </SpacewebProvider>
);

const IFrame = () => {
  const [contentRef, setContentRef] = useState<HTMLIFrameElement | null>(null);
  const mountNode = contentRef?.contentWindow?.document?.body;

  return (
    <iframe title="frame" frameBorder="1" ref={setContentRef}>
      {mountNode && createPortal(<App ownerDocument={contentRef?.contentDocument} />, mountNode)}
    </iframe>
  );
};

export default IFrame;

import { useCallback } from 'react';
import * as React from 'react';
import { Button } from 'spaceweb/button';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'spaceweb/modal';
import { StatefulInput } from 'spaceweb/input';
import { StatefulSelect } from 'spaceweb/select';
import { FormControl } from 'spaceweb/form-control';
import { Grid, Col } from 'spaceweb/grid';
import { StatefulTabs, TabList, Tab, TabsPanel } from 'spaceweb/tabs';
import { Box } from 'spaceweb/box';
import { Typography } from 'spaceweb/typography';

export default (): React.ReactElement => {
  const [isOpen, setIsOpen] = React.useState(false);

  const onClose = useCallback(() => setIsOpen(false), [setIsOpen]);

  return (
    <>
      <Button onClick={(): void => setIsOpen(true)}>Open Large Modal</Button>
      <Modal onClose={onClose} isOpen={isOpen} size="lg">
        <ModalHeader>Create Post</ModalHeader>
        <ModalBody>
          <Grid className="h-full" cols={2}>
            <Col className="spr-ui-02 flex flex-col py-6">
              <Typography $as="div" className="mb-4 spr-support-success-text">
                Large Modal takes 90% of total height of the screen
              </Typography>
              <FormControl label="Select Account">
                <StatefulSelect id="account-id" options={[]} />
              </FormControl>
              <FormControl label="Name" caption="Enter the name of the user">
                <StatefulInput id="input-id" />
              </FormControl>
              <StatefulTabs defaultActiveTabId="0">
                <TabList className="spr-border-02 border-b-1 border-solid">
                  <Tab>All</Tab>
                  <Tab>Message</Tab>
                </TabList>
                <TabsPanel tabId="0">
                  <Box className="spr-ui-01 flex justify-center items-center h-16">Renders all the tasks</Box>
                </TabsPanel>
                <TabsPanel tabId="1">
                  <Box className="spr-ui-01 flex justify-center items-center h-16">Renders all the messages</Box>
                </TabsPanel>
              </StatefulTabs>
            </Col>
            <Col className="spr-ui-03 flex justify-center pt-6">
              <Box className="h-full w-2/3 flex justify-center items-center spr-ui-01">
                <Typography variant="h1">Preview</Typography>
              </Box>
            </Col>
          </Grid>
        </ModalBody>
        <ModalFooter>
          <Button className="mr-4" variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={onClose}>Okay</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

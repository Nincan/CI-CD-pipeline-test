import * as React from 'react';
import { List, ListItem } from 'spaceweb/list';
import { Box } from 'spaceweb/box';
import { useRef } from 'react';

const ITEMS = [...new Array(1500)].map((_, index) => <ListItem>item number: {index + 1}</ListItem>);

export default () => {
  const divRef = useRef(null);

  return (
    <Box ref={divRef} className="border border-solid spr-border-01 overflow-auto" style={{ height: '500px' }}>
      <List virtual scrollElement={divRef.current}>
        {ITEMS}
      </List>
    </Box>
  );
};

import { Box } from 'spaceweb/box';
import { Typography } from 'spaceweb/typography';
import { ButtonGroup } from 'spaceweb/button-group';
import { IconButton } from 'spaceweb/button';

import LikeIcon from 'spaceweb-icons/solid/Like';
import TrashIcon from 'spaceweb-icons/line/Trash';

const GroupHoverChatBubble = () => (
  <Box className="py-8 px-4 typography-h4 flex justify-center spr-ui-03 rounded-8">
    <Box className="group h-10 flex items-center relative spr-ui-01 rounded-16 rounded-bl-4 spr-border-01 border-1 border-solid px-4 py-2 cursor-pointer">
      <Typography variant="h6">Hover over me. Options will be visible.</Typography>
      <ButtonGroup
        className="absolute right-0 opacity-0 group-hover:opacity-100 right-0 transform translate-x-16"
        shape="default"
        size="sm"
      >
        <IconButton aria-label="Like Icon">
          <LikeIcon />
        </IconButton>
        <IconButton aria-label="Trash Icon">
          <TrashIcon />
        </IconButton>
      </ButtonGroup>
    </Box>
  </Box>
);

export default GroupHoverChatBubble;

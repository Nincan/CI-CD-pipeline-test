import { BaseButton } from 'spaceweb/base-button';
import { Typography } from 'spaceweb/typography';
import ChevronDown from 'spaceweb-icons/solid/ChevronDown';
import { Image } from 'spaceweb/image';
import { IconButton } from 'spaceweb/button';
import { Box } from 'spaceweb/box';
import { Grid, Col } from 'spaceweb/grid';

const ClickableArea = props => <BaseButton className="hover:spr-ui-02" {...props} />;

const PlayMedia = () => (
  <Grid cols={2} rows={1} className="rounded-4 h-40 w-3/4 spr-border-01 border border-solid spr-shadow-02">
    <Col colSpan={2}>
      <Box $as="section" className="flex flex-col h-full">
        <ClickableArea
          $as="a"
          href="https://www.youtube.com/watch?v=2f1Ny74_ou0"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Listen to Master of puppets by Metallica"
        >
          <Box className="flex flex-col spr-text-01 py-4">
            <Typography variant="h4" className="px-8 py-1">
              Master of Puppets
            </Typography>
            <Typography variant="l1" className="px-8 py-1">
              Metallica
            </Typography>
          </Box>
        </ClickableArea>
        <Box className="px-6 py-2 flex items-center h-full">
          <IconButton size="xs" aria-label="Previous Icon Button">
            <ChevronDown className="transform rotate-90" />
          </IconButton>
          <IconButton
            size="xl"
            $as="a"
            href="https://www.youtube.com/watch?v=2f1Ny74_ou0"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Play Icon Button"
          >
            <ChevronDown className="transform -rotate-90" />
          </IconButton>
          <IconButton size="xs" aria-label="Next Icon Button">
            <ChevronDown className="transform -rotate-90" />
          </IconButton>
        </Box>
      </Box>
    </Col>
    <Col>
      <BaseButton
        $as="a"
        href="https://en.wikipedia.org/wiki/Master_of_Puppets"
        className="h-full"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Read about the album Master of Puppets by Metallica on Wikipedia"
      >
        <Image
          className="h-full w-full"
          src="https://i.ytimg.com/vi/QAOBbPnI5-g/maxresdefault.jpg"
          alt="Metallica Album"
          overrides={{ Root: { props: { className: 'h-full' } } }}
        />
      </BaseButton>
    </Col>
  </Grid>
);

export default PlayMedia;

import { Box } from 'spaceweb/box';
import { Image } from 'spaceweb/image';
import { Typography } from 'spaceweb/typography';

const ResponsiveCard = () => (
  <Box className="py-8 px-8 typography-h4 flex justify-center spr-ui-03 rounded-8">
    <Box className="flex flex-col md:flex-row w-full rounded-16 spr-ui-01 overflow-hidden">
      <Image
        className="h-48 w-full md:w-56"
        alt="Customer Story"
        src="https://images.ctfassets.net/ukazlt65o6hl/7wugyqxDLRV6tIc3kstO1Z/1ddc964832e55312ee6a03c6a7c448ef/census.jpg?w=1280&h=852&q=50&fm=webp"
      />
      <Box className="px-6 pt-6 pb-4 flex flex-1 flex-col items-start justify-start text-left">
        <Typography variant="h3" className="spr-text-04">
          Customer story: P&G
        </Typography>
        <Typography variant="bs1" className="spr-text-01 mt-5">
          P&G needed a unified platform capable of capturing relevant customer data across modern channels at scale —
          and translating data into brand-building action. So they partnered with Sprinklr.
        </Typography>
      </Box>
    </Box>
  </Box>
);

export default ResponsiveCard;

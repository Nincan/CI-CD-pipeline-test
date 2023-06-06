import { BaseButton } from 'spaceweb/base-button';
import { Image } from 'spaceweb/image';
import { Typography } from 'spaceweb/typography';

const ClickableMediaCard = () => (
  <BaseButton
    className="border-t border-r border-b border-l spr-border-01 border-solid flex flex-col"
    onClick={() => alert('I am a doggo')}
  >
    <Image
      src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/01/12201051/cute-puppy-body-image.jpg"
      alt="doggo"
      height={100}
      width={100}
    />
    <Typography variant="bs2">Click this card</Typography>
  </BaseButton>
);

export default ClickableMediaCard;

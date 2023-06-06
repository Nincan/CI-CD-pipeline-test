import { BaseButton } from 'spaceweb/base-button';
import { Image } from 'spaceweb/image';

const AnchorBaseButton = () => (
  <BaseButton
    $as="a"
    target="_blank"
    rel="noopener noreferrer"
    href="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/01/12201051/cute-puppy-body-image.jpg"
    aria-label="Navigate to cute doggo picture"
  >
    <Image
      alt="doggo"
      src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/01/12201051/cute-puppy-body-image.jpg"
      height={100}
      width={150}
    />
  </BaseButton>
);

export default AnchorBaseButton;

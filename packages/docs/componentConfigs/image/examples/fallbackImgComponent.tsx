import { ReactElement } from 'react';
import { Image, ImageProps } from 'spaceweb/image';

const FallbackImgComponent = (props: ImageProps): ReactElement => {
  const FallbackImage = () => <img src="https://placehold.it/200x200" alt="HTML img as fallback" />;
  const overrides = {
    FallbackImg: {
      component: FallbackImage,
    },
  };
  const onError = () => console.log('Hello from Spaceweb !!!');

  return <Image {...props} overrides={overrides} onError={onError} />;
};

export default FallbackImgComponent;

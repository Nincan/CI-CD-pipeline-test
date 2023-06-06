import { ReactElement } from 'react';
import { Image, ImageProps } from 'spaceweb/image';

const DefautlFallback = (props: ImageProps): ReactElement => (
  <Image alt="Fallback Image" src="unknown_image" width={200} height={200} />
);

export default DefautlFallback;

import { ReactElement } from 'react';
import { Image, ImageProps } from 'spaceweb/image';

import { ObjectFitProperty } from '../../types';

const ImageFits = (props: ImageProps): ReactElement => (
  <>
    {['contain', 'fill'].map(fit => (
      <>
        <span>{fit}</span>
        <Image
          {...props}
          width={400}
          height={200}
          overrides={{
            Image: {
              style: {
                objectFit: fit as ObjectFitProperty,
              },
            },
          }}
          disabled
        />
      </>
    ))}
  </>
);

export default ImageFits;

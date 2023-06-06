import { ReactElement } from 'react';
import { Image, ImageProps } from 'spaceweb/image';

const CustomFallbackProps = (props: ImageProps): ReactElement => {
  const overrides = {
    FallbackImg: {
      props: {
        height: 300,
        width: 300,
        overrides: {
          Root: {
            props: {
              className: 'border-1 border-solid rounded-12 border-transparent',
            },
          },
          Svg: {
            props: {
              size: 80,
            },
          },
        },
      },
    },
  };

  return <Image alt="Fallback Image" src="unknown_image" width={200} height={200} overrides={overrides} />;
};

export default CustomFallbackProps;

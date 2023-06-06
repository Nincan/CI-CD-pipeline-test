import { Image } from 'spaceweb/image';

const ImageFits = props => (
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
                objectFit: fit,
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

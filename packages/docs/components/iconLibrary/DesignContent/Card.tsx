import { memo, ReactElement, PropsWithChildren } from 'react';
import { Card as BaseCard, StyledBody, StyledThumbnail } from 'baseui/card';

type Props = {
  thumbnailPosition?: 'left' | 'right' | 'top' | 'bottom';
  thumbnailSrc?: string;
  title: string;
};

export const Card = memo(
  ({ children, thumbnailPosition, thumbnailSrc, title }: PropsWithChildren<Props>): ReactElement => (
    <BaseCard
      overrides={{
        Root: { style: { border: 'none', marginBottom: '50px', backgroundColor: 'transperent' } },
        Contents: { style: { marginTop: 0, marginBottom: 0, marginLeft: 0, marginRight: 0 } },
        Body: { style: { overflow: 'auto', marginBottom: 0 } },
        Title: {
          style: {
            ...(thumbnailSrc &&
              (thumbnailPosition === 'left' || thumbnailPosition === 'right') && { marginLeft: '156px' }),
            fontSize: '20px',
          },
        },
      }}
      title={title}
    >
      {thumbnailSrc && (thumbnailPosition === 'left' || thumbnailPosition === 'right') && (
        <StyledThumbnail
          src={thumbnailSrc}
          style={{
            float: thumbnailPosition,
            border: 'none',
            ...((thumbnailPosition === 'left' || thumbnailPosition === 'right') && { height: '96px', width: '96px' }),
            ...(thumbnailPosition === 'right' && { marginLeft: '60px', marginRight: 0 }),
            ...(thumbnailPosition === 'left' && { marginRight: '60px', marginLeft: 0 }),
          }}
        />
      )}
      <StyledBody style={{ marginBottom: 0 }}>{children}</StyledBody>
      {thumbnailSrc && (thumbnailPosition === 'top' || thumbnailPosition === 'bottom') && (
        <StyledThumbnail
          src={thumbnailSrc}
          style={{
            float: 'none',
            border: 'none',
            marginLeft: 0,
            marginRight: 0,
            marginTop: '12px',
            width: '100%',
            objectFit: 'none',
          }}
        />
      )}
    </BaseCard>
  )
);

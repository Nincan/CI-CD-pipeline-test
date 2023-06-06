import * as React from 'react';
import IconButton, { IconButtonProps } from '../button/IconButton';
import Close from '../icon/components/close';
import { SharedProps } from '../select/types';
import { StyleObject } from '../types';
import { useLocale } from '../locale';

const ClearIconButton = ({
  size,
  $size,
  $isOpen,
  ...props
}: IconButtonProps & Pick<SharedProps, '$size' | '$isOpen'>): React.ReactElement => {
  const locale = useLocale();
  return (
    <IconButton
      aria-label={locale.input.clearAriaLabel}
      {...props}
      overrides={{
        BaseButton: {
          style: [
            'h-5 w-5 spr-text-02 hover:spr-text-01 focus:spr-text-01 hover:spr-ui-03 focus:spr-ui-03 bg-transparent',
            ({ px2rem }): StyleObject => ({ minWidth: px2rem(20) }),
          ],
          props: { type: 'button' },
        },
      }}
    >
      <Close size={8} />
    </IconButton>
  );
};

export default ClearIconButton;

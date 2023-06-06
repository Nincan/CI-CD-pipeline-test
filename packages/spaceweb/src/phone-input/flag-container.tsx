import { forwardRef } from 'react';
import { Button as DefaultButton } from '../button';
import { getFlagContainerStyles } from './styled-components';
import { useOverrides } from '../overrides';
import { useLocale } from '../locale';
import { iso2FlagEmoji } from './utils';
import { add$props } from '../helpers';
import { FlagContainerProps } from './types';

const FlagContainer = forwardRef<HTMLButtonElement, FlagContainerProps>((props, ref) => {
  const {
    size: inputSize,
    value: { country },
    overrides,
    ...rest
  } = props;
  const { id: iso } = country;
  const locale = useLocale();
  const sharedProps = add$props({ iso, inputSize });

  const [Button, buttonProps] = useOverrides(overrides?.FlagContainer, DefaultButton);

  return (
    <Button
      aria-label={locale.phoneInput.flagContainerAriaLabel}
      variant="minimal"
      size="xxxs"
      type="button"
      className={[getFlagContainerStyles]}
      data-iso={iso}
      ref={ref}
      {...sharedProps}
      {...buttonProps}
      {...rest}
    >
      {iso2FlagEmoji(iso)}
    </Button>
  );
});

export default FlagContainer;

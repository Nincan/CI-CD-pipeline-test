import { forwardRef, useMemo, Children } from 'react';
import _pick from 'lodash/pick';
import { add$props } from '../helpers';

import { ButtonGroupProps } from './types';
import { useOverrides } from '../overrides';
import { StyledRoot, renderButtonGroupChild } from './styled-components';
import useCombinedRefs from '../hooks/useCombinedRef';
import { useTabsKeyboardNavigation } from '../hooks/useTabsKeyboardNavigation';
import { useStyle } from '../style';
import { getDefaultSize } from '../helpers/themeHelpers';

const ButtonGroup = forwardRef<HTMLElement, ButtonGroupProps>(
  ({ className, style, activateOnFocus, overrides = {}, role, ...props }, ref) => {
    const { parentElementRef, onKeyDown } = useTabsKeyboardNavigation({ activateOnFocus });
    const combinedRef = useCombinedRefs(ref, parentElementRef);
    const { theme } = useStyle();
    const [Root, rootProps] = useOverrides(overrides.Root, StyledRoot);
    const renderChild = useMemo(() => renderButtonGroupChild.bind(null, { ...props, onKeyDown }), [props, onKeyDown]);

    const sharedProps = add$props({
      ..._pick(props, ['intent', 'variant', 'shape', 'mode']),
      size: props.size ?? getDefaultSize(theme),
    });

    return (
      <Root
        data-spaceweb="button-group"
        aria-multiselectable={props.mode === 'checkbox'}
        className={className}
        style={style}
        ref={combinedRef}
        role={role}
        {...sharedProps}
        {...rootProps}
      >
        {Children.map(props.children, renderChild)}
      </Root>
    );
  }
);
ButtonGroup.defaultProps = {
  mode: 'radio',
};
ButtonGroup.displayName = 'ButtonGroup';
export default ButtonGroup;

import { forwardRef, useState, useCallback } from 'react';
import { StatefulButtonGroupProps } from './types';
import ButtonGroup from './ButtonGroup';

const StatefulButtonGroup = forwardRef<HTMLElement, StatefulButtonGroupProps>((props, ref) => {
  const { initialState, ...restProps } = props;
  const [selected = [], setSelected] = useState(initialState);

  const onClick = useCallback(
    (event, index) => {
      switch (props.mode) {
        case 'checkbox':
          if (selected.includes(index)) {
            setSelected(selected.filter(selectedIndex => selectedIndex !== index));
          } else {
            setSelected(selected.concat(index));
          }
          break;
        case 'radio':
          if (selected.length === 0 || !selected.includes(index)) {
            setSelected([index]);
          } else {
            setSelected([]);
          }
          break;
        default:
      }
      if (props.onClick) {
        props.onClick(event, index);
      }
    },
    [props.mode, props.onClick, selected]
  );

  return <ButtonGroup {...restProps} selected={selected} onClick={onClick} ref={ref} />;
});

StatefulButtonGroup.defaultProps = {
  initialState: [],
  mode: 'radio',
};

StatefulButtonGroup.displayName = 'StatefulButtonGroup';

export default StatefulButtonGroup;

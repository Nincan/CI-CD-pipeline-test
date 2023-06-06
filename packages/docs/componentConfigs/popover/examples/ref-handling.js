/* eslint-disable react/no-unescaped-entities */
import { forwardRef } from 'react';
import useStyle from 'spaceweb/style/useStyle';
import { StatefulCheckbox } from 'spaceweb/checkbox';
import { StatefulPopover } from 'spaceweb/popover';
import { Typography } from 'spaceweb/typography';

const CheckboxWithRef = forwardRef((props, ref) => {
  const { children, ...restProps } = props;
  return (
    <StatefulCheckbox
      overrides={{
        Root: {
          props: { ref, ...restProps },
        },
      }}
    >
      {children}
    </StatefulCheckbox>
  );
});

export default () => {
  const { css } = useStyle();
  return (
    <div className={css('py-10')}>
      <StatefulPopover
        placement="bottomLeft"
        triggerType="hover"
        content={
          <Typography variant="l3" className="p-4">
            This is a popover example
          </Typography>
        }
        accessibilityType="tooltip"
      >
        <CheckboxWithRef>
          Created a wrapper component that renders Checkbox and passes popover's anchor props to the Checkbox's Root
          element.
        </CheckboxWithRef>
      </StatefulPopover>
      <br />
      <StatefulPopover
        placement="bottomLeft"
        triggerType="hover"
        content={
          <Typography variant="l3" className="p-4">
            This is a popover example
          </Typography>
        }
        accessibilityType="tooltip"
      >
        <span>
          <StatefulCheckbox>Wrapped checkbox with props passed to the wrapper.</StatefulCheckbox>
        </span>
      </StatefulPopover>
    </div>
  );
};

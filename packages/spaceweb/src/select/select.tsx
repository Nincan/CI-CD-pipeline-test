import BaseSelect from './base-select';
import OverlaySelect from './overlaySelect';
import MobileSelect from './mobileSelect';
import { SelectProps } from './types';
import defaultProps from './default-props';
import { useContextualFormProps } from '../form-control/context';
import { useStyle } from '../style';
import { getDefaultSize } from '../helpers/themeHelpers';

const Select = (props: SelectProps & typeof defaultProps): React.ReactElement => {
  const adaptedProps = useContextualFormProps(props);
  const { theme } = useStyle();
  switch (adaptedProps.type) {
    case 'overlay':
      // @ts-ignore -- needs to be fixed
      return <OverlaySelect {...adaptedProps} size={adaptedProps.size || getDefaultSize(theme)} />;
    case 'mobile':
      // @ts-ignore -- needs to be fixed
      return <MobileSelect {...adaptedProps} size={adaptedProps.size || getDefaultSize(theme)} />;
    default:
      // @ts-ignore -- needs to be fixed
      return <BaseSelect {...adaptedProps} size={adaptedProps.size || getDefaultSize(theme)} />;
  }
};

Select.defaultProps = defaultProps;

export default Select;

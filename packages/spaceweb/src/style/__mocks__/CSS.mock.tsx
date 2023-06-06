/**
 * @author Ivan Torres
 */

import { ReactElement } from 'react';

import { Styles } from '../../types';
import useStyle from '../useStyle';

type Props = {
  styleTest: Styles | Styles[];
};

const StyledComponent = (props: Props): ReactElement => {
  const { styleTest } = props;
  const { css } = useStyle();

  return (
    <div data-testid="cssComponent" className={css(...(Array.isArray(styleTest) ? styleTest : [styleTest]))}>
      Hello World!
    </div>
  );
};

export default StyledComponent;

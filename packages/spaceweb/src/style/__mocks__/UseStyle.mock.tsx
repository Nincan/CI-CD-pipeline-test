/**
 * @author Ivan Torres
 */

import { ReactElement } from 'react';

import { StyleUtils } from '../../types';
import useStyle from '../useStyle';

type Props = {
  children: (styleUtils: StyleUtils) => ReactElement;
};

export default ({ children }: Props): ReactElement => children(useStyle());

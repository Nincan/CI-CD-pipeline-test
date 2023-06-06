/**
 * @author Ivan Torres
 */

import { ReactElement } from 'react';

import { StyleUtils } from '../types';
import useStyle from '../style/useStyle';

type Props = {
  children: (styleUtils: StyleUtils) => ReactElement;
};

const SpaceStyleConsumer = ({ children }: Props): ReactElement => children(useStyle());
export default SpaceStyleConsumer;

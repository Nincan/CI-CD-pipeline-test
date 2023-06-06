import { styled } from '../style';
import { StyleFn } from '../types';

const baseDimension: StyleFn = ({ px2rem }, props) => {
  const sizeInRem = px2rem(props.$size);
  return {
    height: sizeInRem,
    width: sizeInRem,
  };
};

export const StyledSvg = styled('svg', 'inline-block fill-current', baseDimension);

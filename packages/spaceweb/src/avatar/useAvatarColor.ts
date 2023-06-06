import { useMemo } from 'react';
import { AVATAR_GRADIENT_COLORS } from './constants';

const getLinearGradientColor = (index: number) => {
  const gradientColor = AVATAR_GRADIENT_COLORS[index];
  return `${`linear-gradient(137deg,${gradientColor[0]} 0%, ${gradientColor[1]} 96%`} )`;
};

const getRandomBgColor: () => string = () =>
  getLinearGradientColor(Math.floor(Math.random() * AVATAR_GRADIENT_COLORS.length));

//NOTE: Hash logic based on https://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
const getColorForName = name => {
  let hash = 0;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < name.length; i++) {
    const chr = name.charCodeAt(i);
    hash = (hash << 5) - hash + chr; // eslint-disable-line no-bitwise
    hash |= 0; // eslint-disable-line no-bitwise
  }
  return getLinearGradientColor(Math.abs(hash) % (AVATAR_GRADIENT_COLORS.length - 1));
};

export const useAvatarColor = (name: string): string =>
  useMemo(() => (name ? getColorForName(name) : getRandomBgColor()), [name]);

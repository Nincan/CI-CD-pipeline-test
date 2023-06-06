import * as React from 'react';
import { useContext } from 'react';
import { Direction } from '@sprinklr/spaceweb-themes/types';

const DirectionContext = React.createContext<Direction>('ltr');

export const useDirection = (): Direction => useContext(DirectionContext);
export default DirectionContext;

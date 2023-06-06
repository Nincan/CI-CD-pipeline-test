import { LayersContext } from 'baseui/layer';
import { ReactElement, ReactNode, useMemo } from 'react';

import { useDocument } from '../spacewebProvider/DocumentProvider';
import { LAYERS_DEFAULT_ZINDEX } from './constants';
import useLayersContextValue from './useLayersContextValue';

export type LayersManagerProps = {
  children: ReactNode;
  zIndex?: number;
  host?: HTMLElement | null;
};

LayersContext.displayName = 'BaseUILayerContext';

const LayersManager = ({
  children,
  zIndex: zIndexToOverride,
  host: hostToOverride,
}: LayersManagerProps): ReactElement | null => {
  const ctxValue = useLayersContextValue();
  const doc = useDocument();
  const defaultHostContainer = doc?.body;

  const value = useMemo(
    () => ({
      ...ctxValue,
      host: hostToOverride ?? ctxValue.host ?? defaultHostContainer,
      zIndex: zIndexToOverride ?? ctxValue.zIndex ?? LAYERS_DEFAULT_ZINDEX,
    }),
    [ctxValue, hostToOverride, zIndexToOverride, defaultHostContainer]
  );

  return <LayersContext.Provider value={value}>{children}</LayersContext.Provider>;
};

export default LayersManager;

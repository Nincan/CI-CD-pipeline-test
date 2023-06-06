import { useConvertOverrides } from '../helpers/baseui/useConvertOverrides';
import * as React from 'react';
import { ReactElement } from 'react';
import { BaseProvider } from 'baseui';

import { Theme } from 'baseui/theme';
import { Direction } from '@sprinklr/spaceweb-themes/types';
import { Override } from '../overrides';

// @ts-ignore
BaseProvider.displayName = 'BaseUIProvider';

// NOTE: Reason https://baseweb.design/components/layer/#layersmanager
const BaseProviderOverrides = {
  AppContainer: { props: { 'data-testid': 'spaceweb-app-container' }, style: { height: '100%' } },
  // Spaceweb has its own LayersContainer, no need to render Baseweb's container.
  LayersContainer: React.forwardRef((): null => null),
};

const CustomBaseProvider = (props: {
  theme: Theme & { direction: Direction };
  children: React.ReactElement;
  overrides?: { AppContainer?: Override<any>; LayersContainer?: Override<any> };
  zIndex?: number;
}): ReactElement => (
  <BaseProvider {...props} overrides={useConvertOverrides(BaseProviderOverrides, props.overrides, [props.overrides])} />
);

export default CustomBaseProvider;

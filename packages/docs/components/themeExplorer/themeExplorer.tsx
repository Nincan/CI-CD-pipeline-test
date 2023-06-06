import dynamic from 'next/dynamic';
import * as React from 'react';
import sprLight from '@sprinklr/spaceweb-themes/space/light';
import { useStyle } from 'spaceweb/style';

const DynamicReactJson = dynamic(import('react-json-view'), { ssr: false });

const ThemeTree = (): React.ReactElement => {
  const { css, px2rem } = useStyle();
  return (
    <div className={css({ fontSize: px2rem(16) })}>
      <DynamicReactJson
        enableClipboard={false}
        displayDataTypes={false}
        collapsed={1}
        theme="brewer"
        src={sprLight.theme}
      />
    </div>
  );
};

export default ThemeTree;

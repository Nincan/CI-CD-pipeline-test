import * as React from 'react';
import { Textarea } from 'spaceweb/textarea';

export default () => {
  const [value, setValue] = React.useState(
    'Try adding or removing some text to see the Textarea autosize...\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan fermentum diam at euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate eros porttitor libero gravida consequat non sit amet eros. Suspendisse imperdiet metus in ipsum tristique ullamcorper.'
  );

  return <Textarea value={value} onChange={e => setValue(e.currentTarget.value)} autoSize />;
};

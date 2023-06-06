import * as React from 'react';

import { H3, Paragraph, UnorderedList, ListItem, DocLink } from './markdown-elements';
import Code from './code';
import _isEmpty from 'lodash/isEmpty';

const Exports = props => {
  const { component, path, title, cheatsheet = true, defaultExportName } = props;
  const componentName = path.split('/')[1];

  const exportNames = Object.keys(component);
  const importPathName = _isEmpty(exportNames) ? defaultExportName || componentName : `{${exportNames[0]}}`;
  const code = `import ${importPathName} from '${path}'`;
  return (
    <React.Fragment>
      <H3>{title}</H3>
      <Paragraph>You can import this module like so:</Paragraph>
      <Code language="javascript">{code}</Code>
      {_isEmpty(exportNames) ? null : (
        <>
          <Paragraph>It exports the following components or utility functions:</Paragraph>
          <UnorderedList>
            {exportNames.map(name => (
              <ListItem key={name}>{name}</ListItem>
            ))}
          </UnorderedList>
        </>
      )}
    </React.Fragment>
  );
};

export default Exports;

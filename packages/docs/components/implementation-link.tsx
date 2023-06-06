import { Link } from 'spaceweb/link';
import { Paragraph } from './markdown-elements';

//const templateURL = 'https://github.com/yashatgit/spaceweb-internal/tree/main/packages/spaceweb/src/';
const templateURL =
  'https://prod-gitlab.sprinklr.com/sprinklr/frontend/spaceweb/-/tree/main/packages%2Fspaceweb%2Fsrc/';

const ImplementationLink = props => {
  const URL = `${templateURL}${props.componentPath}`;
  const hyperlink = (
    <Link href={URL} target="_blank" rel="noopener noreferrer">
      implementation of the component
    </Link>
  );
  return <Paragraph>You can check the {hyperlink} for more details.</Paragraph>;
};

export default ImplementationLink;

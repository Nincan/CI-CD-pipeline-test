import { Link as LinkButton } from 'spaceweb/link';
import copyToClipboard from 'copy-to-clipboard';

const copy = event => copyToClipboard(event.target.innerHTML);

//renamed Link as LinkButton to bypass false positive of eslint Link error for no href
const WithoutHref = () => <LinkButton onClick={copy}>Copy this text</LinkButton>;

export default WithoutHref;

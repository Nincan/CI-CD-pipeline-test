import Code from './code';

type PropsT = {
  src: string;
};

const JSONViewer = (props: PropsT) => <Code language="json">{JSON.stringify(props.src, null, 2)}</Code>;

export default JSONViewer;

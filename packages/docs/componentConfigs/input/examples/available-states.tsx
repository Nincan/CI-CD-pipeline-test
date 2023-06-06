import { Input } from 'spaceweb/input';
import useStyle from 'spaceweb/style/useStyle';

export default () => {
  const { css } = useStyle();
  const Row = ({ children }) => <div className={css({ width: '100%', display: 'flex' })}>{children}</div>;
  const Col = ({ children }) => <div className={css({ width: '50%', padding: '5px' })}>{children}</div>;
  return (
    <>
      <Row>
        <Col>Variant - default</Col>
        <Col>Variant - line</Col>
      </Row>
      <Row>
        <Col>
          <Input placeholder="simple" />
        </Col>
        <Col>
          <Input variant="line" placeholder="simple" />
        </Col>
      </Row>
      <Row>
        <Col>
          <Input value="sprinklr" />
        </Col>
        <Col>
          <Input variant="line" value="sprinklr" />
        </Col>
      </Row>
      <Row>
        <Col>
          <Input placeholder="Input in an error state" intent="error" />
        </Col>
        <Col>
          <Input variant="line" placeholder="Input in an error state" intent="error" />
        </Col>
      </Row>
      <Row>
        <Col>
          <Input placeholder="Disabled input" disabled />
        </Col>
        <Col>
          <Input variant="line" placeholder="Disabled input" disabled />
        </Col>
      </Row>
    </>
  );
};

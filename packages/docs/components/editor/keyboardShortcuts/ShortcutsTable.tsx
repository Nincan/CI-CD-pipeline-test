//hooks
import { useStyle } from '@sprinklr/spaceweb/style';

//components
import { Table } from 'baseui/table-semantic';
import { H3, InlineCode } from 'components/markdown-elements';

const ShortcutsTable = props => {
  const { title, config } = props;
  const { css } = useStyle();

  const data = Object.keys(config.props).map(prop => [
    <div
      key={prop}
      className={css({
        fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
        width: '300px',
      })}
    >
      {prop}
    </div>,
    <div
      key={prop}
      className={css({
        fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
      })}
    >
      <InlineCode>{config.props[prop]['windows']}</InlineCode>
    </div>,
    <div
      key={prop}
      className={css({
        fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
      })}
    >
      <InlineCode>{config.props[prop]['macOS']}</InlineCode>
    </div>,
  ]);

  return (
    <>
      {title ? <H3>{title}</H3> : null}
      <Table columns={['Command', 'Windows/Linux', 'macOS']} data={data} />
    </>
  );
};

export default ShortcutsTable;

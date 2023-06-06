import { useStyletron } from 'baseui';
import { Table } from 'baseui/table-semantic';
import { StatefulPopover } from 'spaceweb/popover';
import { H3 } from './markdown-elements';
import { convert } from './yard/type-definition';
import { SpacePropsTypes } from '../componentConfigs/common';

const getCorrectType = ({ type, options }) => {
  if (type === SpacePropsTypes.FixedString) return options.map(e => `'${e}'`).join('| ');
  return type;
};

const getDefaultValue = propConfig => {
  const { defaultValue, value, type } = propConfig;
  if (type === SpacePropsTypes.Function) {
    return undefined;
  }
  if (typeof defaultValue === 'boolean' || typeof value === 'boolean') {
    return (defaultValue ?? value).toString();
  }
  if ('defaultValue' in propConfig) {
    return defaultValue;
  }
};

const ApiTable = props => {
  const { title, config, types } = props;
  const [css, theme] = useStyletron();
  const flowTypes = {};

  try {
    types.component.value.members.forEach(member => {
      flowTypes[member.key.name] = convert(member, true);
    });
    // eslint-disable-next-line no-empty
  } catch (e) {}
  const data = Object.keys(config.props)
    .sort()
    .map(prop => [
      <div
        key={prop}
        className={css({
          fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
          whiteSpace: 'nowrap',
        })}
      >
        {prop}
      </div>,
      flowTypes[prop] ? (
        <StatefulPopover
          key={prop}
          accessibilityType="tooltip"
          triggerType="hover"
          onMouseEnterDelay={500}
          placement="topLeft"
          content={
            <div
              className={css({
                backgroundColor: theme.colors.backgroundSecondary,
                maxHeight: '300px',
                maxWidth: '400px',
                overflow: 'auto',
                paddingTop: theme.sizing.scale100,
                paddingRight: theme.sizing.scale200,
                paddingBottom: theme.sizing.scale100,
                paddingLeft: theme.sizing.scale200,
                whiteSpace: 'pre',
                fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
                fontSize: theme.sizing.scale500,
              })}
            >
              {flowTypes[prop]}
            </div>
          }
        >
          <div
            key={prop}
            className={css({
              fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
              whiteSpace: 'nowrap',
              textDecoration: 'underline',
            })}
          >
            {getCorrectType(config.props[prop])}
          </div>
        </StatefulPopover>
      ) : (
        <div
          key={prop}
          className={css({
            fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
          })}
        >
          {getCorrectType(config.props[prop])}
        </div>
      ),
      getDefaultValue(config.props[prop]),
      config.props[prop].description,
    ]);
  return (
    <>
      {title ? <H3>{title}</H3> : null}
      <Table columns={['Name', 'Type', 'Default', 'Description']} data={data} />
    </>
  );
};

export default ApiTable;

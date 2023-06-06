import * as React from 'react';
import { Block } from 'baseui/block';
import { Radio, RadioGroup } from 'spaceweb/radio';
import { DocLink } from './markdown-elements';
import { useThemeContext } from './themeProperties';

const isStyledExport = exportName => exportName.startsWith('Styled');
const getOverrideName = exportName => exportName.replace('Styled', '');
const getOverrides = (component, blacklisted, whitelisted) => {
  if (whitelisted) return whitelisted.sort();
  return component
    ? Object.keys(component)
        .filter(isStyledExport)
        .map(getOverrideName)
        .filter(key => !blacklisted.includes(key))
        .sort()
    : [];
};

class Overrides extends React.Component<any, any> {
  static defaultProps = { blacklisted: [] };
  constructor(props) {
    super(props);
    this.state = {
      // select the first export by default
      highlighted: getOverrides(props.component, props.blacklisted, props.whitelisted)[0],
    };
  }
  render() {
    const { component, renderExample, name } = this.props;
    const overrides = getOverrides(component, this.props.blacklisted, this.props.whitelisted);
    const { isDarkMode } = useThemeContext();

    return (
      <React.Fragment>
        <Block as="p" font="font300">
          Additionally, you can <DocLink href="/guides/theming">fully customize</DocLink> any part of the{' '}
          <strong>{name}</strong> through the <strong>overrides</strong> prop. The {name} consists of multiple
          subcomponents that are listed bellow and you can override each one of them. To help you identify the names of
          these subcomponents, <strong>you can highlight them through this selector:</strong>
        </Block>
        <RadioGroup
          name="highlight an override"
          value={this.state.highlighted}
          onChange={e => {
            this.setState({ highlighted: e.target.value });
          }}
        >
          {overrides.map(override => (
            <Radio key={override} value={override}>
              {override}
            </Radio>
          ))}
        </RadioGroup>
        <Block marginTop="scale900">
          {renderExample({
            overrides: {
              [this.state.highlighted]: {
                style: ({ $theme }) =>
                  isDarkMode
                    ? {
                        outline: `2px solid ${$theme.colors.warning600}`,
                        backgroundColor: $theme.colors.warning600,
                      }
                    : {
                        outline: `2px solid ${$theme.colors.warning200}`,
                        backgroundColor: $theme.colors.warning200,
                      },
              },
            },
          })}
        </Block>
        <Block as="p" font="font300" marginTop="scale900">
          <b>Note:</b> You should always use longhand CSS properties. Mixing shorthands and longhands will lead into{' '}
          <DocLink href="https://www.styletron.org/concepts/#shorthand-and-longhand-properties">
            strange behaviors
          </DocLink>
          !
        </Block>
      </React.Fragment>
    );
  }
}

export default Overrides;

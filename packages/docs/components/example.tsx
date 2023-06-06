import * as React from 'react';
import { ReactElement, PropsWithChildren } from 'react';
import { Button } from 'spaceweb/button';
import { ButtonGroup } from 'spaceweb/button-group';
import { Card as DefaultCard, CardProps } from 'baseui/card';
import { Block } from 'baseui/block';

import SpaceConsumer from 'spaceweb/spaceConsumer';
import Code from './code';
import CodeIcon from 'spaceweb-icons/line/Code';
import { H3 } from './markdown-elements';
import { Language } from 'prism-react-renderer';
import { Override, getOverrides } from 'spaceweb/overrides';

const Source = ({ children, language }: PropsWithChildren<{ language: Language }>): ReactElement | null => {
  if (!children || typeof children !== 'string') return null;
  return <Code language={language}>{children}</Code>;
};

const StyledCodeIcon = function () {
  return <CodeIcon size={14} />;
};

type PropsT = {
  additionalPackages: Record<string, string>;
  path: string; // required to fetch the uncompiled source code
  title?: string;
  overrides?: { Card: Override<{ Card: CardProps }> };
};

type StateT = {
  sourceSelected: number;
  source: string;
  sourceTs: string;
};

class Example extends React.Component<PropsT, StateT> {
  static defaultProps = { additionalPackages: {}, title: null };

  state = {
    sourceSelected: -1,
    source: '',
    sourceTs: '',
  };

  async componentDidMount() {
    const codeTs = await import(
      /* webpackMode: "eager" */ `!!raw-loader!componentConfigs/${this.props.path.replace('.js', '.tsx')}`
    );
    const codeJs = await import(/* webpackMode: "eager" */ `!!raw-loader!componentConfigs/${this.props.path}`);
    this.setState({
      sourceTs: codeTs.default,
      source: codeJs.default,
    });
  }

  render() {
    const [Card, cardProps] = getOverrides(this.props.overrides?.Card, DefaultCard);

    return (
      <SpaceConsumer>
        {({ theme }) => (
          <Card
            overrides={{
              Root: {
                style: {
                  marginTop: '50px',
                  borderTopWidth: 0,
                  borderRightWidth: 0,
                  borderBottomWidth: 0,
                  borderLeftWidth: 0,
                  backgroundColor: theme.spr.ui01,
                },
              },
              Contents: {
                style: {
                  marginLeft: 0,
                  marginRight: 0,
                  marginTop: 0,
                  marginBottom: 0,
                },
              },
            }}
            {...cardProps}
          >
            {this.props.title && <H3>{this.props.title}</H3>}
            {this.props.children}

            <Block paddingTop="scale400">
              <ButtonGroup
                selected={this.state.sourceSelected}
                mode="radio"
                variant="secondary"
                onClick={(event, index) => {
                  if (this.state.sourceSelected !== index) {
                    this.setState({ sourceSelected: index });
                  } else {
                    this.setState({ sourceSelected: -1 });
                  }
                }}
              >
                <Button startEnhancer={<StyledCodeIcon />}>JS</Button>
                <Button startEnhancer={<StyledCodeIcon />}>TS</Button>
              </ButtonGroup>
            </Block>

            {this.state.sourceSelected > -1 && (
              <Block overflow="scrollX">
                {this.state.sourceSelected === 0 && <Source language="jsx">{this.state.source}</Source>}
                {this.state.sourceSelected === 1 && <Source language="tsx">{this.state.sourceTs}</Source>}
              </Block>
            )}
          </Card>
        )}
      </SpaceConsumer>
    );
  }
}

export default Example;

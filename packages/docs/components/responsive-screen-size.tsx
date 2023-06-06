import { ReactElement, PropsWithChildren, useState, useEffect } from 'react';
import { IconTextButton } from 'spaceweb/button';
import { ButtonGroup } from 'spaceweb/button-group';
import { Box } from 'spaceweb/box';
import { useStyle } from 'spaceweb/style';
import { H3 } from './markdown-elements';

import { FaMobileAlt, FaTabletAlt, FaLaptop, FaTv } from 'react-icons/fa';
import { MdDevices } from 'react-icons/md';
import SpacewebProvider from 'spaceweb/spacewebProvider';
import Code from './code';
import { Language } from 'prism-react-renderer';

import { IconProps } from 'spaceweb/icon';
import { ThemeModule } from '@sprinklr/spaceweb-themes/types';

type ResponsiveScreenSizeProps = {
  path: string;
  title?: string;
};

type ScreensConfig = { sm: string; md: string; lg: string; xl: string };

type ScreenSize = 'sm' | 'md' | 'lg' | 'xl' | 'all';

type SourceProps = {
  children: string;
  language: Language;
};

const screensConfig: ScreensConfig[] = [
  { sm: '99999px', md: '0px', lg: '99999px', xl: '99999px' },
  { sm: '0px', md: '99999px', lg: '99999px', xl: '99999px' },
  { sm: '99999px', md: '0px', lg: '99999px', xl: '99999px' },
  { sm: '99999px', md: '99999px', lg: '0px', xl: '99999px' },
  { sm: '99999px', md: '99999px', lg: '99999px', xl: '0px' },
];

const Source = ({ children, language }: SourceProps): ReactElement | null => {
  if (!children || typeof children !== 'string') return null;
  return <Code language={language}>{children}</Code>;
};

const StyledIcon = (screenSize: ScreenSize, iconSize: string): (() => ReactElement) => {
  switch (screenSize) {
    case 'sm':
      return () => <FaMobileAlt size={iconSize} />;
    case 'md':
      return () => <FaTabletAlt size={iconSize} />;
    case 'lg':
      return () => <FaLaptop size={iconSize} />;
    case 'xl':
      return () => <FaTv size={iconSize} />;
    case 'all':
      return () => <MdDevices size={iconSize} />;
  }
};

const StyledMediaQueryButton = (screenSize: ScreenSize, iconSize: string): ReactElement => (
  <IconTextButton
    icon={StyledIcon(screenSize, iconSize)}
    overrides={{
      BaseButton: {
        style: {
          display: 'block',
        },
      },
      StartEnhancer: {
        style: {
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: '0',
          height: '2.5rem',
        },
      },
    }}
    bordered
  >
    {screenSize}
  </IconTextButton>
);

const ResponsiveScreenSize = (props: PropsWithChildren<ResponsiveScreenSizeProps>): ReactElement => {
  const { title, path, children } = props;
  const { classes, theme } = useStyle() as ThemeModule;
  const defaultTheme = { classes: classes, theme: { ...theme, screens: screensConfig[0] } };
  const [source, setSource] = useState('');
  const [selected, setSelected] = useState(0);

  const customTheme: ThemeModule = {
    classes: defaultTheme.classes,
    theme: {
      ...defaultTheme.theme,
      screens: screensConfig[selected],
    },
  };

  useEffect(() => {
    (async () => {
      const codeJs = await import(/* webpackMode: "eager" */ `!!raw-loader!componentConfigs/${path}`);
      setSource(codeJs.default);
    })();
  }, []);

  return (
    <Box>
      {title && <H3>{title}</H3>}
      <Box className="flex justify-center">
        <ButtonGroup selected={selected} mode="radio" variant="minimal" onClick={(event, index) => setSelected(index)}>
          {StyledMediaQueryButton('all', '1.8rem')}
          {StyledMediaQueryButton('sm', '1.2rem')}
          {StyledMediaQueryButton('md', '1.4rem')}
          {StyledMediaQueryButton('lg', '2rem')}
          {StyledMediaQueryButton('xl', '2rem')}
        </ButtonGroup>
      </Box>
      <Source language="jsx">{source}</Source>
      <Box className="flex justify-center">
        <SpacewebProvider theme={customTheme}>{children}</SpacewebProvider>
      </Box>
    </Box>
  );
};

export default ResponsiveScreenSize;

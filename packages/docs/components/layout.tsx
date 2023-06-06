import { useState, Children } from 'react';
import { MDXProvider } from '@mdx-js/tag';
// @ts-ignore
import { ThemeConsumer } from 'baseui';
import { Block } from 'baseui/block';
import { IconTextButton } from 'spaceweb/button';
import { Box } from 'spaceweb/box';

import TableOfContents from './table-of-contents';
import MarkdownElements from './markdown-elements';
import Sidebar from './sidebar';
import HeaderNavigation from './header-navigation';
import PencilIcon from 'spaceweb-icons/line/Edit';
import Routes from './sidebar/config';
import { useThemeContext } from './themeProperties';
//import ComponentSizes from '../component-sizes.json';
import { styled } from 'spaceweb/style';

const StyledPencilIcon = () => <PencilIcon size={14} />;

const GITLAB_URL = 'https://prod-gitlab.sprinklr.com/sprinklr/frontend/spaceweb/edit/main/packages/docs/pages';

function findByPath(o, path) {
  if (!path) return undefined;
  if (o.path === path) {
    return o;
  }
  let result, p;
  //eslint-disable-next-line no-restricted-syntax
  for (p in o) {
    if (o[p] && typeof o[p] === 'object') {
      result = findByPath(o[p], path);
      if (result) {
        return result;
      }
    }
  }
  return result;
}

type Props = {
  path?: string;
  toggleTheme: () => void;
  toggleThemeMode: () => void;
  toggleDirection: () => void;
  hideSideNavigation?: boolean;
  maxContentWidth?: string;
};

const TOCWrapper = styled('div', 'hidden ', ({ theme }) => ({
  [`@media screen and (min-width: ${theme.screens.lg})`]: {
    display: 'block',
    maxWidth: '16em',
  },
}));

const SidebarWrapper = styled(
  'nav',
  'pt-8 ml-10 mr-10 flex-auto',
  ({ theme, px2rem }, { $isOpen, $hideSideNavigation }) => ({
    display: $isOpen ? 'block' : 'none',
    [`@media screen and (min-width: ${theme.screens.lg})`]: {
      display: $hideSideNavigation ? 'none' : 'block',
      maxWidth: px2rem(256),
    },
  })
);

const ContentWrapper = styled(
  'main',
  'relative box-border pl-10 pr-10 w-full',
  ({ theme, px2rem }, { $isSidebarOpen, $maxWidth }) => ({
    display: $isSidebarOpen ? 'none' : 'block',
    maxWidth: $maxWidth || px2rem(640),
    marginBottom: '100px',
    [`@media screen and (min-width: ${theme.screens.lg})`]: {
      display: 'block',
    },
    [`@media screen and (min-width: ${theme.screens.md})`]: {
      maxWidth: $maxWidth || theme.maxWidth.screenMd,
    },
  })
);

const Layout = props => {
  const { direction } = useThemeContext();
  const [sidebarOpen, setSidebarOpen] = useState<Boolean>(false);
  const { children } = props;
  let path = props.path || '';

  path = path.split('?')[0];
  path = path.split('#')[0];

  if (path && path.endsWith('/')) {
    path = path.slice(0, -1);
  }

  const route = findByPath(Routes, path);
  let isGitHubEditDisabled;
  let githubUrl;
  if (!path || !route) {
    isGitHubEditDisabled = true;
  } else {
    isGitHubEditDisabled = route.isGitHubEditDisabled;
    githubUrl = `${GITLAB_URL}${path}.mdx`;
  }

  return (
    <ThemeConsumer>
      {theme => (
        <>
          <HeaderNavigation toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
          <Box className="spr-ui-01 spr-text-01 mt-2 flex pt-3 justify-center">
            <SidebarWrapper $isOpen={sidebarOpen} $hideSideNavigation={!!props.hideSideNavigation}>
              <Sidebar path={path} closeSidebar={() => setSidebarOpen(false)} />
            </SidebarWrapper>
            <ContentWrapper
              id="docSearch-content"
              role="main"
              $isSidebarOpen={sidebarOpen}
              $maxWidth={props.maxContentWidth}
            >
              {isGitHubEditDisabled ? null : (
                <Block
                  display={['none', 'block']}
                  position="absolute"
                  top="-10px"
                  overrides={{
                    Block: {
                      style: {
                        [direction === 'rtl' ? 'left' : 'right']: 0,
                        [direction === 'rtl' ? 'right' : 'left']: 'auto',
                      },
                    },
                  }}
                >
                  <IconTextButton
                    icon={StyledPencilIcon}
                    $as="a"
                    variant="bulk"
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Edit this page
                  </IconTextButton>
                </Block>
              )}
              {/* {componentSizeKb ? (
                <Block font="font100">Component size, gzipped: {componentSizeKb}kb</Block>
              ) : null} */}
              <MDXProvider components={MarkdownElements}>{children}</MDXProvider>
            </ContentWrapper>
            <TOCWrapper>
              <TableOfContents content={Children.toArray(children)} />
            </TOCWrapper>
          </Box>
        </>
      )}
    </ThemeConsumer>
  );
};

export default Layout;

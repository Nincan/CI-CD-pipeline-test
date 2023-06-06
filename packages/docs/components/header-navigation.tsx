import { Block } from 'baseui/block';
import { ALIGN, HeaderNavigation, StyledNavigationList as NavigationList } from 'baseui/header-navigation';
import Menu from 'baseui/icon/menu';
import Link from 'next/link';
import { styled } from 'spaceweb/style';

import { StatefulTooltip } from 'spaceweb/tooltip';
import { version } from 'spaceweb/package.json';
import useStyle from 'spaceweb/style/useStyle';
import { Link as SpacewebLink } from 'spaceweb/link';

import Bulb from 'spaceweb-icons/solid/Bulb';
import AlignLeftIcon from 'spaceweb-icons/line/TextAlignLeft';
import AlignRightIcon from 'spaceweb-icons/line/TextAlignRight';
import SprinklrClrIcon from '@sprinklr/spaceweb-icons/brand/SprinklrClr';

import { useThemeContext, DocsThemeContextShape } from './themeProperties';
import GithubLogo from './icons/github-logo';
import Search from './search';
import { Typography } from 'spaceweb/typography';

const Hamburger = styled('div', 'block h-8 ml4 cursor-pointer lg:hidden select-none');

const LogoSegment = styled('div', () => ({
  display: 'flex',
  justifySelf: 'flex-start',
  justifyContent: 'flex-start',
  flex: 'none',
}));

type PropsT = {
  toggleSidebar: () => void;
};

const Navigation = ({ toggleSidebar }: PropsT) => {
  const { direction, theme } = useStyle();
  const { themeName, isDarkMode, density, toggleDarkMode, toggleDirection, setThemeName, setDensityName } =
    useThemeContext();

  return (
    <HeaderNavigation
      overrides={{
        Root: {
          style: ({ $theme }) => ({
            justifyContent: 'space-between',
            paddingLeft: $theme.sizing.scale800,
            paddingRight: $theme.sizing.scale800,
            paddingTop: $theme.sizing.scale300,
            paddingBottom: $theme.sizing.scale300,
            boxShadow: 'none',
          }),
        },
      }}
    >
      <LogoSegment>
        <Block display="flex" alignItems="center">
          <Link href="/">
            <SprinklrClrIcon size={35} className="mr-2" />
          </Link>
          <Typography variant="h3" weight="bold" className="spr-text-01 mr-2 hidden md:block">
            Spaceweb
          </Typography>
          <Block color={theme.spr.text01} marginLeft="4px">
            <SpacewebLink
              href="https://prod-gitlab.sprinklr.com/sprinklr/frontend/spaceweb/-/blob/main/CHANGELOG.md"
              target="new"
            >
              v{version}
            </SpacewebLink>
          </Block>
        </Block>
      </LogoSegment>

      <NavigationList $align={ALIGN.right}>
        <Block display="flex" alignItems="center">
          <Search />
          <Block
            as="a"
            overrides={{
              Block: {
                style: ({ $theme }) => ({
                  display: 'none',
                  height: $theme.sizing.scale800,
                  [$theme.mediaQuery.small]: {
                    display: 'block',
                  },
                }),
              },
            }}
            // @ts-ignore
            href="https://prod-gitlab.sprinklr.com/sprinklr/frontend/spaceweb"
            marginLeft="scale300"
            $style={{ textDecoration: 'none' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubLogo size={24} color={theme.spr.icon01} />
          </Block>
          <Block
            as="span"
            font="font300"
            marginLeft="scale400"
            marginRight="scale400"
            // @ts-ignore
            onClick={toggleDirection}
            overrides={{
              Block: {
                style: ({ $theme }) => ({
                  cursor: 'pointer',
                  display: 'none',
                  height: $theme.sizing.scale800,
                  [$theme.mediaQuery.small]: {
                    display: 'block',
                  },
                }),
              },
            }}
          >
            {direction === 'rtl' ? (
              <AlignLeftIcon size={24} className="spr-icon-01" />
            ) : (
              <AlignRightIcon size={24} className="spr-icon-01" />
            )}
          </Block>
          <Block
            overrides={{
              Block: {
                style: ({ $theme }) => ({
                  height: $theme.sizing.scale800,
                  [$theme.mediaQuery.small]: {
                    display: 'block',
                  },
                  marginLeft: '16px',
                }),
              },
            }}
          >
            <Block as="span" font="font300">
              <select
                value={density}
                onChange={e => {
                  setDensityName(e.target.value as DocsThemeContextShape['density']);
                }}
              >
                <option value="DEFAULT">Density: Default</option>
                <option value="COMFORTABLE">Density: COMFORTABLE</option>
                <option value="COMPACT">Density: COMPACT</option>
                <option value="SPACIOUS">Density: SPACIOUS</option>
              </select>
            </Block>
          </Block>
          <Block
            as="a"
            overrides={{
              Block: {
                style: ({ $theme }) => ({
                  height: $theme.sizing.scale800,
                  [$theme.mediaQuery.small]: {
                    display: 'block',
                  },
                }),
              },
            }}
            $style={{ textDecoration: 'none' }}
            // @ts-ignore
            href="#"
            onClick={toggleDarkMode}
          >
            <StatefulTooltip
              content={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              accessibilityType="tooltip"
            >
              <Block as="span" font="font300">
                <Bulb className="spr-icon-01" size={24} />
              </Block>
            </StatefulTooltip>
          </Block>
          <Block
            overrides={{
              Block: {
                style: ({ $theme }) => ({
                  height: $theme.sizing.scale800,
                  [$theme.mediaQuery.small]: {
                    display: 'block',
                  },
                  marginLeft: '16px',
                }),
              },
            }}
          >
            <Block as="span" font="font300">
              <select
                value={themeName}
                onChange={e => {
                  setThemeName(e.target.value as DocsThemeContextShape['themeName']);
                }}
              >
                <option value="space">Theme: Space</option>
                <option value="hyperspace">Theme: HyperSpace</option>
              </select>
            </Block>
          </Block>
          <Hamburger role="button" onClick={toggleSidebar}>
            <Menu size={32} color={theme.spr.text01} />
          </Hamburger>
        </Block>
      </NavigationList>
    </HeaderNavigation>
  );
};
export default Navigation;

import * as React from 'react';
import { ReactElement, PropsWithChildren, ComponentType, ReactNode, ElementType } from 'react';

import Head from 'next/head';
import { Block } from 'baseui/block';
import { StyledLink } from 'baseui/link';
import { styled, useStyle } from 'spaceweb/style';
import Code from './code';
import Link from 'next/link';
import Anchor from './anchor';
import slugify from '../helpers/slugify';
import { useHover } from '../hooks/useHover';
import { useRouter } from 'next/router';
import { Box } from 'spaceweb/box';

const getText = (children: ReactNode) => {
  let label = '';
  React.Children.forEach(children, child => {
    if (typeof child === 'string' || typeof child === 'number') {
      label += child;
      return;
    }
    if (React.isValidElement(child) && child.props && child.props.children) {
      label += getText(child.props.children);
    }
  });
  return label;
};

export const cleanAnchor = (anchor: ReactNode) => slugify(getText(anchor));

export const Heading = ({
  element,
  fontType,
  children,
  slug,
}: PropsWithChildren<{
  element: ElementType;
  fontType: string;
  slug?: string;
}>): ReactElement => {
  const [hoverRef, isHovered] = useHover();
  const { theme } = useStyle();
  const slugId = slug || cleanAnchor(children);
  return (
    // @ts-ignore
    <Block as={element} marginBottom="8px" font={fontType} ref={hoverRef} id={slugId} color={theme.spr.text01}>
      {children} <Anchor isVisible={isHovered} slug={slugId} element={element} />
    </Block>
  );
};

export const ListItem = (props: PropsWithChildren<{}>): ReactElement => {
  const { theme } = useStyle();
  return (
    <Box $as="li" className="spr-text-01 text-16">
      {props.children}
    </Box>
  );
};

export const Paragraph = (props: PropsWithChildren<{}>): ReactElement => {
  const { theme } = useStyle();
  return (
    <Block as="p" font="font300" color={theme.spr.text01} marginTop="1rem">
      {props.children}
    </Block>
  );
};

export const UnorderedList = (props: PropsWithChildren<{}>): ReactElement => <Box $as="ul" className="list-disc pl-4">{props.children}</Box>;

export const InlineCode = styled('code', {
  backgroundColor: 'rgba(27, 31, 35, 0.05)',
  borderTopLeftRadius: '3px',
  borderTopRightRadius: '3px',
  borderBottomRightRadius: '3px',
  borderBottomLeftRadius: '3px',
  fontSize: '85%',
  marginLeft: 0,
  marginRight: 0,
  marginTop: 0,
  marginBottom: 0,
  padding: '0.2em 0.4em',
  fontFamily: 'SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier, monospace;',
});

export const Blockquote = styled('blockquote', {
  backgroundColor: 'rgba(27, 31, 35, 0.03)',
  borderTopLeftRadius: '3px',
  borderTopRightRadius: '3px',
  borderBottomRightRadius: '3px',
  borderBottomLeftRadius: '3px',
  marginLeft: 0,
  marginRight: 0,
  marginTop: 0,
  marginBottom: 0,
  padding: '1em 3em',
});

export const DocLink = ({ children, href }: PropsWithChildren<{ href: string }>): ReactElement => {
  const parts = href.split('#');
  const internal = (parts[0] === '' && parts[1] !== '') || !href.includes('http');
  const { basePath } = useRouter();
  const hrefWithBasePath = href.startsWith('/') ? basePath + href : href;
  if (internal) {
    return (
      <Link href={href}>
        <StyledLink href={hrefWithBasePath}>{children}</StyledLink>
      </Link>
    );
  }
  return (
    <StyledLink href={hrefWithBasePath} target="_blank" rel="noopener noreferrer">
      {children}
    </StyledLink>
  );
};

export const H1 = ({ children, slug, title }: PropsWithChildren<{ slug?: string; title?: string }>): ReactElement => (
  <>
    <Head>
      <title key="title">
        {process.env.NODE_ENV !== 'production' ? '[DEV] ' : ''}
        Spaceweb - {title ?? children}
      </title>
    </Head>
    <Heading element="h1" fontType="font750" slug={slug}>
      {children}
    </Heading>
  </>
);

export const H2 = ({ children }: PropsWithChildren<{}>): ReactElement => (
  <Heading element="h2" fontType="font650">
    {children}
  </Heading>
);

export const H3 = ({ children }: PropsWithChildren<{}>): ReactElement => (
  <Heading element="h3" fontType="font550">
    {children}
  </Heading>
);

export const H4 = ({ children }: PropsWithChildren<{}>): ReactElement => (
  <Heading element="h4" fontType="font400">
    {children}
  </Heading>
);

export const H5 = ({ children }: PropsWithChildren<{}>): ReactElement => (
  <Heading element="h5" fontType="font350">
    {children}
  </Heading>
);

export const H6 = ({ children }: PropsWithChildren<{}>): ReactElement => (
  <Heading element="h6" fontType="font250">
    {children}
  </Heading>
);

export default {
  code: Code,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  li: ListItem,
  p: Paragraph,
  ul: UnorderedList,
  inlineCode: (({ children }) => <InlineCode>{children}</InlineCode>) as ComponentType,
  blockquote: (({ children }) => <Blockquote>{children}</Blockquote>) as ComponentType,
  a: DocLink,
};

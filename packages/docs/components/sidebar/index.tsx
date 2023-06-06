import { useState, useEffect, ReactElement } from 'react';
import { useLocalStorage } from 'react-use';
import Link from 'next/link';
import { TreeView, toggleIsExpanded, TreeLabel, TreeNode, TreeLabelProps, TreeViewOverrides } from 'baseui/tree-view';
import { Box } from 'spaceweb/box';
import { Tag } from 'spaceweb/tag';
import { ListItem } from 'spaceweb/list';
import { Typography } from 'spaceweb/typography';
import { isServer } from 'spaceweb';

import routes from './config';

type SpaceTreeNode = TreeNode & {
  path?: string;
  depth?: number;
  isCurrentPath?: boolean;
  emoji?: string;
};

const buildRoute = (routeWithoutProps: TreeNode, depth: number, parentId?: string): SpaceTreeNode => {
  const label = routeWithoutProps.label as string;
  const route = {
    ...routeWithoutProps,
    id: parentId ? parentId.concat(`/${label}`) : label,
    depth,
  };

  if (route.children) {
    route.isExpanded = false;
    route.children = route.children.map(childRoute => buildRoute(childRoute, depth + 1, route.id));
  }
  return route;
};

const defaultRoutes: SpaceTreeNode[] = routes.map(route => buildRoute(route, 1, undefined));

const findExpandedIds = (route: SpaceTreeNode, expandedIds: SpaceTreeNode['id'][]) => {
  if (route.isExpanded) {
    expandedIds.push(route.id);
  }
  route?.children?.forEach(childRoute => findExpandedIds(childRoute, expandedIds));
};

const getExpandedIds = (routes: SpaceTreeNode[]) => {
  const expandedIds: SpaceTreeNode['id'][] = [];
  routes.forEach(route => findExpandedIds(route, expandedIds));
  return expandedIds;
};

const removeSlash = (path: string): string => path && path.replace(/\/$/, '');

const activePredicate = (node: SpaceTreeNode, path: string): boolean =>
  (node.path && removeSlash(path) === removeSlash(node.path)) || (!path && node.path === '/');

const computeIsExpanded = (route: SpaceTreeNode, path: string, expandedIds?: SpaceTreeNode['id'][]): SpaceTreeNode => {
  const fixedRoute = { ...route, isExpanded: expandedIds?.some(id => id === route.id) };
  if (fixedRoute.children) {
    fixedRoute.children = fixedRoute.children.map(childRoute => computeIsExpanded(childRoute, path, expandedIds));
    fixedRoute.isCurrentPath = fixedRoute.children.some(childRoute => childRoute.isCurrentPath);
    if (fixedRoute.isExpanded === false && fixedRoute.isCurrentPath === true) {
      fixedRoute.isExpanded = true;
    }
  } else {
    fixedRoute.isCurrentPath = activePredicate(fixedRoute, path);
  }
  return fixedRoute;
};

const fixIsExpanded = (routes: SpaceTreeNode[], path: string, expandedIds?: SpaceTreeNode['id'][]): SpaceTreeNode[] =>
  routes.map(route => computeIsExpanded(route, path, expandedIds));

const getLabel = (node: SpaceTreeNode): ReactElement => (
  <Box className="flex flex-grow items-center justify-between py-1">
    <Typography
      variant={node.depth === 1 ? 'h5' : node.depth === 2 && node.children?.length ? 'h6' : 'bs1'}
      className={['m-0', node.disabled === true ? 'spr-text-03' : '']}
    >
      {node.emoji ? <Box className="inline mr-1 lg:mr-2">{node.emoji}</Box> : null}
      {node.label}
    </Typography>
    {node.new && <NewReleaseFlag />}
  </Box>
);

const NewReleaseFlag = (): ReactElement => (
  <Tag closeable={false} intent="warning" variant="light" size="sm" className="ml-1">
    New!
  </Tag>
);

const CustomTreeLabel: TreeViewOverrides['TreeLabel'] = ({
  path,
  ...props
}: TreeLabelProps & { path: string; node: SpaceTreeNode }) => {
  const { node } = props;
  const className = [
    ({ theme }) => ({
      ...(!node.disabled && {
        ':hover': {
          backgroundColor: theme.list.hoverBackgroundColor,
        },
      }),
      ...(activePredicate(node, path) && {
        backgroundColor: theme.list.hoverBackgroundColor,
      }),
    }),
    node.disabled === true ? 'cursor-not-allowed' : 'cursor-pointer',
  ];

  return node.path && !node.disabled ? (
    <Link href={node.path}>
      <Box className={className}>
        <TreeLabel {...props} />
      </Box>
    </Link>
  ) : (
    <Box className={className}>
      <TreeLabel {...props} />
    </Box>
  );
};

const CustomTreeItem: TreeViewOverrides['TreeItem'] = props => (
  <ListItem className={['p-0', { color: 'inherit' }]}>{props.children}</ListItem>
);

export default ({ path, closeSidebar }): ReactElement | null => {
  const [expandedIds, setExpandedIds] = useLocalStorage<SpaceTreeNode['id'][]>('expandedIds', []);
  const [data, setData] = useState<SpaceTreeNode[]>(defaultRoutes);

  useEffect(() => {
    if (data) {
      const fixedData = fixIsExpanded(data, path, expandedIds);
      setData(fixedData);
      setExpandedIds(getExpandedIds(fixedData));
    }
  }, [path]);

  return isServer || !data ? null : (
    <TreeView
      data={data}
      onToggle={node => {
        let updatedExpandedIds: SpaceTreeNode['id'][] | undefined;
        if (node.isExpanded) {
          updatedExpandedIds = expandedIds?.filter(id => id !== node.id);
        } else {
          updatedExpandedIds = expandedIds ? [...expandedIds, node.id] : [node.id];
        }
        setExpandedIds(updatedExpandedIds);
        setData(toggleIsExpanded(data, node));
        // close the sidebar only when it has no children
        if (!node.children) {
          closeSidebar();
        }
      }}
      overrides={{
        Root: {
          style: ({ $theme }) => ({ paddingBottom: $theme.sizing.scale1000 }),
        },
        TreeItem: {
          component: CustomTreeItem,
        },
        TreeLabel: {
          component: CustomTreeLabel,
          style: { ':hover': { backgroundColor: 'none' } },
          props: {
            path,
            label: getLabel,
          },
        },
      }}
    />
  );
};

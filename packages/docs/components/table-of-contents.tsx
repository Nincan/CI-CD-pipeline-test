import { Link } from 'spaceweb/link';
import { useStyle } from 'spaceweb/style';

function getPadding(componentType: string) {
  const multiplier = Number(componentType.replace('h', ''));

  return `${multiplier * 12}px`;
}

const TableOfContents = props => {
  const { css, theme, direction } = useStyle();
  const TOC = [] as { name: string; anchor: string; component: string }[];
  const content = props.content[0].props.children;
  content &&
    content.forEach &&
    content.forEach(element => {
      if (
        element.props.name &&
        element.props.name.startsWith('h') &&
        element.props.children &&
        element.props.children.toLowerCase
      ) {
        TOC.push({
          name: element.props.children,
          anchor: `#${element.props.children.toLowerCase().replace(/\s+/g, '-')}`,
          component: element.props.name,
        });
      }

      if (element.props.title) {
        TOC.push({
          name: element.props.title,
          anchor: `#${element.props.title.toLowerCase().replace(/\s+/g, '-')}`,
          component: 'h3',
        });
      }

      if (element.props.api && element.props.heading) {
        TOC.push({
          name: element.props.heading,
          anchor: `#${element.props.heading.toLowerCase().replace(/\s+/g, '-')}`,
          component: 'h3',
        });
      }
    });

  if (TOC.length === 1) {
    return null;
  }

  return (
    <ul
      className={css({
        [direction === 'rtl' ? 'borderRight' : 'borderLeft']: `1px solid ${theme.spr.border01}`,
        listStyle: 'none',
        [direction === 'rtl' ? 'marginRight' : 'marginLeft']: theme.spr.border01,
        paddingLeft: 0,
        paddingRight: 0,
        // to make sure we align vertically with the edit on github button
        marginTop: '-10px',
        marginBottom: 0,
        // set predictable width to avoid page relayout when table of content changes
        width: '200px',
        position: 'fixed',
        top: '100px',
      })}
    >
      {TOC.map(header => (
        <li
          key={header.name}
          className={css({
            ...theme.typography.bs3,
            [direction === 'rtl' ? 'paddingRight' : 'paddingLeft']: getPadding(header.component),
            marginTop: '12px',
            lineHeight: '1.4rem',
          })}
        >
          <Link className="spr-text-02" href={header.anchor}>
            {header.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default TableOfContents;

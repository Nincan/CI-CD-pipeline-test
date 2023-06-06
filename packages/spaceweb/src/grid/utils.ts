/* eslint import/prefer-default-export: 0 */

export const filterOwnProps = <T>(breakpoints: string[], props: T): Partial<T> => {
  const gridProps = [
    'children',
    'className',
    'cols',
    'rows',
    'colGap',
    'gap',
    'rowGap',
    'style',
    'colEnd',
    'colSpan',
    'colStart',
    'rowEnd',
    'rowSpan',
    'rowStart',
    ...breakpoints,
  ];

  return Object.entries(props).reduce<Partial<T>>((otherProps, [key, val]) => {
    if (gridProps.includes(key)) return otherProps;
    return { ...otherProps, [key]: val };
  }, {});
};

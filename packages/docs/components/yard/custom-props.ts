import * as t from '@babel/types';
import template from '@babel/template';
import generate from '@babel/generator';
import { formatCode, parse } from 'react-view';
import { SpacePropsTypes } from '../../componentConfigs/common';

export const createSpaceCustomProp = type => {
  if (type === SpacePropsTypes.FixedString) {
    return {
      generate: value => {
        return t.stringLiteral(String(value));
      },
      parse: () => null,
    };
  }
};

export type TCustomPropFields = {
  names: string[];
  sharedProps: { [key: string]: string | { type: string; description: string } };
};

export function parseOverrides(overrides: any, acc: any) {
  overrides.forEach((override: any) => {
    const overrideName = override.key.name;
    const overrideProps = override.value.properties;
    overrideProps.forEach((prop: any) => {
      if (prop.key.name === 'style') {
        acc[overrideName] = {
          style: formatCode(generate(prop.value).code),
          active: true,
        };
      }
      // looking for 'props' key
      if (prop.key.name === 'props') {
        // looking for 'overrides' key
        prop.value.properties.forEach((subprop: any) => {
          if (subprop.key.name === 'overrides') {
            acc[overrideName] = {
              nestedValue: {},
              active: true,
            };
            parseOverrides(subprop.value.properties, acc[overrideName].nestedValue);
          }
        });
      }
    });
  });
}

type TGenerateValue = {
  [key: string]: {
    active: boolean;
    style?: string;
    nestedValue?: TGenerateValue;
  };
};

const generateOverrides = (value: TGenerateValue) => {
  const activeValues = Object.entries(value).filter(([, val]) => val.active && (val.style || val.nestedValue));
  if (activeValues.length === 0) return null;
  const keys: any = activeValues.map(([key, val]) => {
    if (val.nestedValue) {
      const nestedOverride = generateOverrides(val.nestedValue);
      if (!nestedOverride) {
        return null;
      }
      return t.objectProperty(
        t.identifier(key),
        t.objectExpression([
          t.objectProperty(
            t.identifier('props'),
            t.objectExpression([t.objectProperty(t.identifier('overrides'), nestedOverride as any)])
          ),
        ])
      );
    }
    return t.objectProperty(
      t.identifier(key),
      t.objectExpression([t.objectProperty(t.identifier('style'), template.expression(val.style as string)({}) as any)])
    );
  });
  return t.objectExpression(keys);
};

export const customProps = {
  overrides: {
    generate: generateOverrides,
    parse: (code: string) => {
      const ast: any = parse(`const foo = ${code};`);
      const topOverrides = ast.program.body[0].declarations[0].init.properties;
      const returnValue = {};
      parseOverrides(topOverrides, returnValue);
      return returnValue;
    },
  },
};

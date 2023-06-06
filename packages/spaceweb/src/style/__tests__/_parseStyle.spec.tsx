/**
 * @author Ivan Torres
 */

import { ReactElement } from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import SpaceConsumer from '../../spaceConsumer';
import { StyleFn } from '../../types';
import _parseStyle, { PSEUDO_SELECTORS } from '../_parseStyle';

import { TestProvider, getTestStyleUtils } from '../../test-utils/test-provider';

describe('_parseStyle()', () => {
  afterEach(cleanup);
  const { theme, classes } = getTestStyleUtils();
  describe('when a single string with a single className given', () => {
    test('returns the corresponding JSS rules and invalid classNames', () => {
      render(
        <TestProvider>
          <SpaceConsumer>
            {(utils): ReactElement => {
              const [styleObject, invalidClasses] = _parseStyle(utils, {}, [
                'ab bc font-sans hover:text-10',
                { backgroundColor: theme.spr.text01 },
                ['xy', 'xz', 'font-bold'],
              ]);

              expect(styleObject).toEqual({
                ...classes['font-sans'],
                ':hover': { fontSize: '1rem' },
                backgroundColor: theme.spr.text01,
                ...classes['font-bold'],
              });
              expect(invalidClasses).toEqual(['ab', 'bc', 'xy', 'xz']);

              return <div />;
            }}
          </SpaceConsumer>
        </TestProvider>
      );
    });
    test('when invalid className is one of the Pseudo selectors', () => {
      render(
        <TestProvider>
          <SpaceConsumer>
            {(utils): ReactElement => {
              const [styleObject, invalidClasses] = _parseStyle(utils, {}, [
                'ab bc disabled',
                { backgroundColor: theme.spr.text01 },
              ]);

              expect(styleObject).toEqual({
                backgroundColor: theme.spr.text01,
              });
              expect(invalidClasses).toEqual(['ab', 'bc', 'disabled']);

              return <div />;
            }}
          </SpaceConsumer>
        </TestProvider>
      );
    });
  });

  describe('when a single string with multiple classes given', () => {
    test('returns combined JSS rules', () => {
      render(
        <TestProvider>
          <SpaceConsumer>
            {(utils): ReactElement => {
              const [styleObject] = _parseStyle(utils, {}, 'font-sans font-hairline');
              expect(styleObject).toEqual({
                ...classes['font-sans'],
                ...classes['font-hairline'],
              });

              return <div />;
            }}
          </SpaceConsumer>
        </TestProvider>
      );
    });
  });

  describe('when an array of class names given', () => {
    test('returns combined JSS rules', () => {
      render(
        <TestProvider>
          <SpaceConsumer>
            {(utils): ReactElement => {
              const [styleObject] = _parseStyle(utils, {}, ['font-sans', 'font-hairline']);
              expect(styleObject).toEqual({
                ...classes['font-sans'],
                ...classes['font-hairline'],
              });

              return <div />;
            }}
          </SpaceConsumer>
        </TestProvider>
      );
    });
  });

  describe('when a single JSS rule given', () => {
    test('returns such rule', () => {
      const rule = { backgroundColor: '#fff' };
      render(
        <TestProvider>
          <SpaceConsumer>
            {(utils): ReactElement => {
              const [styleObject] = _parseStyle(utils, {}, rule);
              expect(styleObject).toEqual(rule);

              return <div />;
            }}
          </SpaceConsumer>
        </TestProvider>
      );
    });
  });

  describe('when multiple JSS rules given', () => {
    test('returns combined rules', () => {
      const rule1 = { backgroundColor: '#fff' };
      const rule2 = { color: '#000' };
      render(
        <TestProvider>
          <SpaceConsumer>
            {(utils): ReactElement => {
              const [styleObject] = _parseStyle(utils, {}, rule1, rule2);
              expect(styleObject).toEqual({
                ...rule1,
                ...rule2,
              });

              return <div />;
            }}
          </SpaceConsumer>
        </TestProvider>
      );
    });
  });

  describe('when function is given', () => {
    test('returns combined JSS rules', () => {
      render(
        <TestProvider>
          <SpaceConsumer>
            {(utils): ReactElement => {
              const [styleObject] = _parseStyle(utils, {}, ({ theme }) => ({ backgroundColor: theme.spr.text01 }));
              expect(styleObject).toEqual({ backgroundColor: theme.spr.text01 });

              return <div />;
            }}
          </SpaceConsumer>
        </TestProvider>
      );
    });
  });

  describe('when all types of rules are given', () => {
    test('returns combined rules', () => {
      const rule1 = { backgroundColor: '#fff', color: '#000' };
      const rule2 = { color: '#000' };
      const rule3 = { borderColor: theme.spr.text01 };
      const func3: StyleFn = ({ theme }) => ({ borderColor: theme.spr.text01 });

      render(
        <TestProvider>
          <SpaceConsumer>
            {(utils): ReactElement => {
              const [styleObject] = _parseStyle(utils, {}, 'font-sans font-hairline', rule1, rule2, func3);
              expect(styleObject).toEqual({
                ...classes['font-sans'],
                ...classes['font-hairline'],
                ...rule1,
                ...rule2,
                ...rule3,
              });

              return <div />;
            }}
          </SpaceConsumer>
        </TestProvider>
      );
    });
  });

  describe('when breakpoint prefix are present', () => {
    describe('and classNames includes a single breakpoint', () => {
      it('returns media query with its corresponding styles', () => {
        const rule = {
          '@media screen and (min-width: 1024px)': {
            fontWeight: '100',
          },
        };

        render(
          <TestProvider>
            <SpaceConsumer>
              {(utils): ReactElement => {
                const [styleObject] = _parseStyle(utils, {}, 'lg:font-hairline');
                expect(styleObject).toEqual(rule);

                return <div />;
              }}
            </SpaceConsumer>
          </TestProvider>
        );
      });
    });

    describe('and classNames includes regular className and className with breakpoint prefix', () => {
      it('returns media query with its corresponding styles', () => {
        const rule = {
          fontWeight: '400',
          '@media screen and (min-width: 640px)': {
            fontWeight: '700',
          },
        };

        render(
          <TestProvider>
            <SpaceConsumer>
              {(utils): ReactElement => {
                const [styleObject] = _parseStyle(utils, {}, 'font-normal sm:font-bold');
                expect(styleObject).toEqual(rule);

                return <div />;
              }}
            </SpaceConsumer>
          </TestProvider>
        );
      });
    });

    describe('and classNames includes multiple breakpoints prefix', () => {
      it('returns media query with its corresponding styles', () => {
        const rule = {
          '@media screen and (min-width: 640px)': {
            fontWeight: '600',
            fontSize: '1rem',
            backgroundColor: 'red',
          },
          '@media screen and (min-width: 768px)': {
            fontWeight: '200',
          },
          '@media screen and (min-width: 1024px)': {
            fontWeight: '100',
          },
        };
        render(
          <TestProvider>
            <SpaceConsumer>
              {(utils): ReactElement => {
                const [styleObject] = _parseStyle(utils, {}, [
                  'sm:font-light sm:font-600 sm:text-10 md:font-thin lg:font-hairline',
                  { '@media screen and (min-width: 640px)': { backgroundColor: 'red' } },
                ]);
                expect(styleObject).toEqual(rule);

                return <div />;
              }}
            </SpaceConsumer>
          </TestProvider>
        );
      });
    });
  });

  describe('when pseudo-selectors are present', () => {
    test.each(Object.keys(PSEUDO_SELECTORS))('with pseudo-selector :%s', prefix => {
      const rule = {
        [PSEUDO_SELECTORS[prefix]]: {
          fontWeight: '700',
        },
      };
      render(
        <TestProvider>
          <SpaceConsumer>
            {(utils): ReactElement => {
              const [styleObject] = _parseStyle(utils, {}, `${prefix}:font-bold`);
              expect(styleObject).toEqual(rule);

              return <div />;
            }}
          </SpaceConsumer>
        </TestProvider>
      );
    });
  });

  describe('When recursive array of styles is provided', function () {
    test('returns combined styles of classes in the order they are defined', () => {
      render(
        <TestProvider>
          <SpaceConsumer>
            {(utils): ReactElement => {
              const [styleObject] = _parseStyle(utils, {}, [
                'font-sans font-hairline',
                ['relative', 'truncate bg-contain', ['typography-h2']],
              ]);
              expect(styleObject).toEqual({
                ...classes['font-sans'],
                ...classes['font-hairline'],
                ...classes.relative,
                ...classes.truncate,
                ...classes['bg-contain'],
                ...classes['typography-h2'],
              });

              return <div />;
            }}
          </SpaceConsumer>
        </TestProvider>
      );
    });
    test('returns combined styles after resolving StyleFunction and classes.', () => {
      const rule1 = { backgroundColor: '#fff' };
      const rule2 = { color: '#000' };
      const rule3 = { color: 'blue', position: 'absolute' } as const;
      const rule4 = { backgroundColor: 'red' };

      const defaultStyles = () => rule3;
      const stylesToOverride = [rule4, 'relative'];

      const mergedStyles = [defaultStyles, stylesToOverride];

      render(
        <TestProvider>
          <SpaceConsumer>
            {(utils): ReactElement => {
              const [styleObject] = _parseStyle(utils, {}, rule1, rule2, mergedStyles);
              expect(styleObject).toEqual({
                ...rule1,
                ...rule2,
                ...rule3,
                ...rule4,
                ...classes.relative,
              });

              return <div />;
            }}
          </SpaceConsumer>
        </TestProvider>
      );
    });
    test('check parseStyles for atomic classes containing escaped characters', () => {
      render(
        <TestProvider>
          <SpaceConsumer>
            {(utils): ReactElement => {
              const [styleObject] = _parseStyle(utils, {}, 'p-1.5 h-1/2');
              expect(styleObject).toEqual({
                ...classes['p-1.5'],
                ...classes['h-1/2'],
              });

              return <div />;
            }}
          </SpaceConsumer>
        </TestProvider>
      );
    });
  });
});

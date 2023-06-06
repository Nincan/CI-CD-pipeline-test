import { RenderResult, render } from '@testing-library/react';
import { ReactElement } from 'react';
import { useStyletron } from 'styletron-react';

import { StyleProvider, getStyleEngine } from '../styleEngine';
import { StandardEngine } from '../../types';

const TestComponent = (): ReactElement => {
  const [css] = useStyletron();
  return (
    <div data-testid="el" className={css({ backgroundColor: 'white' })}>
      Test
    </div>
  );
};

const setup = (styleEngine: StandardEngine): RenderResult =>
  render(
    <StyleProvider styleEngine={styleEngine}>
      <TestComponent />
    </StyleProvider>
  );

describe('styleEngine', () => {
  describe('getStyleEngine()', () => {
    test('Styletron styleEngine is a singleton', () => {
      const styletron1 = getStyleEngine();
      const styletron2 = getStyleEngine();

      expect(styletron1 === styletron2).toEqual(true);
    });
  });

  describe('(Styletron) Provider', () => {
    test('generates classNames with Styletron', () => {
      const { getByTestId } = setup(getStyleEngine());
      expect(getByTestId('el').className).toContain('sw--');
    });
  });

  describe('(Styletron) Provider', () => {
    test('setup styleEngine on custom ownerDocument', () => {
      const { getByTestId } = setup(getStyleEngine(document));
      expect(getByTestId('el').className).toContain('sw--');
    });
  });

  /* TODO: The following tests require a complex setup (not a priority) */

  describe('hydrate()', () => {
    test.todo('returns server-side generated hydrate CSS code');
  });

  describe('getStylesheets()', () => {
    test.todo('gets Stylesheets for hydration');
  });

  describe('getStylesheetsHtml()', () => {
    test.todo('gets Stylesheets HTML for hydration');
  });

  describe('appendCacheContainer()', () => {
    test.todo('appends cache container into the DOM');
  });
});

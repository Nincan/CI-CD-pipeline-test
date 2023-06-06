import { PropsWithChildren } from 'react';

import { cleanup, render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';

import { DocumentProvider, useDocument } from '../DocumentProvider';

const DUMMY_DOCUMENT = {
  body: {},
};

const renderDocumentProvider = (value?: Document) =>
  render(
    <DocumentProvider value={value}>
      <div id="child" data-testid="child">
        child
      </div>
    </DocumentProvider>
  );

describe('DocumentProvider', function() {
  afterEach(cleanup);

  test('renders children components', () => {
    const { getByTestId } = renderDocumentProvider();
    expect(getByTestId('child').id).toEqual('child');
  });

  test('useDocument receives default value', () => {
    const { result } = renderHook<PropsWithChildren<{ value?: Document }>, Document | undefined>(() => useDocument(), {
      wrapper: DocumentProvider,
      initialProps: {
        children: 'child',
      },
    });
    expect(result.current).toBe(document);
  });

  test('useDocument receives value passed to DocumentProvider', () => {
    const { result } = renderHook<PropsWithChildren<{ value?: Document }>, Document | undefined>(() => useDocument(), {
      wrapper: DocumentProvider,
      initialProps: {
        value: DUMMY_DOCUMENT as Document,
        children: 'child',
      },
    });
    expect(result.current).toBe(DUMMY_DOCUMENT);
  });
});

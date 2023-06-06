import * as React from 'react';
import { Button } from 'spaceweb/button';
import { Tag } from 'spaceweb/tag';
import Search from 'spaceweb-icons/line/Search';
import { DocSearchModal, useDocSearchKeyboardEvents } from '@docsearch/react';
import '@docsearch/css';

const DocSearch = () => {
  const searchButtonRef = React.useRef(null);
  const [isOpen, setIsOpen] = React.useState(false);
  const [initialQuery, setInitialQuery] = React.useState(undefined);

  const onOpen = React.useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  const onClose = React.useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const onInput = React.useCallback(
    event => {
      setIsOpen(true);
      setInitialQuery(event.key);
    },
    [setIsOpen, setInitialQuery]
  );

  useDocSearchKeyboardEvents({
    isOpen,
    onOpen,
    onClose,
    onInput,
    searchButtonRef,
  });

  return (
    <React.Fragment>
      <Button
        aria-label="Search documentation"
        className="typography-l2 spr-text-02 hidden md:flex"
        onClick={onOpen}
        ref={searchButtonRef}
        shape="pill"
        size="sm"
        startEnhancer={<Search />}
        endEnhancer={
          <Tag size="sm" className="h-4 px-1 typography-l4 spr-text-02" closeable={false}>
            ⌘ K
          </Tag>
        }
        variant="secondary"
      >
        Quick search for anything
      </Button>
      {isOpen && (
        <DocSearchModal
          appId="1MIV483YOD"
          apiKey="7b687207d0c0bd3640bafe4d87755c47"
          indexName="sprinklr_spaceweb"
          initialScrollY={window.scrollY}
          initialQuery={initialQuery}
          onClose={onClose}
          placeholder="Search documentation"
        />
      )}
    </React.Fragment>
  );
};

export default DocSearch;

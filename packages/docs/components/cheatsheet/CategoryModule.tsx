/**
 * NOTE: keep track of new utilities: https://tailwindcss.com/docs/release-notes/
 */

import { memo, useState, useEffect } from 'react';
import Highlighter from 'react-highlight-words';

import { Box } from 'spaceweb/box';
import ChevronDown from 'spaceweb-icons/line/ChevronDown';
import cx from 'spaceweb/classNames';
import { Link } from 'spaceweb/link';
import { ListItem } from 'spaceweb/list';
import { Tag } from 'spaceweb/tag';
import { Typography } from 'spaceweb/typography';

import CategoryRow from './CategoryRow';
import { useCheatsheetContext } from './Context';

//honor the parent state only if personal state is not overridden
const CategoryModule = ({ module, index }) => {
  const { keywordQuery } = useCheatsheetContext();
  const toggleStateFromParent = !!keywordQuery;
  const [expandedState, setExpandedState] = useState(toggleStateFromParent);
  const isExpanded = expandedState;

  useEffect(() => {
    setExpandedState(toggleStateFromParent);
  }, [toggleStateFromParent]);

  return (
    <ListItem className="pl-0 pr-0 pt-0 pb-0 justify-center">
      <Box className={cx({ 'border-t border-l-0 border-r-0 border-b-0 border-solid spr-border-03': index > 0 })}>
        <Box
          onClick={() => {
            setExpandedState(!expandedState);
          }}
          className="cursor-pointer flex items-center p-2 hover:spr-ui-02"
        >
          <Typography variant="h5" weight="medium" className="ml-1 spr-text-01">
            <Highlighter searchWords={[keywordQuery]} textToHighlight={module.type} autoEscape />
          </Typography>
          <Box className="flex-grow flex items-center justify-end">
            <Tag className="mr-2" closeable={false} size="sm">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={`https://tailwindcss.com/docs/${module.path || module.type}`}
                className="font-bold text-11 hover:no-underline spr-text-01 hover:spr-text-03"
              >
                DOCS
              </Link>
            </Tag>
            <Box className="spr-text-01">
              {isExpanded ? <ChevronDown className="transform -rotate-180" /> : <ChevronDown />}
            </Box>
          </Box>
        </Box>
        {isExpanded && (
          <Box className="w-full">
            <Box className="overflow-auto pt-0 mt-1 ">
              <Typography className="flex flex-row-reverse spr-text-02 text-14 mr-2">
                {module.variants && module.variants.length ? `Variants: ${module.variants.join(',')}` : ''}
              </Typography>
              <Box $as="table" className="block border-collapse" style={{ maxWidth: '56rem', maxHeight: '25rem' }}>
                <Box $as="tbody" className="block">
                  {module.rules.map(rule => (
                    <CategoryRow moduleType={module.type} key={rule.selector} rule={rule} />
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </ListItem>
  );
};

export default memo(CategoryModule);

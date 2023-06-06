/* eslint-disable import/prefer-default-export */

import { ReactElement, useState, useMemo } from 'react';
import { Grid, WindowScroller, AutoSizer } from 'react-virtualized';
import { BaseButton } from 'spaceweb/base-button';
import { RadioGroup, Radio, ALIGN } from 'spaceweb/radio';

import { Search } from 'spaceweb/search';
import { Box } from 'spaceweb/box';
import { Typography } from 'spaceweb/typography';
import { useStyle } from 'spaceweb/style';

import * as AllIcons from 'spaceweb-icons';
import iconMetadata from 'spaceweb-icons/metadata';

import { IconModal } from './IconModal';
import { IconMetadata } from './types';
import { useThemeContext } from '../themeProperties';

const sortedIconMetadata = iconMetadata.sort((a, b) => (a.name < b.name ? -1 : 1));

const ALL_ICONS_ID = 'all';

const quickFilters = [
  { id: ALL_ICONS_ID, name: 'All Icons' },
  { id: 'solid', name: 'Solid' },
  { id: 'line', name: 'Line' },
  { id: 'placeholder', name: 'Placeholder' },
  { id: 'brand', name: 'Brand' },
  { id: 'product', name: 'Product' },
];

// Icon name is also added into the tags. So it is sufficent to search in tags only.
const doesIconMatchKeyword = (iconMeta: IconMetadata, query: string) =>
  iconMeta.tags.some(tag => tag.toLocaleLowerCase().includes(query.toLocaleLowerCase()));

const IconFinder = (): ReactElement => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState(ALL_ICONS_ID);

  const filteredIconsMetadata = useMemo(
    (): IconMetadata[] =>
      sortedIconMetadata.filter(iconMeta => {
        const isOfSameCategory = selectedFilter === ALL_ICONS_ID || selectedFilter === iconMeta.category;
        const iconNameMatchesToKeywordQuery = doesIconMatchKeyword(iconMeta, searchQuery);
        return isOfSameCategory && iconNameMatchesToKeywordQuery;
      }),
    [selectedFilter, searchQuery]
  );

  return (
    <Box className="flex">
      <Box className="flex-1">
        <Search
          value={searchQuery}
          onChange={(e): void => setSearchQuery(e.currentTarget.value)}
          placeholder="Search Icons by name or tag"
          className={({ theme }) => ({
            backgroundColor: theme.spr.ui01,
            position: 'sticky',
            top: '70px',
            boxShadow: theme.spr.shadow02,
            height: '50px',
            zIndex: 1,
          })}
          autoFocus
        />
        <Typography variant="h5" weight="regular" className="mt-3 ml-2 spr-text-02 italic">
          {`${filteredIconsMetadata.length} icons`}
        </Typography>
        <IconsContainer filteredIconsMetadata={filteredIconsMetadata} />
      </Box>
      <Box>
        <Box className={['fixed ml-6', { marginLeft: '48px', top: '50%', transform: 'translateY(-50%)' }]}>
          <Typography variant="h4" className="spr-text-01">
            Filter Type
          </Typography>
          <RadioGroup
            value={selectedFilter}
            onChange={(e): void => setSelectedFilter(e.target.value)}
            name="filter-type"
            align={ALIGN.vertical}
          >
            {quickFilters.map(({ name, id }) => (
              <Radio value={id} key={id}>
                {name}
              </Radio>
            ))}
          </RadioGroup>
        </Box>
      </Box>
    </Box>
  );
};

const IconsContainer = function({ filteredIconsMetadata }: { filteredIconsMetadata: IconMetadata[] }): ReactElement {
  const { css } = useStyle();
  const [isModalOpen, setModalState] = useState(false);
  const [selectedIconMetadata, setSelectedIconMetadata] = useState(filteredIconsMetadata[0]);
  const COLS = 4;
  const { direction } = useThemeContext();

  return (
    <>
      <WindowScroller>
        {({ height, scrollTop }) => (
          <AutoSizer disableHeight>
            {({ width }) => (
              <Grid
                autoHeight
                height={height}
                width={width}
                columnCount={COLS}
                columnWidth={Math.floor(width / COLS)}
                rowCount={Math.ceil(filteredIconsMetadata.length / COLS)}
                rowHeight={100}
                scrollTop={scrollTop}
                cellRenderer={({ columnIndex, rowIndex, key, style }) => {
                  const iconMeta = filteredIconsMetadata[rowIndex * COLS + columnIndex];
                  if (!iconMeta) return null;
                  const IconComponent = AllIcons[iconMeta.fullName];

                  return (
                    <BaseButton
                      role="button"
                      tabIndex={0}
                      className={css(
                        'flex flex-col justify-center items-center cursor-pointer rounded-4 spr-border-02 border spr-ui-01 hover:spr-ui-02',
                        {
                          position: style.position,
                          [direction === 'rtl' ? 'right' : 'left']: `${style.left}px`,
                          top: `${style.top}px`,
                          height: `${style.height}px`,
                          width: `${style.width}px`,
                        }
                      )}
                      onClick={() => {
                        setModalState(true);
                        setSelectedIconMetadata(iconMeta);
                      }}
                      key={key}
                    >
                      <IconComponent className="spr-icon-01" size={36} />
                      <Typography variant="l2" className="spr-text-02 mt-5 break-all">
                        {iconMeta.name}
                      </Typography>
                    </BaseButton>
                  );
                }}
              />
            )}
          </AutoSizer>
        )}
      </WindowScroller>
      {selectedIconMetadata && (
        <IconModal
          iconMetadata={selectedIconMetadata}
          onClose={(): void => setModalState(false)}
          isOpen={isModalOpen}
        />
      )}
    </>
  );
};

export default IconFinder;

import { memo } from 'react';
import Highlighter from 'react-highlight-words';
import copyToClipboard from 'copy-to-clipboard';
import { useNotification } from '../../contexts/Snackbar';
import { useCheatsheetContext } from './Context';
import { Box } from 'spaceweb/box';
import { Typography } from 'spaceweb/typography';

const pickFirstStyleDecleration = ruleValues => ruleValues[0].split(':')[1].trim();

const ColorDecor = ({ values, className }) => (
  <Box style={{ backgroundColor: pickFirstStyleDecleration(values) }} className={className} />
);

const TextDecor = ({ className, atomicClass }) => <Box className={`${className} ${atomicClass}`}>Aa</Box>;

const RowStartEnhancers = {
  'background-color': ColorDecor,
  'border-color': ColorDecor,
  'text-color': ColorDecor,
  fill: ColorDecor,
  globals: ColorDecor,
  'font-style': TextDecor,
  'font-weight': TextDecor,
  'text-decoration': TextDecor,
  'text-transform': TextDecor,
  'letter-spacing': TextDecor,
  'box-shadow': ({ atomicClass, className }) => (
    <Box className={`spr-clr-grey border spr-border-03 border-solid ${className} ${atomicClass}`} />
  ),
  opacity: ({ atomicClass, className }) => <Box className={`spr-ui-04 ${className} ${atomicClass}`} />,
  cursor: ({ atomicClass, className }) => <Box className={`spr-ui-03 ${className} ${atomicClass}`} />,
  'border-width': ({ className, atomicClass }) => <Box className={`spr-tooltip-border ${className} ${atomicClass}`} />,
  'border-radius': ({ className, atomicClass }) => <Box className={`spr-ui-04 ${className} ${atomicClass}`} />,
  'border-style': ({ className, atomicClass }) => (
    <Box className={`border spr-tooltip-border ${className} ${atomicClass}`} />
  ),
};

const CategoryRow = ({ rule, moduleType }) => {
  const { keywordQuery } = useCheatsheetContext();
  const { selector, values } = rule;
  const atomicClass = selector.substring(1, selector.length).replace('\\', '');

  const notify = useNotification();

  const showCopyNotification = () => {
    copyToClipboard(atomicClass);
    notify({ message: `Copied "${atomicClass}" to clipboard` });
  };

  const RowStartEnhancer = RowStartEnhancers[moduleType];

  return (
    <Box $as="tr">
      <Box $as="td" className="p-1">
        <Box className="flex items-center">
          {RowStartEnhancer && (
            <RowStartEnhancer className="inline-block w-4 h-4 ml-1" atomicClass={atomicClass} values={values} />
          )}
          <Typography
            $as="span"
            onClick={showCopyNotification}
            style={{ cursor: 'copy' }}
            variant="bs1"
            className="inline-block px-1 whitespace-pre spr-text-04"
          >
            <Highlighter searchWords={[keywordQuery]} textToHighlight={selector} autoEscape />
          </Typography>
        </Box>
      </Box>
      <Box $as="td" className="p-1 w-full">
        <Typography $as="span" variant="bs1" className="spr-text-01 whitespace-pre">
          <Highlighter searchWords={[keywordQuery]} textToHighlight={values.join('\n')} autoEscape />
        </Typography>
      </Box>
    </Box>
  );
};

export default memo(CategoryRow);

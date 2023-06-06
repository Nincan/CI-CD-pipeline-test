import { Box } from 'spaceweb/box';
import { getFocusVisibleStyles } from 'spaceweb/helpers/commonStyles';

const UtilityHelperFocusStyles = () => (
  <Box className="py-8 px-4 typography-h4 flex justify-center spr-ui-03 rounded-8">
    <Box
      tabIndex={0}
      style={utils =>
        getFocusVisibleStyles(utils, {
          $outlineColor: 'green',
          $outlineOffset: '4px',
          $outlineWidth: '4px',
        })
      }
    >
      Focus me by tabbing
    </Box>
  </Box>
);

export default UtilityHelperFocusStyles;

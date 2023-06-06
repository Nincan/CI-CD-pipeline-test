import { getPseudoElementPosition } from '../overrides';
import { splitPlacement } from '../utils';

describe('utils', () => {
  describe('getPseudoElementPosition', function () {
    test('if primary position of popover is top/bottom then pseudo element should take fullWidth and height should equal popoverMargin', () => {
      expect(getPseudoElementPosition('bottom', 8).width).toBe('100%');
      expect(getPseudoElementPosition('bottomLeft', 8).width).toBe('100%');
      expect(getPseudoElementPosition('bottomRight', 8).width).toBe('100%');
      expect(getPseudoElementPosition('top', 8).width).toBe('100%');
      expect(getPseudoElementPosition('topLeft', 8).width).toBe('100%');
      expect(getPseudoElementPosition('topRight', 8).width).toBe('100%');

      expect(getPseudoElementPosition('bottom', 10).height).toBe('10px');
      expect(getPseudoElementPosition('bottomLeft', 10).height).toBe('10px');
      expect(getPseudoElementPosition('bottomRight', 10).height).toBe('10px');
      expect(getPseudoElementPosition('top', 10).height).toBe('10px');
      expect(getPseudoElementPosition('topLeft', 10).height).toBe('10px');
      expect(getPseudoElementPosition('topRight', 10).height).toBe('10px');
    });
    test('if primary position of popover is left/right then pseudo element should take fullHeight and width should equal popoverMargin', () => {
      expect(getPseudoElementPosition('left', 8).height).toBe('100%');
      expect(getPseudoElementPosition('leftTop', 8).height).toBe('100%');
      expect(getPseudoElementPosition('leftBottom', 8).height).toBe('100%');
      expect(getPseudoElementPosition('right', 8).height).toBe('100%');
      expect(getPseudoElementPosition('rightTop', 8).height).toBe('100%');
      expect(getPseudoElementPosition('rightBottom', 8).height).toBe('100%');

      expect(getPseudoElementPosition('left', 5).width).toBe('5px');
      expect(getPseudoElementPosition('leftTop', 5).width).toBe('5px');
      expect(getPseudoElementPosition('leftBottom', 5).width).toBe('5px');
      expect(getPseudoElementPosition('right', 5).width).toBe('5px');
      expect(getPseudoElementPosition('rightTop', 5).width).toBe('5px');
      expect(getPseudoElementPosition('rightBottom', 5).width).toBe('5px');
    });

    test('pseudo element should be position itself in the opposite direction of body', () => {
      expect(getPseudoElementPosition('left', 8).right).toBe('-8px');
      expect(getPseudoElementPosition('leftTop', 8).right).toBe('-8px');
      expect(getPseudoElementPosition('leftBottom', 8).right).toBe('-8px');
      expect(getPseudoElementPosition('right', 8).left).toBe('-8px');
      expect(getPseudoElementPosition('rightTop', 8).left).toBe('-8px');
      expect(getPseudoElementPosition('rightBottom', 8).left).toBe('-8px');

      expect(getPseudoElementPosition('bottom', 10).top).toBe('-10px');
      expect(getPseudoElementPosition('bottomLeft', 10).top).toBe('-10px');
      expect(getPseudoElementPosition('bottomRight', 10).top).toBe('-10px');
      expect(getPseudoElementPosition('top', 10).bottom).toBe('-10px');
      expect(getPseudoElementPosition('topLeft', 10).bottom).toBe('-10px');
      expect(getPseudoElementPosition('topRight', 10).bottom).toBe('-10px');
    });
  });

  describe('splitPlacement', function () {
    test('placements should be split if it is combination of 2 position', () => {
      expect(splitPlacement('topLeft')).toEqual(['top', 'left']);
      expect(splitPlacement('bottomRight')).toEqual(['bottom', 'right']);
      expect(splitPlacement('leftTop')).toEqual(['left', 'top']);
      expect(splitPlacement('rightTop')).toEqual(['right', 'top']);
    });
    test('if placement is not combination of 2 positions then it should return as it is in an array', () => {
      expect(splitPlacement('top')).toEqual(['top']);
      expect(splitPlacement('left')).toEqual(['left']);
    });
  });
});

import { fireEvent, render } from '@testing-library/react';
import { TestProvider } from '../../test-utils/test-provider';
import Slider from '../slider';

const CUSTOM_MIN = -100;
const CUSTOM_MAX = 100;
const CUSTOM_STEP = 10;
const TRACK_RECT = {
  x: 0,
  y: 0,
  height: 6,
  width: 100,
  top: 0,
  bottom: 6,
  left: 0,
  right: 100,
};

const renderSlider = props =>
  render(
    <TestProvider>
      <Slider {...props} />
    </TestProvider>
  );

const setDOMRectAPI = (Elem, Rect) => {
  Elem.getBoundingClientRect = () => Rect;
};

// react-range passes onMouseMove event handler to requestAnimationFrame as callback
// mock should return non-null value
jest.spyOn(window, 'requestAnimationFrame').mockImplementation((cb: any) => {
  cb();
  return 1;
});

describe('Slider', () => {
  test('marks is set to true, number of marks elements rendered should be equal to valid steps', async () => {
    const { getAllByTestId } = renderSlider({
      value: [10],
      min: CUSTOM_MIN,
      max: CUSTOM_MAX,
      step: CUSTOM_STEP,
      marks: true,
    });
    const Marks = await getAllByTestId('slider-mark');

    expect(Marks).toHaveLength((CUSTOM_MAX - CUSTOM_MIN) / CUSTOM_STEP + 1);
  });
  describe('Value array length', () => {
    test('length equal to 1, only one thumb should be rendered', async () => {
      const { getAllByRole } = renderSlider({ value: [10] });
      const Thumbs = await getAllByRole('slider');

      expect(Thumbs).toHaveLength(1);
    });
    test('length equal to 2, 2 thumbs should be rendered', async () => {
      const { getAllByRole } = renderSlider({ value: [10, 20] });
      const Thumbs = await getAllByRole('slider');

      expect(Thumbs).toHaveLength(2);
    });
  });
  describe('Mouse interactions', () => {
    test('clicking on the track, should call onChange with value proportional to clicked position', () => {
      const onChange = jest.fn();
      const onFinalChange = jest.fn();
      const { getByTestId } = renderSlider({ value: [0], onChange, onFinalChange });
      const Track = getByTestId('slider-track');

      setDOMRectAPI(Track, TRACK_RECT);
      fireEvent(
        Track,
        new MouseEvent('mousedown', {
          bubbles: true,
          clientX: 50,
        })
      );
      expect(onChange).toBeCalledTimes(1);
      expect(onChange).toBeCalledWith({ value: [50] });

      fireEvent(
        Track,
        new MouseEvent('mouseup', {
          bubbles: true,
        })
      );
      expect(onFinalChange).toBeCalledTimes(1);
    });
    test('When disabled, click on the track should not call onChange', () => {
      const onChange = jest.fn();
      const { getByTestId } = renderSlider({ value: [0], onChange, disabled: true });
      const Track = getByTestId('slider-track');

      fireEvent(
        Track,
        new MouseEvent('mousedown', {
          bubbles: true,
          clientX: 50,
        })
      );
      expect(onChange).not.toBeCalled();
    });
    test('Click on the right of the track should not increase the value greater than max', () => {
      const onChange = jest.fn();
      const { getByTestId } = renderSlider({ value: [0], onChange });
      const Track = getByTestId('slider-track');

      setDOMRectAPI(Track, TRACK_RECT);
      fireEvent(
        Track,
        new MouseEvent('mousedown', {
          bubbles: true,
          clientX: 110,
        })
      );
      expect(onChange).toBeCalledTimes(1);
      expect(onChange).toBeCalledWith({ value: [100] });
    });
    test('Click on the left of the track should not decrease the value lesser than min', () => {
      const onChange = jest.fn();
      const { getByTestId } = renderSlider({ value: [40], onChange });
      const Track = getByTestId('slider-track');

      setDOMRectAPI(Track, TRACK_RECT);
      fireEvent(
        Track,
        new MouseEvent('mousedown', {
          bubbles: true,
          clientX: -10,
        })
      );
      expect(onChange).toBeCalledTimes(1);
      expect(onChange).toBeCalledWith({ value: [0] });
    });
    test('In range slider, right side thumb is dragged to the left of the other thumb, its value should not be less than the left thumb', async () => {
      const onChange = jest.fn();
      const leftThumb = 30,
        rightThumb = 50;
      const { getByTestId, getAllByRole } = renderSlider({ value: [leftThumb, rightThumb], onChange });

      const Track = getByTestId('slider-track');
      const Thumbs = await getAllByRole('slider');
      setDOMRectAPI(Track, TRACK_RECT);
      setDOMRectAPI(Thumbs[0], { left: leftThumb, width: 0 });
      setDOMRectAPI(Thumbs[1], { left: rightThumb, width: 0 });

      fireEvent(
        Track,
        new MouseEvent('mousedown', {
          bubbles: true,
          clientX: rightThumb,
        })
      );

      fireEvent(
        Track,
        new MouseEvent('mousemove', {
          bubbles: true,
          clientX: leftThumb - 10,
        })
      );

      expect(onChange).toHaveBeenLastCalledWith({ value: [leftThumb, leftThumb] });
    });
    test('In range slider, left side thumb is dragged to the right of the other thumb, its value should not be more than the right thumb', async () => {
      const onChange = jest.fn();
      const leftThumb = 30,
        rightThumb = 50;
      const { getByTestId, getAllByRole } = renderSlider({ value: [leftThumb, rightThumb], onChange });

      const Track = getByTestId('slider-track');
      const Thumbs = await getAllByRole('slider');
      setDOMRectAPI(Track, TRACK_RECT);
      setDOMRectAPI(Thumbs[0], { left: leftThumb, width: 0 });
      setDOMRectAPI(Thumbs[1], { left: rightThumb, width: 0 });

      fireEvent(
        Track,
        new MouseEvent('mousedown', {
          bubbles: true,
          clientX: leftThumb,
        })
      );

      fireEvent(
        Track,
        new MouseEvent('mousemove', {
          bubbles: true,
          clientX: rightThumb + 10,
        })
      );

      expect(onChange).toHaveBeenLastCalledWith({ value: [rightThumb, rightThumb] });
    });
  });
  describe('keyboard interaction', () => {
    test('pressing right arrow key, value should increase by one step', () => {
      const INITIAL_VALUE = 0;
      const onChange = jest.fn();
      const onFinalChange = jest.fn();
      const { getByRole } = renderSlider({ value: [INITIAL_VALUE], step: CUSTOM_STEP, onChange, onFinalChange });
      const Thumb = getByRole('slider');

      fireEvent(
        Thumb,
        new KeyboardEvent('keydown', {
          bubbles: true,
          key: 'ArrowRight',
        })
      );
      expect(onChange).toBeCalledTimes(1);
      expect(onChange).toBeCalledWith({ value: [INITIAL_VALUE + CUSTOM_STEP] });

      fireEvent(
        Thumb,
        new KeyboardEvent('keyup', {
          bubbles: true,
          key: 'ArrowRight',
        })
      );
      expect(onFinalChange).toBeCalledTimes(1);
    });
    test('pressing left arrow key, value should decrease by one step', () => {
      const INITIAL_VALUE = 50;
      const onChange = jest.fn();
      const onFinalChange = jest.fn();
      const { getByRole } = renderSlider({ value: [INITIAL_VALUE], step: CUSTOM_STEP, onChange, onFinalChange });
      const Thumb = getByRole('slider');

      fireEvent(
        Thumb,
        new KeyboardEvent('keydown', {
          bubbles: true,
          key: 'ArrowLeft',
        })
      );
      expect(onChange).toBeCalledTimes(1);
      expect(onChange).toBeCalledWith({ value: [INITIAL_VALUE - CUSTOM_STEP] });

      fireEvent(
        Thumb,
        new KeyboardEvent('keyup', {
          bubbles: true,
          key: 'ArrowRight',
        })
      );
      expect(onFinalChange).toBeCalledTimes(1);
    });
    test('When disabled, onChange should not be called', () => {
      const onChange = jest.fn();
      const { getByRole } = renderSlider({ value: [0], onChange, disabled: true });
      const Thumb = getByRole('slider');
      fireEvent(
        Thumb,
        new KeyboardEvent('keydown', {
          bubbles: true,
          key: 'ArrowLeft',
        })
      );
      expect(onChange).not.toBeCalled();
    });
  });
  describe('Thumb value', () => {
    test('Thumb should have value according to provided valueToLabel function', async () => {
      const valueToLabel = jest.fn(value => `Value is: ${value}`);
      const { getByRole, queryByText } = renderSlider({ value: [10], valueToLabel });

      expect(queryByText('Value is: 10')).toBeNull();

      const Thumb = getByRole('slider');
      fireEvent(
        Thumb,
        new MouseEvent('mouseover', {
          bubbles: true,
        })
      );

      expect(queryByText('Value is: 10')).toBeTruthy();
      expect(valueToLabel).toHaveBeenCalled();
    });
  });
});

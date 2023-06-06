import type { measureElement as measureElementType, Virtualizer } from '@tanstack/react-virtual';

const parseMeasurement = (str: string): number => parseFloat(str) || 0;

// by default react-virtual uses getBoundingClientRect to calculate dimensions.
// overriding it to use height + margin, so that we do not have to wrap each ListItem with another element
export const measureElement: typeof measureElementType = (element: Element, instance: Virtualizer<any, any>) => {
  const elementStyle = window.getComputedStyle(element);
  const marginX = parseMeasurement(elementStyle.marginLeft) + parseMeasurement(elementStyle.marginRight);
  const marginY = parseMeasurement(elementStyle.marginTop) + parseMeasurement(elementStyle.marginBottom);
  const boundingRect = element.getBoundingClientRect();
  return instance.options.horizontal ? boundingRect.width + marginX : boundingRect.height + marginY;
};

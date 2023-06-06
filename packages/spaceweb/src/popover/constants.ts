export const ON_MOUSE_LEAVE_DELAY = 300;
export const ARROW_SIZE = 4;

/*
 * Since we use a 45-degree rotated div to render the arrow, the
 * width/height of this div is different than the arrow size itself
 * calculated using pythagorean theorem
 */
export const ARROW_WIDTH = Math.ceil(Math.sqrt(2 * ARROW_SIZE * ARROW_SIZE));

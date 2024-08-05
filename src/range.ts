
/**
 *  Generate an array of integers with values from the provided start to end.
 *
 *  @example
 *  ```typescript
 *  const r = range(1, 4) // = [1,2,3,4]
 *  ```
 * 
 * @param start number to start counting from
 * @param stop number to start counting at
 * @param step interval between numbers
 * @returns an array in the form of [start, ... , end]
 */
export function range(start: number, stop: number, step = 1): Array<number> {
  if (stop < start) return []
  const length = (stop - start) / step + 1;
  return Array.from({ length }, (_, i) => start + i * step);
}
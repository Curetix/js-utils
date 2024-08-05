/**
 * Returns a number whose value is limited to the given range.
 *
 *  @example
 *  ```typescript
 *  const e1 = clamp(42, 10, 50) // = 42
 *  const e2 = clamp(42, 0, 40) // = 40
 *  const e3 = clamp(42, 50, 100) // = 50
 *  ```
 * 
 * @param n The input number
 * @param min The lower boundary of the output
 * @param max The upper boundary of the output
 * @returns A number in the range [min, max]
 */
export function clamp(n: number, min: number, max: number): number {
  return Math.min(Math.max(n, min), max);
}
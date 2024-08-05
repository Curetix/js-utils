/**
 * Generate a random integer in the range.
 * 
 * Example: randomInt(10, 100) = 42
 * 
 * @param start Minimum number
 * @param end Maximum number
 * @returns A number in the range [start, end]
 */
export function randomInt(start = 0, end = 1): number {
  return Math.floor(Math.random() * end) + start;
}

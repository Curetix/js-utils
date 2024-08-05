/**
 * Pad a number with zeros until the minimum length is reached.
 * 
 * Example: padNumber(3, 2) = "03"
 * 
 * @param n Number to pad
 * @param p Minimum length of the output string
 */
export function padNumber(n: number, p = 2): string {
  return String(n).padStart(p, "0");
}
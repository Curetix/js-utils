/**
 * Generate a string of random alphanumerical characters with the provided length.
 * 
 * @example
 * ```typescript
 * const s = randomString(5) // = kf93S
 * ```
 * 
 * @param length Length of the string to generate
 * @returns A random string
 */
export function randomString(length: number, alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"): string {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
  }
  return result;
}

/**
 * Returns a promise that resolved after the specified amount of time.
 * If this promise is awaited, it will block the main thread for this time.
 * 
 *  @example
 *  ```typescript
 *  await sleeo(5000) // will block the thread for 5 seconds
 *  ```
 * 
 * @param ms number of milliseconds to sleep for
 */
export async function sleep(ms = 300): Promise<void> {
  return new Promise((r) => {
    setTimeout(r, ms);
  });
}

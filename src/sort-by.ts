/**
 * Sort an array of objects of type T by the provided key and direction.
 * https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_sortby-and-_orderby
 * 
 * @example
 * ```typescript
 * type Object = { name: string }
 * const array: Array<Object>
 * const sorted = array.sort(sortBy<Object>("name", "descending"))
 * ```
 * 
 * @param key key name to sort by
 * @param direction direction to sort the array to
 * @returns a function used with the built-in Array.sort method
 */
export function sortBy<T>(key: keyof T, direction: "ascending" | "descending" = "ascending"): (a: T, b: T) => 1 | -1 | 0 {
  if (direction === "ascending") {
    return (a: T, b: T) => (a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0);
  }
  return (a: T, b: T) => (a[key] < b[key] ? 1 : b[key] < a[key] ? -1 : 0);
}
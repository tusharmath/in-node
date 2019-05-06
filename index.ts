/**
 * A simple flag that returns `true` or `false` based on if the program is running in node environment or not.
 */
export const inNode = !!(
  typeof process !== 'undefined' &&
  process.versions &&
  process.versions.node
)

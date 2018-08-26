export function clean(str: string) {
  return str
    .trim()
    .replace(/(?:\r\n|\r|\n)/g, '\\n')
    .replace(/(?:\t)/g, '\\t');
}

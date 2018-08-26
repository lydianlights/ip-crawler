export function clean(str: string) {
  str = str || '';
  return str
    .trim()
    .replace(/(?:\r\n|\r|\n)/g, '\\n')
    .replace(/(?:\t)/g, '\\t');
}

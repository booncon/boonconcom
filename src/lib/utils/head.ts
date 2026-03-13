export const escapeInlineScript = (value: string) =>
  value
    .replace(/</g, '\\u003C')
    .replace(/-->/g, '--\\>')
    .replace(/<\/script/gi, '<\\/script')
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');

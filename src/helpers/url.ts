export function getQueryParams(object: any) {
  return Object.keys(object)
    .map(key => `${key}=${object[key]}`)
    .join('&');
}
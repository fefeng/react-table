export const FILTER = 'FILTER';
export const LENGHTMENU = 'LENGHTMENU';

export function doFilter(text) {
  return { type: FILTER, text }
}
export function lengthMenu(text) {
  return { type: LENGHTMENU, text }
}
export function formatMonth(value) {
  if (!value) return ''
  return new Date(`${value}-01T00:00:00`).toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  })
}

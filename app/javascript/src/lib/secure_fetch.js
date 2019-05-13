export function secure_fetch(url, method, additionalHeaders = {}) {
  const csrfToken = document.querySelector('meta[name="csrf-token"]').content
  const defaultHeaders = {
    "X-CSRF-Token": csrfToken,
  }
  const headers = Object.assign({}, defaultHeaders, additionalHeaders)
  return fetch(url, {
    method: method,
    credentials: "same-origin",
    headers,
  })
}

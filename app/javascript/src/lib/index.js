export function getCSRFToken() {
  return document.querySelector('meta[name="csrf-token"]').content
}

export default function ({ $axios, app }) {
  if (process.client) {
    const token = localStorage.getItem('auth._token.local') || ''
    $axios.setHeader('Authorization', token)
  }
  $axios.onRequest(() => {
    $axios.setHeader('Content-Type', 'application/json')
    $axios.setHeader('Accept', 'application/json')
  })
}

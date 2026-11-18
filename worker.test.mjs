// Run: node --test worker.test.mjs
// worker.js uses ESM syntax without "type": "module", so load it as a data URL.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const src = readFileSync(new URL('./worker.js', import.meta.url), 'utf8')
const worker = (await import('data:text/javascript,' + encodeURIComponent(src))).default

const env = { CLIENT_GATEWAY_SECRET: 's3cret', RESEND_API_KEY: 'k', ASSETS: { fetch: () => new Response('asset') } }
const post = (body, origin = 'https://byteless.io') =>
  new Request('https://byteless.io/api/send-email', {
    method: 'POST',
    headers: { Origin: origin, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })

let sent
globalThis.fetch = async (_url, init) => {
  sent = JSON.parse(init.body)
  return new Response('{}', { status: 200 })
}

test('rejects invalid input', async () => {
  const res = await worker.fetch(post({ name: 'A', email: 'nope', message: 'hello there friend' }), env)
  assert.equal(res.status, 400)
})

test('rejects unknown origins without the secret', async () => {
  const res = await worker.fetch(post({ name: 'A', email: 'a@b.co', message: 'hello there friend' }, 'https://evil.test'), env)
  assert.equal(res.status, 401)
})

test('escapes HTML in the email body', async () => {
  const res = await worker.fetch(post({ name: '<b>A</b>', email: 'a@b.co', message: '<script>x</script> hello' }), env)
  assert.equal(res.status, 200)
  assert.ok(!sent.html.includes('<script>'))
  assert.ok(sent.html.includes('&lt;script&gt;'))
})

test('serves assets for other paths', async () => {
  const res = await worker.fetch(new Request('https://byteless.io/services'), env)
  assert.equal(await res.text(), 'asset')
})

import build from '@hono/vite-cloudflare-pages'
import devServer from '@hono/vite-dev-server'
import adapter from '@hono/vite-dev-server/cloudflare'
import { defineConfig } from 'vite'
import honox from "honox/vite"

export default defineConfig({
  plugins: [
    honox(),
    build(),
    devServer({
      adapter,
    })
  ]
})

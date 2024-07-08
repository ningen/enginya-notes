import pages from '@hono/vite-cloudflare-pages'
import devServer from '@hono/vite-dev-server'
import adapter from '@hono/vite-dev-server/cloudflare'
import { defineConfig } from 'vite'
import client from 'honox/vite/client'
import honox from "honox/vite"

import ssg from '@hono/vite-ssg'


const entry = "./app/server.ts"

export default defineConfig(({ mode }) => {
  if(mode === "client") {
    return {
      build: {
        rollupOptions: {
          input: [
            "/app/style.css"
          ],
          output: {
            assetFileNames: "static/assets/[name].[ext]"
          }
        }
      },
      plugins: [
        client()
      ]
    }
  }

  return {
    plugins: [
      honox(),
      pages(),
      devServer({
        adapter,
      }),
      ssg({ entry })
    ]
  }
})

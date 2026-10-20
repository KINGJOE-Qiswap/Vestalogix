import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { piVerifyHandler } from './api/_lib/pi-verify.js'

// Serves the Vercel function at /api/pi/verify during local dev (Vercel serves api/ in production).
function piApiDevServer() {
  return {
    name: 'pi-api-dev-server',
    configureServer(server) {
      server.middlewares.use('/api/pi/verify', (req, res) => {
        piVerifyHandler(req, res).catch((error) => {
          console.error('[pi/verify] Unhandled error:', error)
          res.statusCode = 500
          res.end(JSON.stringify({ error: 'Internal server error' }))
        })
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), piApiDevServer()],
  server: {
    host: true,
    allowedHosts: true,
  },
})

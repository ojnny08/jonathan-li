import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/**
 * Serves api/*.ts through the Vite dev server so `npm run dev` behaves like
 * `vercel dev`. Dev only — in production Vercel runs these functions itself.
 */
function devApi(env: Record<string, string>): Plugin {
  return {
    name: 'dev-api',
    apply: 'serve',
    configureServer(server) {
      // The handlers read process.env, which Vite doesn't populate on its own
      Object.assign(process.env, env)

      server.middlewares.use('/api', async (req, res) => {
        const route = (req.url ?? '/').split('?')[0].replace(/\/$/, '')

        try {
          const mod = await server.ssrLoadModule(`/api${route}.ts`)

          // Vercel adds status()/json() on top of Node's ServerResponse
          const vercelRes = Object.assign(res, {
            status(code: number) {
              res.statusCode = code
              return vercelRes
            },
            json(body: unknown) {
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify(body))
              return vercelRes
            },
            send(body: string) {
              res.end(body)
              return vercelRes
            },
          })

          await mod.default(req, vercelRes)
        } catch (err) {
          console.error(err)
          res.statusCode = 500
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ error: String(err) }))
        }
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // '' prefix loads every var, not just VITE_ ones — these stay server-side
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react(), tailwindcss(), devApi(env)],
  }
})

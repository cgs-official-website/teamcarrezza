import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all envs regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '')
  Object.assign(process.env, env)

  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'api-server',
        configureServer(server) {
          server.middlewares.use(async (req, res, next) => {
            if (req.url && req.url.startsWith('/api/')) {
              try {
                // Remove query strings if any
                const url = req.url.split('?')[0]
                const filePath = path.resolve(process.cwd(), `.${url}.js`)
                
                // Add minimal Vercel-like response helpers for compatibility
                res.status = (code: number) => {
                  res.statusCode = code
                  return res
                }
                res.json = (data: any) => {
                  res.setHeader('Content-Type', 'application/json')
                  res.end(JSON.stringify(data))
                  return res
                }

                // Load the API handler dynamically
                const apiModule = await server.ssrLoadModule(filePath)
                
                // Execute the handler
                if (apiModule && apiModule.default) {
                  await apiModule.default(req, res)
                } else {
                  res.statusCode = 404
                  res.end(JSON.stringify({ error: 'API Handler not found' }))
                }
              } catch (e: any) {
                console.error('API Error:', e)
                res.statusCode = 500
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({ error: 'Internal Server Error', details: e.message }))
              }
              return
            }
            next()
          })
        }
      }
    ],
  }
})

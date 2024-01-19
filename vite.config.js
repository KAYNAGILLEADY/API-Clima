import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

process.env = {...process.env, ...loadEnv(mode, process.cwd())};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    __APP_ENV__: JSON.stringify(process.env.VITE_PORT)
  }
})

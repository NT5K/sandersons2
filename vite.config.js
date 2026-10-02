import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Unique id for each build, used to detect when a newer deploy is live
const buildId = Date.now().toString()

// Emits dist/version.json so the running app can check for a newer deploy
const versionFile = () => ({
  name: 'version-file',
  apply: 'build',
  generateBundle() {
    this.emitFile({
      type: 'asset',
      fileName: 'version.json',
      source: JSON.stringify({ buildId }),
    })
  },
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), versionFile()],
  base: '/',
  define: {
    __BUILD_ID__: JSON.stringify(buildId),
  },
  build: {
    outDir: 'dist'
  }
})

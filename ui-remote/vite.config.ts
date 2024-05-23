import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
// import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'ui-remote',
      remotes: {
        'ui-remote2': 'http://localhost:3002/assets/remoteEntry.js'
      },
      filename: 'remoteEntry.js',
      exposes: {
        './Form': './src/components/Form.tsx'
      },
      shared: ['react', 'react-dom']
    })
    // tsconfigPaths()
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: true,
    cssCodeSplit: true
  },
  server: {
    port: 3001,
    strictPort: true
  },
  preview: {
    port: 3001,
    strictPort: true
  }
})

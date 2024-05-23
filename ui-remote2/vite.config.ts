import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'ui-remote2',
      filename: 'remoteEntry.js',
      exposes: {
        './Button': './src/components/Button.tsx'
      },
      shared: ['react', 'react-dom']
    })
  ],
  server: {
    strictPort: true,
    port: 3002
  },
  preview: {
    // host: 'localhost',
    port: 3002
  },
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})

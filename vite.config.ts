import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
// @ts-expect-error no types available
import postcssPrefixSelector from 'postcss-prefix-selector'

export default defineConfig({
  css: {
    postcss: {
      plugins: [
        postcssPrefixSelector({
          prefix: '.mfe-maincontent',
          transform(_prefix: string, selector: string, prefixedSelector: string) {
            // Non prefixare html, body, :root, *
            if (
              selector.startsWith('html') ||
              selector.startsWith('body') ||
              selector.startsWith(':root') ||
              selector === '*'
            ) {
              return selector
            }
            return prefixedSelector
          }
        })
      ]
    }
  },

  plugins: [
    react(),
    federation({
      name: 'maincontent',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App.jsx'
      },
      shared: ['react', 'react-dom']
    })
  ],

  server: {
    port: 5001,
    cors: true
  },

  preview: {
    port: 5001
  },

  build: {
    sourcemap: true,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,       // IMPORTANTE: serve per caricare il CSS nel federated chunk
    modulePreload: false,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) {
            return 'assets/[name][extname]'
          }
          return 'assets/[name]-[hash][extname]'
        }
      }
    }
  }
})

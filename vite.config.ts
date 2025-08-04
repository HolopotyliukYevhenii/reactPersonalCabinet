import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';


import path from 'node:path'
import { packageDirectorySync } from 'pkg-dir'

const packageRoot = packageDirectorySync()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
     VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'pwa/pwa-192x192.png',
        'pwa/pwa-512x512.png',
        'favicon.ico',
      ],
      manifest: {
        name: 'Rideadbo',
        short_name: 'Rideadbo',
        description: 'Rideadbo',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        lang: 'en',
        scope: '/',
        icons: [
          {
            src: 'pwa/cropped-ra_favicon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'pwa/cropped-ra_favicon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
        ],
      },
    }),
  ],

  resolve: {
    alias: {
      'src': path.resolve(packageRoot, './src'),
    },
  },
})

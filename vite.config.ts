import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Disc-golf-skill-tree/',
  server: {
    host: true, // This makes the server accessible on your local network
    port: 3000
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/components': path.resolve(__dirname, './src/components'),
      '@/lib': path.resolve(__dirname, './src/lib'),
      '@/context': path.resolve(__dirname, './src/context'),
      '@/types': path.resolve(__dirname, './src/types'),
      '@/services': path.resolve(__dirname, './src/services'),
      '@/data': path.resolve(__dirname, './src/data'),
      '@/assets': path.resolve(__dirname, './src/assets'),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    modulePreload: {
      polyfill: true
    },
    rollupOptions: {
      output: {
        format: 'es',
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]'
      }
    }
  }
})

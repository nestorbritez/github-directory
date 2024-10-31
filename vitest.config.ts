import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vitest/config'

const $r = (route: TemplateStringsArray) => path.resolve(__dirname, `/${route}`)

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': $r`src`,
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./setupTests.ts'],
  },
})

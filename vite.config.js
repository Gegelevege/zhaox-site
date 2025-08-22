import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// We don't set a fixed base here; the GitHub Action passes --base=/<repo>/
export default defineConfig({
  plugins: [react()],
})

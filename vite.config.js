import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Se estiver rodando no GitHub Actions usa o caminho com subpasta. 
  // Se estiver rodando no seu Docker (ou máquina local), usa a raiz (/).
  base: process.env.GITHUB_ACTIONS ? '/tela-login/' : '/', 
})
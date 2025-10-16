import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        { src: 'node_modules/@ucl-nuee/ik-cd-worker/public/wasm',
          dest: '.', },
        { src: 'node_modules/@ucl-nuee/ik-cd-worker/public/ik_cd_worker.js',
          dest: '.', },
        { src: 'node_modules/@ucl-nuee/jaka-zu5/public/jaka_zu_5',
          dest: '.', },
        { src: 'node_modules/@ucl-nuee/nova2/public/nova2_robot',
          dest: '.', },
      ],
    }),
  ],
})

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: '/YONSEI_NFT_front/',
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, 'src/') }],
  },
});

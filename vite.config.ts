import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import envCompatible from 'vite-plugin-env-compatible';
import eslint from 'vite-plugin-eslint';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://github.com/LiJiahaoCoder/vitejs-plugin-antd-import (antD)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // https://github.com/IndexXuan/vite-plugin-env-compatible
    envCompatible({ prefix: 'REACT_APP' }),
    envCompatible({ prefix: 'AWS' }),
    // ability to resolve imports using TypeScript's path mapping.
    tsconfigPaths(),
    eslint(),
  ],
  build: {
    outDir: 'build',
  },
});

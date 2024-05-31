import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from '@originjs/vite-plugin-federation';
// import eslint from 'vite-plugin-eslint';
import { getRemoteProjects } from './federation.config';


export default ({ mode }: { mode: string }) => {
  const env = loadEnv(mode, process.cwd());
  console.log('mode', mode);

  const productionConfig = {};
  if (mode === 'production') {
    productionConfig['base'] = 'https://dmifsud.github.io/mf-app-react-host';
  }

  return defineConfig({
    ...productionConfig,
    plugins: [
      // eslint(),
      react(),
      federation({
        name: 'remote_app',
        remotes: getRemoteProjects(mode as 'development' | 'production' | 'local-prod'),
        shared: ['react', 'react-dom', 'zustand']
    })
    ],
    server: {
      port: Number(env.VITE_PORT),
      origin: `http://localhost:${env.VITE_PORT}`, // asset for absolute path
      watch: {
        usePolling: true,
        // useFsEvents: true,
        // interval: 100,
      },
    },
    build: {
      target: 'esnext',
      outDir: 'dist', 
      // assetsDir: 'mf-app-react-host/assets',
    },
  });
};
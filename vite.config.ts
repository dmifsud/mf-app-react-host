import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from '@originjs/vite-plugin-federation';
// import eslint from 'vite-plugin-eslint';
import { getRemoteProjects } from './federation.config';


export default ({ mode }: { mode: string }) => {
  const env = loadEnv(mode, process.cwd());
  console.log('mode', mode);
  return defineConfig({
    // base: "http://localhost:4173", // to change the base path based on environment and actual deployment url
    plugins: [
      // eslint(),
      react(),
      federation({
        name: 'remote_app',
        remotes: getRemoteProjects(mode as 'development' | 'production'),
        shared: ['react', 'react-dom', 'zustand']
    })
    ],
    server: {
      port: Number(env.VITE_PORT),
      origin: `http://localhost:${env.VITE_PORT}`, // asset for absolute path
    },
    build: {
      target: 'esnext',  // Ensure this is set to 'esnext
      outDir: 'dist', 
      assetsDir: 'mf-app-react-host/assets',
      rollupOptions: {
        input: 'src/main.tsx', // Entry file
        output: {
          entryFileNames: 'main.js', // Specify the output file name
        },
      },
    },
  });
};
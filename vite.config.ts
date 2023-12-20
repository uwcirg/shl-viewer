import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '');
  return {
    // vite config
    server: {
      host: true,
      port: env.DEV_SERVER_PORT ? env.DEV_SERVER_PORT : 3000
  	}
  };
})
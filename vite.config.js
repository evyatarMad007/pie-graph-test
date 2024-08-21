import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/index.jsx', // Use .jsx as the entry point
      name: 'MyComponentLibrary',
      fileName: (format) => `my-component-library.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        assetFileNames: `my-component-library.[ext]`, // Ensures correct file naming for non-JS assets
      },
    },
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Ensure Vite resolves .jsx files
  },
});

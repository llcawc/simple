// rollup.config.js

import { env } from 'process'
import json from '@rollup/plugin-json'
import { terser } from 'rollup-plugin-terser'

export default {
  input: 'src/assets/js/main.js',
  output: {
    file: 'dist/assets/js/main.min.js',
    format: 'iife',
    name: 'main',
    sourcemap: env.BUILD === 'production' ? false : true,
    plugins: [env.BUILD === 'production' ? terser() : false],
  },
  plugins: [json()],
}

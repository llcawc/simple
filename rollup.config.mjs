// rollup.config.js

import chalk from 'chalk'
import json from '@rollup/plugin-json'
import { terser } from 'rollup-plugin-terser'

const config = {
  input: 'src/assets/js/main.js',
  output: {
    file: 'dist/assets/js/main.min.js',
    format: 'iife',
  },
  plugins: [json(), process.env.BUILD === 'production' ? terser() : null],
}

if (process.env.BUILD === 'production') {
  console.log(chalk.green('JS Build production completed.'))
} else {
  console.log(chalk.magenta('JS Build development without watching completed.'))
}

export default config

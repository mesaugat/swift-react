#!/usr/bin/env node

const path = require('path');
const { spawn } = require('child_process');

const webpackConfig = path.resolve(__dirname, 'webpack.config.js')

spawn(`${__dirname}/node_modules/webpack/bin/webpack.js serve --config ${webpackConfig} --open`, [], {
  shell: true,
  stdio: 'inherit'
});

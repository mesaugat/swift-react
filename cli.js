#!/usr/bin/env node

const path = require('path');
const { spawn } = require('child_process');

const webpackConfig = path.resolve(__dirname, 'webpack.config.js')

spawn(`${__dirname}/node_modules/webpack-dev-server/bin/webpack-dev-server.js --config ${webpackConfig} --open`, [], {
  shell: true,
  stdio: 'inherit'
});

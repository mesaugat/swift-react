#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const { spawn } = require('child_process')

const webpackConfigPath = path.resolve(__dirname, 'webpack.config.js')
let webpackBinPath = path.resolve(__dirname, 'node_modules/webpack/bin/webpack.js')

if (!fs.existsSync(webpackBinPath)) {
  // when using newer versions of npx, node modules are not inside swift-react folder
  webpackBinPath = path.resolve(__dirname, '../webpack/bin/webpack.js')
}

if (!fs.existsSync(webpackBinPath)) {
  console.log(`\nCouldn't find webpack binary to start webpack server. Please raise an issue at https://github.com/mesaugat/swift-react/issues`)

  process.exit(1)
}

spawn(`${webpackBinPath} serve --config ${webpackConfigPath} --open`, [], {
  shell: true,
  stdio: 'inherit'
})

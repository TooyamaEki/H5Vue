'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  WECHAT_APPID: '"wxa0a2b139ad2b74ea"', //测试微信appid
  API_URL: '"wechat.cshuaiw.com"', //测试接口地址
})

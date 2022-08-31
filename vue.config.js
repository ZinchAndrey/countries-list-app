// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   publicPath: '/countries-list-app/'
// });

// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
//  module.exports = {
  
//   publicPath: '/countries-list-app/'
// }

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/countries-list-app/' // note the trailing slash
  : '/',
}

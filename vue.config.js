const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
export default defineConfig({
  bace:'/deploying-vite-project-example/',
  plugins: [vue()]
})

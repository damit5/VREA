const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  publicPath:'./',//静态资源包打包为相对路径
  outputDir:'dist',//输出文件
  devServer:{
      open:false,
      host:'0.0.0.0',
      port:8090,
      hot:true,
      proxy: {
          '/api': {
            target: 'http://blog.gm7.org/', // 需要请求的第三方接口地址
            changeOrigin: true, // 是否跨域：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
            ws: true,  //是否代理 websockets
            secure: false,  //是否https接口
            pathRewrite: {  // 路径重写，
              '^/api': ''  // 替换target中的请求地址，也就是说以后你请求/api就等于请求http://t.weather.sojson.com/。
            }
          }
      },  
  }
}
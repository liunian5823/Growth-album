module.exports = {

    transpileDependencies: ['@arcgis'],
    lintOnSave: false,//这里禁止使用eslint-loader
    publicPath: '/',//配置根目录
    outputDir: 'dist',//构建输出目录
    assetsDir: "assets",//静态资源目录（js,css,image）
    lintOnSave: false, //是否开启eslint检测,false不开启，有效值：true || false
    productionSourceMap: true,//生成环境下面开启sourceMap支持断点调试
    configureWebpack: config => {
        // config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
        if (process.env.NODE_ENV === 'production') { // 生产环境不输出日志
            config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
        }
    },
    
    devServer: {
        overlay: {
            warning: false,
            errors: false
        },
        open: true, //是否启动打开浏览器
        host: "0.0.0.0",//主机，0.0.0.0支持局域网地址，可以用真机测试
        port: 8081, //端口
        https: false,//是否启动https
        //配置跨域代理http,
        proxy: {
            "/api": {
                target: "http://10.10.9.175:8080/",
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ""
                }
            }
        }
    },
    pluginOptions: {
        'process.env':{
            NODE_ENV:'"development"'
        }
    },
}
module.exports = { //解决跨域的问题
    devServer : {
        proxy : {
            '/api' : {
                target : 'http://39.97.33.178',
                changeOrigin : true,
            }
        }
    }
}
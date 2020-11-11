const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')

module.exports={
    
    entry:'./src/index.js',
    
    output:{
        
        filename:'built.js',
        
        path:resolve(__dirname,'dist'),
       
    },
    
    devServer:{
        contentBase:'./dist',
        open: true,
        port: 8080,
        hot: true,
        hotOnly: true
    },

    module:{
        rules:[
            {
                test: /\.css$/,
                use:['style-loader','css-loader']
                
            },
            {
                test: /\.(eot|ttf|svg|woff)$/,
                use:{
                    loader:'file-loader',
                }}
        ]
    },
    
    plugins:[
        new HtmlWebpackPlugin({
        template:'./src/index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    
    devServer:{
        contentBase:'./dist',
        open: true,
        hot: true
    },

    
    mode:'development',
    
}
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    
    entry:'./src/index.js',
    
    output:{
        
        filename:'built.js',
        
        path:resolve(__dirname,'dist'),
       
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
    
    plugins:[new HtmlWebpackPlugin({
        template:'./src/index.html'
    })],
    
    devServer:{
        contentBase:'./dist',
        open: true
    },

    
    mode:'development',
    
}
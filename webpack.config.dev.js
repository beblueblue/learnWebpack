const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve( __dirname, 'dist' ),
        filename: 'app.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['react']
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            // file-loader:
            //     1. 把你的资源移动到输出目录
            //     2. 放回最终引入资源的url
            {
                test: /\.(ttf|eot|svg|woff)$/,
                use: [ 'file-loader' ]
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 200000
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        open: true,
        port: 3100
    }
};
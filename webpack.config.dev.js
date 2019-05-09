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
                            presets: ['react', 'env'],
                            plugins: ['transform-object-rest-spread']
                        }
                    }
                ]
            },
            // 处理css文件，模块化引入(import [objName] from [url])
            // localIdentName ： '[path]_[name]_[local]_[hash:base64:6]'
            {
                test: /\.css$/,
                use: [ 
                        'style-loader', 
                        {
                            loader: 'css-loader',
                            options: {
                                module: true,
                                localIdentName: '[path]_[name]_[local]_[hash:base64:6]'
                            }
                        } 
                    ],
                exclude: [
                    path.resolve( __dirname, 'node_modules' ),
                    path.resolve( __dirname, 'src/common' ),
                ]
            },
            {
                test: /\.css$/,
                use: [ 
                        'style-loader', 
                        'css-loader',
                    ],
                include: [
                    path.resolve( __dirname, 'node_modules' ),
                    path.resolve( __dirname, 'src/common' ),
                ]
            },
            // 处理scss, sass文件
            {
                test: /\.s(c|a)ss$/,
                use: [ 
                        'style-loader', 
                        {
                            loader: 'css-loader',
                            options: {
                                module: true,
                                localIdentName: '[name]_[local]_[hash:base64:6]'
                            }
                        },
                        'sass-loader',
                    ],
                exclude: [
                    path.resolve( __dirname, 'node_modules' ),
                    path.resolve( __dirname, 'src/common' ),
                ]
            },
            {
                test: /\.s(c|a)ss$/,
                use: [ 
                        'style-loader', 
                        'css-loader',
                        'sass-loader',
                    ],
                include: [
                    path.resolve( __dirname, 'node_modules' ),
                    path.resolve( __dirname, 'src/common' ),
                ]
            },
            // 处理less文件
            {
                test: /\.less$/,
                use: [ 
                        'style-loader', 
                        {
                            loader: 'css-loader',
                            options: {
                                module: true,
                                localIdentName: '[name]_[local]_[hash:base64:6]'
                            }
                        },
                        'less-loader',
                    ],
                exclude: [
                    path.resolve( __dirname, 'node_modules' ),
                    path.resolve( __dirname, 'src/common' ),
                ]
            },
            {
                test: /\.less$/,
                use: [ 
                        'style-loader', 
                        'css-loader',
                        'less-loader',
                    ],
                include: [
                    path.resolve( __dirname, 'node_modules' ),
                    path.resolve( __dirname, 'src/common' ),
                ]
            },
            // file-loader:
            //     1. 把你的资源移动到输出目录
            //     2. 放回最终引入资源的url
            {
                test: /\.(ttf|eot|svg|woff|woff2)$/,
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
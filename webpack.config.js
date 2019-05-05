const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve( __dirname, 'dist' ),
        filename: 'pluginTest.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'pluginTest.html',
            template: 'src/index.html'
        })
    ]
};
const path = require('path');
const webpack = require('webpack');


module.exports = {
    
    mode: 'development',
    devtool: 'source-map',
    entry: './test/index.ts',
    plugins:[
        new webpack.IgnorePlugin(/pixi.js|es6-tween/)
    ],
    module: {
        noParse: /pixi.js|es6-tween/,
        rules: [
            {
                test: /pixi.js/,
                use: 'ts-loader'
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: [/node_modules/]
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'test.js',
        path: path.resolve(__dirname, 'dist')
    },
};
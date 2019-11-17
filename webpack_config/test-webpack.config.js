const path = require('path');
const webpack = require('webpack');


module.exports = {
    
    mode: 'development',
    devtool: 'source-map',
    entry: './test/index.ts',
    plugins:[
        new webpack.IgnorePlugin(/pixi.js/)
    ],
    module: {
        noParse: /pixi.js/,
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
        library: 'example',
        libraryTarget: 'umd',
        path: path.resolve(__dirname, '../dist')
    },
};
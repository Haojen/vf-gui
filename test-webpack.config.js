const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: './test/index.ts',
    module: {
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
const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/vf-gui.ts',
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
        filename: 'vf-gui.min.js',
        library: "vfgui",
        path: path.resolve(__dirname, '../dist')
    },
    devServer: {
        inline: true,
        port: 8089
    }
};

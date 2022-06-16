const path = require(`path`);

module.exports = {
    entry: `./src/ue-webview-bridge.ts`,
    mode: `development`,
    output: {
        path: path.resolve(__dirname, `dist`),
        filename: `ue-webview-bridge.js`,
        library: {
            name: `@kl-engineering/ue-webview-bridge`,
            type: `umd`,
        },
    },
    devtool: `source-map`,
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: `ts-loader`,
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [
            `.tsx`,
            `.ts`,
            `.js`,
        ],
    },
};

const path = require(`path`);

module.exports = {
    entry: `./src/index.ts`,
    mode: `development`,
    output: {
        path: path.resolve(__dirname, `build`),
        filename: `ue-webview-bridge.js`,
        library: {
            name: `UnrealJsBridge`,
            type: `umd`,
        }
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
        extensions: [`.tsx`, `.ts`, `.js`],
    },
};
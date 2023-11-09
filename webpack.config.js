const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
    devtool: false,
    resolve: {
        modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
    module: {
        rules: [
            {
                test: /\.(?:js)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            [
                                "@babel/preset-env",
                                {
                                    modules: "amd",
                                },
                            ],
                        ],
                    },
                },
            },
        ],
    },
    optimization: {
        /*
         * 當 NODE_ENV 是 production 時
         * webpack optimization.usedExports 預設值是 true
         * */
        usedExports: true,
    },
};

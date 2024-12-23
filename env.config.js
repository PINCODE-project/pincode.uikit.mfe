const path = require("path");

const outputConfig = {
    destPath: "./dist",
};

const entryConfig = ["./src/index.tsx"];

const copyPluginPatterns = {
    patterns: [{ from: "./public/logo192.png" }, { from: "./public/logo512.png" }, { from: "./public/favicon.ico" }],
};

const devServer = {
    static: [
        { directory: path.join(__dirname, outputConfig.destPath), },
        { directory: path.join(__dirname, "./build"), },
    ],
    port: "5001",
    historyApiFallback: true,
};

const scssConfig = {
    destFileName: "css/app.min.css",
};

const terserPluginConfig = {
    extractComments: false,
    terserOptions: {
        compress: {
            drop_console: true,
        },
    },
};

module.exports.copyPluginPatterns = copyPluginPatterns;
module.exports.entryConfig = entryConfig;
module.exports.scssConfig = scssConfig;
module.exports.devServer = devServer;
module.exports.terserPluginConfig = terserPluginConfig;
module.exports.outputConfig = outputConfig;

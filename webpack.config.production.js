const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { outputConfig, copyPluginPatterns, entryConfig, devServer } = require("./env.config");

module.exports = (env, options) => {
    return {
        mode: options.mode,
        entry: entryConfig,
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: "ts-loader",
                    exclude: /node_modules/,
                },
                {
                    test: /\.s?css$/i,
                    use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
                },
                {
                    test: /\.js$/,
                    loader: "babel-loader",
                    exclude: /node_modules/,
                    options: {
                        plugins: ["@babel/plugin-syntax-dynamic-import"],
                    },
                },
                {
                    test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
                    type: "javascript/auto",
                    loader: "file-loader",
                    options: {
                        publicPath: "../",
                        name: "[path][name].[ext]",
                        context: path.resolve(__dirname, "src/assets"),
                        emitFile: false,
                    },
                },
                {
                    test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                    type: "javascript/auto",
                    exclude: /images/,
                    loader: "file-loader",
                    options: {
                        publicPath: "../",
                        context: path.resolve(__dirname, "src/assets"),
                        name: "[path][name].[ext]",
                        emitFile: false,
                    },
                },
            ],
        },
        resolve: {
            extensions: [".tsx", ".ts", ".js"],
            alias: {
                "@/*": path.resolve(__dirname, "./src/"),
                "@/pages": path.resolve(__dirname, "./src/pages"),
                "@/components": path.resolve(__dirname, "./src/components"),
                "@/lib": path.resolve(__dirname, "./src/lib"),
                "@/hooks": path.resolve(__dirname, "./src/hooks"),
                "@/data": path.resolve(__dirname, "./src/data"),
                "@/store": path.resolve(__dirname, "./src/store"),
                "@/router": path.resolve(__dirname, "./src/router"),
                "@/assets": path.resolve(__dirname, "./src/assets"),
            },
        },
        output: {
            filename: "js/[name].bundle.js",
            path: path.resolve(__dirname, outputConfig.destPath),
            publicPath: "https://pincode-ui.netlify.app/",
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./public/index.html",
                inject: true,
                minify: false,
            }),
            new CopyPlugin(copyPluginPatterns),
        ],
    };
};

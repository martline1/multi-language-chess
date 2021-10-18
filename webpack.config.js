const path                 = require("path");
const webpack              = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer         = require("autoprefixer");
const ESLintPlugin         = require("eslint-webpack-plugin");
const HtmlWebpackPlugin    = require("html-webpack-plugin");

module.exports = (env, argv) => {
    const mode = argv.mode === "development" ? "development" : "production";

    return {
        mode,
        target : "electron-renderer",
        entry  : {
            app : path.resolve(__dirname, "src", "index.js"),
        },
        output : {
            path     : path.resolve(__dirname, "public"),
            filename : "[name].js",
        },
        module : {
            rules : [
                {
                    test    : /\.(jsx|js)$/,
                    include : path.resolve(__dirname, "src"),
                    exclude : /node_modules/,
                    use     : [
                        {
                            loader  : "babel-loader",
                            options : {
                                presets : ["@babel/preset-env", "@babel/preset-react"],
                            },
                        },
                    ],
                },
                {
                    test    : /\.css$/,
                    include : path.resolve(__dirname, "src"),
                    exclude : /node_modules/,
                    use     : [
                        MiniCssExtractPlugin.loader,
                        {
                            loader  : "css-loader",
                            options : {
                                importLoaders : 1,
                            },
                        },
                    ],
                },
            ],
        },
        plugins : [
            new MiniCssExtractPlugin({
                filename : "[name].css",
            }),
            new webpack.ProvidePlugin({
                React : "react",
            }),
            autoprefixer,
            new ESLintPlugin({
                fix        : true,
                extensions : ["js", "jsx"],
            }),
            new HtmlWebpackPlugin({
                template : path.resolve(__dirname, "src", "index.html"),
                minify   : mode === "production",
            }),
        ],
    };
};
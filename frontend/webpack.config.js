const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "/src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            // For Js.
            {
                test: /\.?js$/,
                exclude: path.resolve(__dirname, "node_modules"),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    }
                }
            },
            // For Css
            {
                test: /\.?css$/,
                use: [
                    "style-loader", "css-loader",
                ],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: "src/index.html" })
    ]
}
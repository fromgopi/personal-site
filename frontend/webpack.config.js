const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/"
    },
    module: {
        rules: [
            // For Js.
            {
                test: /\.?js$/,
                exclude: /node_modules/,
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
                loader: ["style-loader", "css-loader"],
                options: {
                    url: true,
                    import: true
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: "src/index.html" })
    ]
}
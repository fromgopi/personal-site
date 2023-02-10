const path = require("./paths");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    
    entry: [path.src + "/index.js"],
    // Output directory and other stuff

    output: {
        path: path.build,
        filename: "[name].bundle.js",
        publicPath: "/"
    },
    module: {
        rules: [
            // JS Rules
            {
                test: /\.(js|jsx)$/
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({ filename: '[name].[contenthash].css', chunkFilename: '[id].[contenthash].css' }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: paths.src + "/assets",
                    to: "assets",
                    globOptions: {
                        ignore: ["*.DS_Store"],
                    },
                },
            ],
        }),
        new HtmlWebpackPlugin({
            title: "Oscarmild",
            favicon: paths.src + "/assets/icons/elephant.png",
            template: paths.public + "/index.html", // template file
            filename: "index.html", // output file
        }),
    ]
}
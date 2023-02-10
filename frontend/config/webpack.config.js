const path = require("./paths");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer') // help tailwindcss to work

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
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            // Styles: Inject CSS into the head with source maps
            {
                test: /\.(c|sc|sa|le)ss$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                    {
                        // postcss loader needed for tailwindcss
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                ident: 'postcss',
                                plugins: [tailwindcss, autoprefixer]
                            }
                        }
                    }
                ]
            },
            // Images: Copy image into build directory.
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: "asset/resource"
            },
            // // Fonts and SVGs: Inline files
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: "asset/resource"
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
            favicon: path.src + "/assets/icons/elephant.png",
            template: path.public + "/index.html", // template file
            filename: "index.html", // output file
        }),
    ]
}
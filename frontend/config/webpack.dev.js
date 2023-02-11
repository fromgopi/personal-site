const path = require("./paths");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
    // Set the mode to development or production
    mode: 'development',
    // Enabling watch mode in dev server.
    watch: true,
     // Control how source maps are generated
    devtool: "inline-source-map",
    devServer: {
        historyApiFallback: true,
        static:{
            directory:  path.build 
        },
        open: true,
        compress: true,
        hot: true,
        port: 3000
    },
    plugins: [
        // Only update what has changed on hot reload
        new webpack.HotModuleReplacementPlugin(),
    ],
})
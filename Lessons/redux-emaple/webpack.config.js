const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path");
const HtmlPlugin = new HtmlWebpackPlugin({
    template: __dirname + "/index.html",
    filename: "index.html",
    inject: "body"
})

module.exports = {
    entry: path.resolve(__dirname, 'index.js'),
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [HtmlPlugin]
}
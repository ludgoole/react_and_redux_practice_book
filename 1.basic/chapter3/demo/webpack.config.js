module.exports = {
    /**********************************************
     * default entry: './src/index',
     * default output: './dist/main'
     */
    entry: './src/index',
    output: {
        path: __dirname + '/dist',
        filename: 'main.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
        ]
    }
}
module.exports = {
    entry: './src/index',
    output: {
        path: __dirname + '/dist',
        filename: 'main.js'
    }, 
    module: {
        rules: [
            {test: /\.js$/, exclude: /node_modules/, use: ['babel-loader']}
        ]
    }
}
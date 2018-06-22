module.exports = {
    entry: {
      'app': './src/app.js',
      'bg': './src/bg.js'
    },
    output: {
        path: __dirname,
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    },
    devtool: 'source-map'
};

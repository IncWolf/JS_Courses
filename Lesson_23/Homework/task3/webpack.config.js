module.exports = {
    entry: './jsx/main.jsx',
    output: {
        filename: 'bundle.js',
        path: './bundle'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                query:
                {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}
/**
 * Created by IncWolf on 17.09.2016.
 */
module.exports = {
    entry: './src/usersList.jsx',
    output: {
        filename: 'bundle.js',
        path: './build'
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
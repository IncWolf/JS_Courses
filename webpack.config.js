module.exports = {
    entry: {"Lesson_20/Homework/task1/build/bundle": "./Lesson_20/Homework/task1/jsx/main.jsx"},
    output: {
        filename: "[name].js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query:
                {
                    presets: ['es2015', 'react'],
                    plugins: ['transform-object-rest-spread']
                }
            }

        ]
    }
};
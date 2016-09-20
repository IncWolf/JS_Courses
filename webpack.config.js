module.exports = {
    entry: {
        "Lesson_22/Homework/task3/build/bundle": "./Lesson_22/Homework/task3/jsx/main.jsx"},
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
                    presets: ['es2015', 'react', "stage-0"],
                    plugins: ['transform-object-rest-spread', "syntax-async-functions", "transform-runtime"]
                }
            }

        ]
    }
};
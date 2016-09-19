module.exports = {
    entry: {
        "Lesson_25/Classwork/task1/build/bundle": "./Lesson_25/Classwork/task1/src/main.jsx",
        "Lesson_25/Classwork/task2/build/bundle": "./Lesson_25/Classwork/task2/src/main.jsx",
        "Lesson_25/Classwork/task3/build/bundle": "./Lesson_25/Classwork/task3/src/main.jsx",
        "Lesson_25/Homework/task1/build/bundle": "./Lesson_25/Homework/task1/src/main.jsx"},
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
                    presets: ['es2015', 'react']
                }
            }

        ]
    }
};
module.exports = {
    entry: {"Lesson_20/Homework/task1/build/bundle": "./Lesson_20/Homework/task1/jsx/main.jsx",
        "Lesson_20/Homework/task2/build/bundle": "./Lesson_20/Homework/task2/jsx/main.jsx",
        "Lesson_20/Homework/task3/build/bundle": "./Lesson_20/Homework/task3/jsx/main.jsx",
        "Lesson_21/Classwork/task1/build/bundle": "./Lesson_21/Classwork/task1/jsx/main.jsx",
        "Lesson_21/Classwork/task2/build/bundle": "./Lesson_21/Classwork/task2/jsx/main.jsx",
        "Lesson_21/Classwork/task3/build/bundle": "./Lesson_21/Classwork/task3/jsx/main.jsx",
        "Lesson_21/Homework/task1/build/bundle": "./Lesson_21/Homework/task1/jsx/main.jsx",
        "Lesson_21/Homework/task2/build/bundle": "./Lesson_21/Homework/task2/jsx/main.jsx"},
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
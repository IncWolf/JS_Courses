module.exports = {
    entry: {"Lesson_20/Homework/task1/build/bundle": "./Lesson_20/Homework/task1/jsx/main.jsx",
        "Lesson_20/Homework/task2/build/bundle": "./Lesson_20/Homework/task2/jsx/main.jsx",
        "Lesson_20/Homework/task3/build/bundle": "./Lesson_20/Homework/task3/jsx/main.jsx",
        "Lesson_21/Classwork/task1/build/bundle": "./Lesson_21/Classwork/task1/jsx/main.jsx",
        "Lesson_21/Classwork/task2/build/bundle": "./Lesson_21/Classwork/task2/jsx/main.jsx",
        "Lesson_21/Classwork/task3/build/bundle": "./Lesson_21/Classwork/task3/jsx/main.jsx",
        "Lesson_21/Homework/task1/build/bundle": "./Lesson_21/Homework/task1/jsx/main.jsx",
        "Lesson_21/Homework/task2/build/bundle": "./Lesson_21/Homework/task2/jsx/main.jsx",
        "Lesson_21/Homework/task3/build/bundle": "./Lesson_21/Homework/task3/jsx/main.jsx",
        "Lesson_22/Classwork/task1/build/bundle": "./Lesson_22/Classwork/task1/jsx/main.jsx",
        "Lesson_22/Classwork/task2/build/bundle": "./Lesson_22/Classwork/task2/js/main.js",
        "Lesson_22/Classwork/task3/build/bundle": "./Lesson_22/Classwork/task3/jsx/main.jsx",
        "Lesson_22/Homework/task1/build/bundle": ["./Lesson_22/Homework/task1/jsx/main.jsx", "./Lesson_22/Homework/task1/jsx/person.jsx"],
        "Lesson_22/Homework/task2/build/bundle": ["./Lesson_22/Homework/task2/jsx/main.jsx"],
        "Lesson_22/Homework/task3/build/bundle": "./Lesson_22/Homework/task3/jsx/main.jsx",
        "Lesson_24/Classwork/task1/build/bundle": "./Lesson_24/Classwork/task1/jsx/main.jsx"},
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
                    plugins: ["transform-async-to-generator", "syntax-async-functions", "transform-runtime"]
                }
            }

        ]
    }
};
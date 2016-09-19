/**
 * Created by galushkasergiy on 19.09.16.
 */
let data = ['{"id":1,"name":"Betty Knight","gender":"Female"}',
    '{"id":2,"name":"Laura Cook","gender":"Female"}',
    '{"id":3,"name":"Donald Martinez","gender":"Male"}',
    '{"id":4,"name":"Joseph Flores","gender":"Male"}',
    '{"id":5,"name":"Adam Gonzales","gender":"Male"}',
    '{"id":6,"name":"Stephen Arnold","gender":"Male"}',
    '{"id":7,"name":"George Thomas","gender":"Male"}',
    '{"id":8,"name":"Emily Garza","gender":"Female"}',
    '{"id":9,"name":"Roy Cox","gender":"Male"}',
    '{"id":10,"name":"Timothy Hill","gender":"Male"}'];

let tasks = [];
for( let i = 0; i < data.length; i++) {
    tasks[i] = JSON.parse(data[i])
};
let tableMode = true;
const toDoReducer = (state={tasks, tableMode}, action) => {
    // обработка событий
    switch (action.type) {
        // создание пользователя
        case 'CREATE_USER': {

            var newUser = action.payload;
            var newState = state.concat(action.payload)

            return newState;
            break;
        }
        // удаление пользователя
        case 'CHANGE_MODE': {
            return {...state, tableMode: action.payload}
        }
        default: {
            return state;
        }
    }

};

module.exports = toDoReducer;
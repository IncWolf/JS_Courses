/**
 * Created by galushkasergiy on 19.09.16.
 */
let data = ['{"id":1,"title":"Wash hands","complete":"true"}',
    '{"id":2,"title":"Clean teeth","complete":"true"}',
    '{"id":3,"title":"Go to sleep","complete":"false"}'];

let tasks = [];
for( let i = 0; i < data.length; i++) {
    tasks[i] = JSON.parse(data[i]);
    tasks[i].complete == 'true'?tasks[i].complete = true:tasks[i].complete = false;
}
let tableMode = false;
const toDoReducer = (state={tasks, tableMode}, action) => {
    // обработка событий
    switch (action.type) {
        // создание пользователя
        case 'CREATE_TASK': {
            state.tasks = state.tasks.concat(action.payload);
            return {...state};
            break;
        }
        // удаление пользователя
        case 'DELETE_TASK': {
            var newState = [];
            for (var i=0; i<state.tasks.length; i++) {
                if (parseInt(state.tasks[i].id) === parseInt(action.payload)) {
                    continue;
                }
                newState.push(state.tasks[i]);
            }
            state.tasks = newState;
            return {...state}
        }
        case 'CHANGE_MODE': {
            return {...state, tableMode: action.payload}
        }
        default: {
            return state;
        }
    }

};

module.exports = toDoReducer;
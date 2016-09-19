/**
 * Created by galushkasergiy on 19.09.16.
 */
let tableMode = false;
const toDoReducer = (state={tasks:[], tableMode}, action) => {
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
        // обработчики асинхронной загрузки данных
        case 'FETCH_USERS_START': {
            return {...state, fetching: true, tasks: []};
            break;
        }
        case 'FETCH_USERS_ERROR': {
            return {...state, fetching: false, error: action.payloads, tasks: []};
            break;
        }
        case 'RECEIVE_USERS': {
            console.log(action.payload);
            return {
                ...state,
                fetching: false,
                fetched: true,
                tasks: action.payload
            }
            break;
        }
        default: {
            return state;
        }
    }

};

module.exports = toDoReducer;
/**
 * Created by galushkasergiy on 19.09.16.
 */
const showReducer = (state=[], action) => {

    // обработка actions
    switch(action.type) {
        case 'SHOW': {
            return {...state, show: true};
            break;
        }
        case 'FETCH_USERS_START': {
            return {...state, fetching: true, users: []};
            break;
        }
        case 'FETCH_USERS_ERROR': {
            return {...state, fetching: false, error: action.payloads, users: []};
            break;
        }
        case 'RECEIVE_USERS': {
            return {
                ...state,
                fetching: false,
                fetched: true,
                users: action.payload
            };
            break;
        }
        default: {
            return state;
        }
    }

};

module.exports = showReducer;
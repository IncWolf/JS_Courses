/**
 * Created by galushkasergiy on 19.09.16.
 */
const showReducer = (state=false, action) => {

    // обработка actions
    switch(action.type) {
        case 'SHOW': {
            return true;
            break;
        }
        default: {
            return state;
        }
    }

}

module.exports = showReducer;
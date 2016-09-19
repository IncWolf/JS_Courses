/**
 * Created by galushkasergiy on 19.09.16.
 */
const inputReducer = (state='', action) => {

    // обработка actions
    switch(action.type) {
        case 'INPUT': {
            return action.payload;
            break;
        }
        default: {
            return state;
        }
    }

}

module.exports = inputReducer;
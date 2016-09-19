/**
 * Created by galushkasergiy on 19.09.16.
 */
export const changeMode = (state) => {
    return {
        type: 'CHANGE_MODE',
        payload: state
    }
};
export const addTask = (id, title, complete) => {
    return {
        type: 'CREATE_TASK',
        payload: [{id, title, complete}]
    }
};
export const removeTask = (id) => {
    return {
        type: 'DELETE_TASK',
        payload: id
    }
};
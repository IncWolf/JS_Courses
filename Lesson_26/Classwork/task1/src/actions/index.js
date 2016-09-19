/**
 * Created by galushkasergiy on 19.09.16.
 */
export const input = (value) => {
    console.log('inputed value');
    return {
        type: 'INPUT',
        payload: value
    }
}
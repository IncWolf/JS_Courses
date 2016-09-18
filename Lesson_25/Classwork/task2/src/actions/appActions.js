/**
 * Created by IncWolf on 18.09.2016.
 */
import dispatcher from '../dispatcher'

export function stop() {
    dispatcher.dispatch({ type: 'STOP'})
}

export function reset() {
    dispatcher.dispatch({ type: 'RESET'})
}

export function start() {
    dispatcher.dispatch({ type: 'START'})
}
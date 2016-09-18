/**
 * Created by IncWolf on 18.09.2016.
 */
import dispatcher from '../dispatcher'

export function changeStyle() {
    dispatcher.dispatch({ type: 'CHANGE'})
}
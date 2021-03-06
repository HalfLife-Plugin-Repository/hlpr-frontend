/**
 * @file Describes state changes when a get
 * request is made to retrieve plugin stats.
 */

import * as constants from 'constants/stats';

export default function(state = {
    data: null,
    isFetching: false
}, action){
    switch(action.type){
        case constants.FETCH_STATS_REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            });
        case constants.FETCH_STATS_SUCCESS:
            return Object.assign({}, state, {
                data: action.payload,
                isFetching: false
            });
        case constants.FETCH_STATS_FAILURE:
            return Object.assign({}, state, {
                isFetching: false
            });
        default:
            return state;
    }
}
import {combineReducers} from 'redux';
import { SELECT_DETAIL } from '../constants/ActionTypes';
import {
 BACKEND_CONTENT,
 FRONTEND_CONTENT,
 TESTING_CONTENT,
 DATABASE_CONTENT
} from '../constants/Contents'

import {
 TESTING_PROFILE,
 BACKEND_PROFILE,
 DATABASE_PROFILE,
 FRONTEND_PROFILE
} from '../constants/Profiles'


//reducer to store list of work details
export const detailListReducer = (detail) => {
    console.log("inside detailListReducer");

    return ([
        {
            profile: BACKEND_PROFILE,
            content: BACKEND_CONTENT
        },
        {
            profile: FRONTEND_PROFILE,
            content: FRONTEND_CONTENT
        },
        {
            profile: TESTING_PROFILE,
            content: TESTING_CONTENT
        },
        {
            profile: DATABASE_PROFILE,
            content: DATABASE_CONTENT
        }
    ]);
}


export const selectedDetailReducer = (state = null , action) => {

    console.log("inside selectedDetailReducer");

    switch(action.type){
        case SELECT_DETAIL:
            return action.payload;

        default:
            return state;
    }
}

export const combineDetailReducer = combineReducers({
    detailList: detailListReducer,
    selectedDetail: selectedDetailReducer
});
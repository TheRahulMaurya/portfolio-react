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

import {
 BACKEND_IMAGE,
 DATABASE_IMAGE,
 FRONTEND_IMAGE,
 TESTING_IMAGE
} from '../constants/ImageResources'


//reducer to store list of work details
export const detailListReducer = (detail) => {
    console.log("inside detailListReducer");

    return ([
        {
            id: 1,
            profile: BACKEND_PROFILE,
            content: BACKEND_CONTENT,
            image: BACKEND_IMAGE,
            stars: 5
        },
        {
            id: 2,
            profile: DATABASE_PROFILE,
            content: DATABASE_CONTENT,
            image: DATABASE_IMAGE,
            stars: 5

        },
        {
            id: 3,
            profile: FRONTEND_PROFILE,
            content: FRONTEND_CONTENT,
            image: FRONTEND_IMAGE,
            stars: 4

        },
        {
            id: 4,
            profile: TESTING_PROFILE,
            content: TESTING_CONTENT,
            image: TESTING_IMAGE,
            stars: 3
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
import { SELECT_DETAIL } from "../constants/ActionTypes";


// Action called when a card is selected and returns the selected detail
export const selectDetail = (detail) =>{
    console.log("inside selectDetail");
    return{
        type: SELECT_DETAIL,
        payload: detail
    }
}
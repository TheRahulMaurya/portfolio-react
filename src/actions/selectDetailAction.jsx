export const selectDetailAction = (detail) =>{
    console.log("inside selectDetailAction");
    return{
        type: "SELECT_DETAIL",
        payload: detail
    }
}

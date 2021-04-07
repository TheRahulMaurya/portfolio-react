import {combineReducers} from 'redux';

//reducer to store list of work details
export const detailListReducer = () => {
    console.log("inside detailListReducer");
    const content = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

    return ([
        {
            profile: "Back End Developer",
            content: content
        },
        {
            profile: "Front End Developer",
            content: content
        },
        {
            profile: "Automation Testing",
            content: content
        },
        {
            profile: "Database Architecture",
            content: content
        }
    ]);
}


export const selectedDetailReducer = (selectedDetail = null , action) => {

    console.log("inside selectedDetailReducer");
    if(action.type === "SELECT_DETAIL"){
        return action.payload;
    }

    return selectedDetail;
}

export const combineDetailReducer = combineReducers({
    detailList: detailListReducer,
    selectedDetail: selectedDetailReducer
});
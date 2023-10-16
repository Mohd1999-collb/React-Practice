import { ADD_POST } from "../action/actionType";

const initialState = "";

export const BirdPostReducer = (state = initialState, action)=>{
    switch (action.type) {
        case ADD_POST:
            return state + action.payLoad;
        default:
            return state;
    }
} 
import { ADD_POST, INCREASELIKE } from "../action/actionType";

const initialState = [];

export const BirdPostReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return [...state, action.payLoad];

        case INCREASELIKE:
            let newList = [...state];
            newList[action.payLoad].likes += 1;
            return newList;
        default:
            return state;
    }
}


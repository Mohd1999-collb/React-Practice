import { combineReducers, createStore } from "redux"
import { MovieReducer } from "./reducer/MovieReducer"
import { BirdPostReducer } from "./reducer/BirdPostReducer";

// For multiple reducer
const root = combineReducers({
    movie : MovieReducer,
    bird : BirdPostReducer
})

// For single reducer
// export const Store = createStore(MovieReducer);

export const Store = createStore(root);
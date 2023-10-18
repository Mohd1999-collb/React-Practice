import { ADD_POST, INCREASELIKE } from "./actionType";

export const addPost = (bird) => {
    return {
        type : ADD_POST,
        payLoad : {
            name : bird,
            likes : 0
        }
    }
}

export const increaseLike = (index)=>{
    return {
        type : INCREASELIKE,
        payLoad : index
    }
}
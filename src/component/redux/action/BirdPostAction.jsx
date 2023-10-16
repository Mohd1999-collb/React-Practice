import { ADD_POST } from "./actionType";

export const addPost = (url) => {
    return {
        type : ADD_POST,
        payLoad : url
    }
}
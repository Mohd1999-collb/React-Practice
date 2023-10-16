
import { SEARCH_MOVIE} from "./actionType";

// Action creaor

export const searchMovie = (searchTerm)=>{
    return {
        type: SEARCH_MOVIE,
        payLoad : searchTerm
    }
}
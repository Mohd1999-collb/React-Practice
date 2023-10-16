import { SEARCH_MOVIE, INC } from "../action/actionType";

// All the logic written here

const initialState = {
    searchTerm: "",
    movies: [
        {
            title: "The Godfather",
            description:
                "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
        },
        {
            title: "The Shawshank Redemption",
            description:
                "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
        },
        {
            title: "Schindlers List",

            description:
                "In German-occupied Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazi Germans."
        },
        {
            title: "Trapped",
            description:
                "A man struggles to survive after he unintentionally locks himself up in a high rise devoid of food, water and electricity."
        }
    ]
};

export const MovieReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_MOVIE:
           return {...state, searchTerm : action.payLoad};
        default:
            return state;
    }
}
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const BASE_URL = process.env.BASE_URL;
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`;
const MOVIE_DETAILS_URL = `${BASE_URL}movie_details.json`;
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}movie_suggestions.json`;

export const apiGetMovies = async(limit, rating) => {
    const {
        data:{
            data:{movies}
        }
    } = await axios.get(LIST_MOVIES_URL,{
        params:{limit, minimum_rating:rating}
    });
    return movies;
}

export const apiGetMovie = async id => {
    const {
        data:{
            data: {movie}
        }
    } = await axios.get(MOVIE_DETAILS_URL, {
        params:{movie_id:id}
    });
    return movie;
};
export const apiSuggestions = async id => {
    const {
        data:{
            data: {movies}
        }
    } = await axios.get(MOVIE_SUGGESTIONS_URL, {
        params:{movie_id:id}
    });
    return movies;
};


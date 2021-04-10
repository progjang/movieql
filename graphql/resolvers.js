import {people, getMovies, getById, getMovieById, addMovie, deleteMovie} from "./db";
import {apiGetMovie, apiGetMovies, apiSuggestions} from "./api";

const resolvers = {
    Query:{
        name: () => "hello name",
        people: () => people,
        person: (_, {id}) => getById(id),
        movies: () => getMovies(),
        movie: (_, {id}) => getMovieById(id),
        apimovies: (_, {limit, rating}) => apiGetMovies(limit, rating),
        apimovie: (_,{id}) => apiGetMovie(id),
        apisuggestions: (_,{id}) => apiSuggestions(id)
    },
    Mutation:{
        addMovie: (_, {name, score}) => addMovie(name, score),
        deleteMovie: (_, {id}) => deleteMovie(id)
    }
};

export default resolvers
import {people, getMovies, getById, getMovieById, addMovie, deleteMovie} from "./db";

const resolvers = {
    Query:{
        name: () => "hello name",
        people: () => people,
        person: (_, {id}) => getById(id),
        movies: () => getMovies(),
        movie: (_, {id}) => getMovieById(id)
    },
    Mutation:{
        addMovie: (_, {name, score}) => addMovie(name, score),
        deleteMovie: (_, {id}) => deleteMovie(id)
    }
};

export default resolvers
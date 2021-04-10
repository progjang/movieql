let movies = [
    {
      id: 0,
      name: "Star Wars - The new one",
      score: 1
    },
    {
      id: 1,
      name: "Avengers - The new one",
      score: 8
    },
    {
      id: 2,
      name: "The Godfather I",
      score: 99
    },
    {
      id: 3,
      name: "Logan",
      score: 2
    }
];

export const getMovies = () => movies;
export const addMovie = (name, score) => {
    const newMovie = {
        id: movies.length + 1,
        name,
        score
    }
    movies.push(newMovie);
    return newMovie;
}

export const getMovieById = (id) => {
    const filtered = movies.filter(movie=>movie.id === id);
    return filtered[0];
};
export const deleteMovie = (id) => {
    const cleaned = movies.filter(movie => movie.id !== id);
    if(movies.length > cleaned.length ){
        movies = cleaned
        return true;
    }
    else {
        return false;
    }
};

export const people = [
    {
        id: 1,
        name: "Nico",
        age: 18,
        sex: "female"
    },
    {
        id: 2,
        name: "Mico",
        age: 19,
        sex: "female"
    },
    {
        id:3,
        name: "Cico",
        age: 28,
        sex: "male"
    }
];

export const getById = id => {
    const filtered = people.filter(person => person.id === id)
    console.log()
    return filtered[0];
}
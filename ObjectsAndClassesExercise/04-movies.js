function solve(arr) {
    const movies = {};

    arr.forEach(command => {
        if (command.includes('addMovie')) {
            const movie = command.replace('addMovie ', '');

            movies[movie] = {name: movie};
        } else if (command.includes('directedBy')) {
            const comm = command.split(' directedBy ');
            const name = comm[0];
            const director = comm[1];

            if (movies[name]) {
                movies[name].director = director;
            }
        } else if (command.includes('onDate')) {
            const comm = command.split(' onDate ');
            const name = comm[0];
            const date = comm[1];

            if (movies[name]) {
                movies[name].date = date;
            }
        }
    });

    const filteredMovies = Object.values(movies).filter(movie => movie.name && movie.director && movie.date);

    filteredMovies.forEach(movie => console.log(JSON.stringify(movie)));
}

solve(
    [
        'addMovie Fast and Furious',
        'addMovie Godfather',
        'Inception directedBy Christopher Nolan',
        'Godfather directedBy Francis Ford Coppola',
        'Godfather onDate 29.07.2018',
        'Fast and Furious onDate 30.07.2018',
        'Batman onDate 01.08.2018',
        'Fast and Furious directedBy Rob Cohen'
    ]
)
// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  const result = array.map(e => e.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  const result = array.filter(films => films.director === director);
  console.log("EXERCICE 2 ->", result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.

// ---- función para calcular la media de TODOS los scores ----
function moviesAverage(array) {
  const result = Number((array.reduce((total, current) => total + current.score, 0) / array.length).toFixed(2));
  return result;
}

function moviesAverageOfDirector(array, director) {
  const directorMovies = getMoviesFromDirector(array, director); // aprovechamos la función que nos filtra por director
  const result = moviesAverage(directorMovies);  // enviamos el director filtrado a la función que hace la media
  console.log("EXERCICE 3 ->", result);
  return result;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  // mapeamos por titulo, ordenamos alfabéticamente y nos quedamos con los 20 primeros
  const result = array.map(e => e.title).sort().slice(0, 20);
  console.log("EXERCICE 4 ->", result);
  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  // nuevo array con slice. Ordenamos por año y si coincide (nos devolverá false al ser 0), lo ordena por título
  const result = array.slice().sort((a, b) => (a.year - b.year || a.title.localeCompare(b.title)));
  console.log("EXERCISE 5->", result)
  return result;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  // filtramos el array por los que tengan "score" (para no hacer media con valor vacío), y por género.
  // aprovechamos la función del ejercicio 3 que calcula la media, y le enviamos como parámetro el resultado del filter
  const result = moviesAverage(array.filter(e => e.score && e.genre.includes(genre)));
  console.log("EXERCISE 6->", result)
  return result;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  const result = array.map(movie => {
    // dividimos '3h 45min' por el espacio en blanco: 3h[0] 45min[1]
    // comprobamos con undefined si algún dato no existe y le asignamos 0
    // con parseInt convertimos los números del string en numbers y así poder hacer los cálculos
    const hours = movie.duration.split(' ')[0] === undefined ? 0 : parseInt(movie.duration.split(' ')[0]);
    const minutes = movie.duration.split(' ')[1] === undefined ? 0 : parseInt(movie.duration.split(' ')[1]);
    const duration = (hours * 60) + minutes;
    // retornamos el array completo reasignando el valor de 'duration'
    return { ...movie, duration: duration };
    // NOTA: con 'return { duration }' el test no da error, pero solo obtenemos un array de duraciones
  });
  console.log("EXERCISE 7->", result)
  return result;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}

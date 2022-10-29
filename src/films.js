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
  const result = array.map(e => e.title).sort().splice(0,20); 
  console.log("EXERCICE 4 ->", result);
  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear() {

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

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

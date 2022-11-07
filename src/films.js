const movies = require("./data");

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map(function(element){
   return `${element.director}`;
  })
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  const moviesFromDirector = array.filter(array => array.director == director);
return moviesFromDirector; 
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const moviesFromDirector = array.filter(array => array.director == director);
  const movieScore =  moviesFromDirector.map(function(element){
    return element.score;
   })
   let ui = 0 ;
   ui = movieScore.reduce(function(acc, val) { return acc + val; }, 0);
   ui = ui/movieScore.length ;
   let rounded = ui.toFixed(2);
   return parseFloat(rounded);
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let result = array.map(function(element){
    return `${element.title}`;
   })
   result.sort();
   return result.slice(0,20);

}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  res = [];
  array.sort(function(a, b){
     if (a.year == b.year){
        var nameA = a.title.toLowerCase(), nameB = b.title.toLowerCase();
        if (nameA < nameB)
         return -1;
        if (nameA > nameB)
          return 1;
        return 0;
    }
     else{return a.year - b.year}});
res= [...array];
  return res;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array,genre) {
  const moviesFromDirector = array.filter(array => array.genre == genre); 
  let fix = 0;
  const movieScore =  moviesFromDirector.map(function(element){
    if (element.score == ''){ fix += 1;} 
    return element.score;
   });
   let ui = 0 ;
   ui = movieScore.reduce(function(acc, val) { return acc + val; }, 0);
   ui = ui/ (movieScore.length - fix);
   fix = 0 ;
   var rounded = ui.toFixed(2);
   return parseFloat(rounded);
}


// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  const result = array.map(array => ({ 
  title: array.title,
  year: array.year,
  director: array.director,
  duration: array.duration,
  genre: array.genre,
  score: array.score}));;

 function getHours(dur){
  let index = 0;
  while(dur[index])
  {
    if (dur[index] == 'h'){
      return dur.slice(0,index);
    }
    if(index == dur.length)
    {
      let res = 0;
      return res;
    }
    index++;
  }
 }

 function hourToMin(number){
  let new_hours= parseFloat(number*60);
  return new_hours;
 }
 function getMinutes(dur){
  let index = dur.length;
  while(index>=0)
  {
    if (dur[index] == ' ' && dur[index + 1] != ' '){
      let res = dur.slice(index + 1, dur.length - 3);
      return parseInt(res);
    }
    if(index == 0)
    {
      let res = 0;
      return res;
    }
    index--;
  }
 }
  result.forEach(element => {
   let h = hourToMin(getHours(element.duration));
   let min = getMinutes(element.duration);
   let ui = 0 ;
   ui = h + min ;
   element.duration = ui;
  })
  return result;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array,year) {
    const moviesFromYear = array.filter(array => array.year == year);
    moviesFromYear.sort(function(a, b){
      return b.score - a.score;
     });
     let result = [...moviesFromYear]
     return result.slice(0,1);
    
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

var movies = [
  {
    name: "In Bruges",
    rating: 5,
    watched: true
  },
  {
    name: "Frozen",
    rating: 4.5,
    watched: false
  },
  {
    name: "Mad Max Fury Road",
    rating: 5,
    watched: true
  },
  {
    name: "Les Miserables",
    rating: 3.5,
    watched: false
  },
];

function buildString(movie) {
  var result = "You have ";

  if(movie.watched) {
    result += "seen ";
  } else {
    result += "not seen ";
  }

  result += "\"" + movie.name + "\" - ";
  result += movie.rating + " stars";
  return result;
};

movies.forEach(function(movie) {
  console.log(buildString(movie));
});

// THIS COMMENTED OUT SECTION IS WHAT I HAD ORIGINALLY, THE ABOVE IS WHAT THE INSTRUCTOR HAD
// function movieDB(arr) {

  // var movieResult;

  // for(var i = 0; i < arr.length; i++) {

  //   if(arr[i].watched === true) {
  //     movieResult = "You have seen ";
  //   } else {
  //     movieResult = "You have not seen ";
  //   }

  //   console.log(movieResult += '"' + arr[i].name + '"' + ' - ' + arr[i].rating + ' stars');
  // }
// }
// movieDB(movies);

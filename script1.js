// 1. a) Write a constructor for the class Movie, which takes a String representing the title of the movie, 
// a String representing the studio, and a String representing the rating as its arguments, and sets the 
// respective class properties to these values.
class Movie{
  constructor(title,studio,rating){
    this.title=title;
    this.studio=studio;
    this.rating=rating;
  }
 }

// b)The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided
class Movie {
  constructor(title, studio, rating){
      this.title = title;
      this.studio = studio;
      this.rating = "PG";
  }

//c)Write a method getPG
getPG(){
  return "The rating of movie is "+this.rating+".";
}
}

// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”,
// the studio “Eon Productions”, and the rating “PG­13”

var cini=new Movie("Casino Royale","Eon Productions","PG­13");


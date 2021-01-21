var giveMeAJoke = require('give-me-a-joke');
var rainbow = require('colors');
var category = "blonde";
giveMeAJoke.getRandomJokeOfTheDay (category, function(joke) {
    console.log(joke.rainbow);
});

let numberOfFilms;
function start(){
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
    while(numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
    }
}

start();

let genres = [];
function writeYourGenres(){
    for(let i = 0; i<3; i++) 
    genres[i] = prompt(`Ваш любимы жанр под номером ${i+1}`);
}

 writeYourGenres();
 for(let i = 1; i<=3; i++) console.log("Genre "+i+" "+genres[i]);

const myDB = {
    private: true
};

showDB(myDB.private);

function showDB(hidden){
    if(!hidden)
    console.log("Hello");
    if(hidden)
    console.log("Bye");
}

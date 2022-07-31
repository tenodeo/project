/*let numberOfFilms;
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

function done(){
    console.log("Я уже прошел этот курс!");
}
function learnJS(lang, callback){
    console.log(`Я учу ${lang}`);
    callback();
}

learnJS("JavaScript",done);


const options = {
    name: "test",
    width: 1024,
    height: 1024,
    colors: {
        border: "black",
        bg: "red"
    },
    makeTest: function(){
        console.log("Hello World!");
    }
};
console.log(Object.keys(options).length);
options.makeTest();

const {border,bg} = options.colors;
console.log(border+" "+bg);

for(let key in options){
    if(typeof(options[key] === "object")){
        for(let i in options[key]){
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        }
    }
    else 
    console.log(`Свойство ${key} имеет значение ${options[key]}`);
}


*/
const arr = [2,3,4,5,8];
//arr.pop();
//console.log(arr);


arr.forEach( function(item, i, arr){
    //console.log(`${i}: ${item} в массиве ${arr}`);
});

for(let value of arr){
    //console.log(value);
}

const str = prompt(" Question ");
const products = str.split(",");
console.log(products.join(" + "));
    
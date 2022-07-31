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



const obj = {
    a: 1,
    b: 2,
    c:{
        x: 3,
        y: 9
    }
};
const objCopy = copy(obj);
objCopy.a = 7;
// console.log(objCopy);
// console.log(obj);
function copy(obj){
    let objCopy = {};
    let key;
    for(key in obj){
        objCopy[key] = obj[key];
    }
    return objCopy;
}
const add = {
    q: 15,
    w: 22
};

const newAdd = Object.assign({},add);
newAdd.q = 99;
// console.log(add);
// console.log(newAdd);

//console.log(Object.assign(obj,add));

const video = ["youtube","rutube","retrica"],
      blogs = ["journal","Wall Street","Wordpress"],
      internet = [...video,blogs,"facebook","google"];
      console.log(internet); 


 
      const soldier = {
        health: 400,
        armor: 100
      };
      
      const john = Object.create(soldier);
      john.armor = 900;
      console.log(john.armor);*/


    
      const personalMovieDB = {
        count: 0,
        actor: {},
        movies: {},
        genres: [],
        private: true,
        showMyDB: function(hidden){
            if(!hidden) console.log(personalMovieDB);
            else console.log("У вас нет доступа");
        },
        
        start: function(){
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?");
            while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count) )
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?");
        },

        toggleVisibleMyDB: function(){
            if(personalMovieDB.private) personalMovieDB.private = false;
            else personalMovieDB.private = true;
        },

        writeYourGenres: function(){
            for(let i = 1; i<=3; i++) {
                personalMovieDB.genres[i-1] = prompt(`Ваш любимы жанр под номером ${i}`);
                  while(personalMovieDB.genres[i-1]=='' || personalMovieDB.genres[i-1] == null)
                    personalMovieDB.genres[i-1] = prompt(`Ваш любимы жанр под номером ${i}`);
            }
            personalMovieDB.genres.forEach((item,i) =>{
                console.log(`Любимый жанр под номером ${i+1} это ${personalMovieDB.genres[i]}`);
              });
           }
    };
    
         personalMovieDB.showMyDB(personalMovieDB.private);
         personalMovieDB.start();
         personalMovieDB.writeYourGenres();
         personalMovieDB.toggleVisibleMyDB();
         personalMovieDB.showMyDB(personalMovieDB.private);  
      
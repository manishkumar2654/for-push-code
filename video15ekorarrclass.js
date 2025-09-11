const marvel_hero = ["thor", "ironman", "spiderman"];
const dc_hero = ["superman", "flash", "batman"];

//marvel_hero.push(dc_hero);     //push method

//console.log(marvel_hero);
//console.log(marvel_hero[3][1]);


// const allhero = marvel_hero.concat(dc_hero);  //concat
// console.log(allhero);



const dotdotwalaall = [...marvel_hero, ...dc_hero]  //sprade oprater
//console.log(dotdotwalaall);




const anotherarr = [1,2,3, [4,5,6],7,[6,7,[8,9]]];


const real = anotherarr.flat(Infinity);

//console.log(real)


// console.log(Array.isArray(real));
// console.log(Array.from("mainsh"));

const score1 = 100
const score2 = 200
const score3 = 300

const scoreall = Array.of(score1, score2, score3);
//console.log(scoreall);

15 complet 





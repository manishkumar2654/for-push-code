const name = "manish";
const repoCount = 50 


console.log(name + repoCount + "kuchbhi");
// `` = batick string intuplaction

console.log(`hello my name is ${name}   and my repo is ${repoCount}`);

const gameName = new String("manish")
console.log(gameName);
console.log(gameName [0]);
console.log(gameName [1]);
console.log(gameName [2]);
console.log(gameName.__proto__);
console.log(gameName.length); //for total index number
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("s"));


const newString = gameName.substring(0, 4) //4 isse pehele wale aege
console.log(`new string is ${newString}`);

const anotherString = gameName.slice(-4, 6)
console.log(anotherString);


const newword = "  khuman  ";

console.log(newword);
console.log(newword.trim());


const url = "http://manish.com/manish%20kumar"

console.log(url.replace("%20", "pagal"));
console.log(url.includes("manish"));

const okya = "manis_kumar_kushwa";
console.log(okya.split("_"));










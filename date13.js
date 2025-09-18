//Date

const mydate = new Date()
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleString());

let myCreateDate = new Date("2023-01-14");
//console.log(myCreateDate.toLocaleDateString());
//console.log(myCreateDate.toLocaleString());


const mtTimeStamp = Date.now()

//console.log(Date.now());


// console.log(mtTimeStamp);
// console.log(myCreateDate.getTime());

const newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);


console.log(newDate.getDay());
`${newDate.getDay()} and the time`


newDate.toLocaleString("default", {
    weekday: "long"
})
//singelton
//Object.create


//obejct litral

const mysmy = Symbol("key1");

const jsUser = {
    name: "hitest",
    "full name": "Hitest chodray",
    [mysmy]: "myket1",
    age: 18,
    location: "jaipur",
    email: "manish@gmail.com",
    isLogin: false,
    lastLoginDays: ["monday", "Saturday"]
}


// console.log(jsUser);
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mysmy]);




jsUser.email = "hitesh@gogle.com"

//Object.freeze(jsUser);


jsUser.greeting = function() {
    console.log("hello js user");
    
}
jsUser.greetingTwo = function() {
    console.log(`hello js user, ${this.name}`);
    
}


console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

 
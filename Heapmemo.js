//stack and heap memory

// stack = Primitive
// Heap = Non primitive memory


//stack = copy of memory
//Heap = refrence orignal memory ka

//heap = use 


let userone = {
    name:"manish",
    email:"manish@gmail.com",
    upi:"123456"
}

// console.log(userone.upi);


let usertow = userone;

usertow.email = "rahulbhai@gmail.nom"

console.log(userone.email);
console.log(usertow.email);
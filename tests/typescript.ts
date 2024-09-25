/**
 * Typescript is a javascript superset, so all valid javascript code is also valid in Typescript code
 * In typescript declaring a variable is important add the data type for example number =4, however in JS is not necessary
 * npm i typescript --save-dev
 * In typescript, we have code readability, enhancement, best practices
 * tsc is the compiler for typescript files
 * 
 * 
 */

let message : string = "Hello";
message = "Great";

let age : number = 4;
let isActive : boolean = true;
let numbers : number[] = [1,2,3,4];

function add1(a: number, b:number) : number {
    return a+b;
}

add1(3,4);

let user: {name:string, age:number} = {name: "Bob", age:34}

const person = {
    name: 'Leonel',
    age: 1,
    hobbies: ['soccer', 'play'],
    role: [2, 'author']
}
console.log(person)

enum Role {ADMIN, READ_ONLY, AUTHOR}

const person1 = {
    name: 'Leonel',
    age: 1,
    hobbies: ['soccer', 'play'],
    role: Role.ADMIN
}

// Union Types
function combine(input1: number | string, input2: number | string){
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number'){
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combinedAges = combine(30,40)
console.log(combinedAges)

const combinedNames = combine('Max', 'Anne')
console.log(combinedNames)
// Literal Type
let value1: 'as-number' | 'as-string'
//Custom Types
type Combinable = number | string
// Function Types
function add2(n1: number, n2: number){
    return n1+n2;
}
let combineValues: (a: number, b: number) => number;
combineValues = add2
console.log(combineValues(8,8))

// Call Back
function addAndHandle(n1: number, n2: number, cb: (num:number)=> void){
    const result = n1 + n2
    cb(result)
}
addAndHandle(10,20, (result)=>{
    console.log(result)
})

//unknown types, never type
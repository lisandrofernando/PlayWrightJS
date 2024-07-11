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
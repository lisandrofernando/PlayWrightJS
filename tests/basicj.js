const flag = true  //Boolean

if(!flag){
    console.log("Satisfied")
}
else {
    console.log("Not Satisfied")
}

let i = 0

while(i<8){
    i++
    console.log(i)
}

let a = 0
do {
 a++
} while(a>10)
console.log("here"+ a)

for(let k=0; k<=10; k++){
    console.log(k + "s")
}

// from 1 to 10 give me commom multiple values of 2 and 5

console.log("************")
let n = 0;
for(let b=1; b<=100; b++){

    if(b%2 == 0 && b%5 == 0){
        console.log("multiple"+ b)
        n++;
        if(n==3){
            break
        }
    }
}

/**
 * Types in JS: number, number[] fot ts, string->text, boolean true or false, undefined, null, object for ts
 */
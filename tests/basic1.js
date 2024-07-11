   const Person = require('./basic3')

// Arrays in Js

//let marks = Array(6);

let marks = [20,40,60,80];
console.log(marks[2]); // 60
marks[3]=70;
console.log(marks);
console.log(marks.length);
marks.push(100); // Will add an element at the end of the array
marks.pop(); // will delete the last element from the array
marks.unshift(12); // A value to be added in the beginning
marks.indexOf(80); //which index
marks.includes(120); // a bullian method checking if 120 is present
subArray = marks.slice(2,5);
console.log(subArray);
// In order to iterate each and every element in the array 
let sum = 0;
for(let i=0; i<marks.length; i++){
    sum = sum + marks[i];
    console.log(sum)
    console.log(marks[i]);
}


// reduce, filter, map methods
// reduce will perfome and operation
console.log("***********")
 let Total= marks.reduce((sum,mark)=> sum+mark,0);
 console.log(Total)

 let scores = [12,13,14,15,16,17,18];
 let evenScores = [];

 for(let i =0; i<scores.length; i++){
        if(scores[i] % 2 ==0){
            evenScores.push(scores[i])
        }
 }
 console.log(evenScores);

 // In terms of condition we can use the filter method
 let newFilter = scores.filter(score=>score%2==0);
 console.log(newFilter);
 // map value will modify each value of the array to a new value
 let multFilter = newFilter.map(score=>score*3)
 console.log(multFilter)
 let red = multFilter.reduce((sum,mark)=> sum+mark,0);
 console.log(red)
 // This operations can be done in a single line
 let sumVal =  scores.filter(score=>score%2==0).map(score=>score*3).reduce((sum,mark)=> sum+mark,0);
 console.log(sumVal)
 //Sorting array
 let fruits = ["banana","pineapple","mango","apple"]
 console.log(fruits.sort())
 fruits.reverse()

 let numbers = [24,3,48,1,88]
 console.log(numbers.sort((a,b)=> a-b))

 let person = new Person("Chris", 12)
 console.log(person.fullIdentity())

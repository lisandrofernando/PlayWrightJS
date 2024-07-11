//Functions

function add(a,b){
   return a+b
}
let sum = add(2,3)
console.log(sum)

// Anonymous function
let sumOfIntegers = function(c,d){
    return c+d;
}

let sumOf= (c,d)=>{
    return c+d;
}
// Or 
let sumN= (c,d)=> c+d;

let day = 'tuesday '
console.log(day.length) //8
let subDay = day.slice(0,4)
console.log(subDay)
console.log(day[1])
let splitDay = day.split("s")
console.log(splitDay[1].trim())

let date = '23'
let nextDate = '27'

let diff = parseInt(nextDate) - parseInt(date)
console.log(diff)
diff.toString()

let newQuote = day + "is Funday day"
console.log(newQuote)
// let's understand where the caracter is present
let val = newQuote.indexOf("day")
console.log(val)

let count = 0
let vali = newQuote.indexOf("day")
while(vali!== -1){
    count++
    vali = newQuote.indexOf("day", vali+1)
}
console.log(count)
// Object are collection of properties
let person = {
    firstName: 'Lisandro',
    lastName: 'Fernando',
    fullName: function(){
        console.log(this.firstName + this.lastName)
    }
}
console.log(person.fullName())
console.log(person.lastName)
console.log(person['lastName'])
person.firstName = 'Lisandro Jr'
console.log(person.firstName)
person.gender = 'male'
person.age = 8
console.log(person)
//delete person.gender
console.log('gender' in person) // will return a boolean

for(let key in person){
    console.log(person[key])
}
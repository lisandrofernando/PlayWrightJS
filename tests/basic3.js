// Classes

  module.exports =  class Person{
    name= 'Leo';
    age = 1

    get Location(){
        return "canada"
    }

    constructor(name, age){
        this.name = name
        this.age =  age
    }
    fullIdentity(){
        console.log(this.name + this.age)
    }

}

// let person = new Person("Tim", 9)
// console.log(person.name)
// console.log(person.fullIdentity())
// console.log(person.location)
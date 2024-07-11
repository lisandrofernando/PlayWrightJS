// Inheritance is the main pillar in object orientation
// One class can inherit/aquire the properties, methods of another class
// The class which inherits the properties of other class is known as subclass(child class)
// The class whose properties are inherited is known as superclass

const Person = require('./basic3')

class Child extends Person {

    get location(){
        return "USA"
    }

    constructor(firstName, age){

        super(firstName, age)
    }

}

   let child =  new Child("Leo", 1)
   child.fullIdentity()
   console.log(child.location)
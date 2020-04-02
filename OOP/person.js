// new Blank is a constructor function such as new Person()

//Prototypal Inheritance
class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }

    getBio() {
        let bio = `${this.firstName}  is ${this.age}`

        this.likes.forEach((like) => {
        bio += ` ${this.firstName} likes ${like}.`
        })

        return bio
        }

    set fullName(fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

class Employee extends Person {
    constructor(firstName, lastName, age, position, likes) {
        super(firstName, lastName, age, likes)
        this.position = position
    }
    getBio() {
        return `${this.fullName} is a ${this.position}`
    }
    getYearsLeft() {
        return 65 - this.age
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, likes, grade) {
        super(firstName, lastName, age, likes)
        this.grade = grade
    }
    getBio() {
        // if (this.grade >= 70) {
        //     return `${this.firstName} has passed with flying colors scoring a ${this.grade}!`
        // } else {
        //     return `${this.firstName} has failed with a ${this.grade}.`
        // }
        const status = this.grade >= 70 ? 'passing' : 'failing'
        return `${this.firstName} is ${status} the class.`
    }
    updateGrade(points) {
        this.grade += points
        return `${points} points were added to grade!`
    }
}

const myPerson = new Employee('john', 'wilkos', 24, ['surfer'], 60)

myPerson.fullName = 'Clancey turner'
console.log(myPerson.getBio())
// const me = new Employee('Giovanni', 'Headley', 26, 'developer',['Gaming', 'Coding'])

// me.setName('Alexis Turner')
// console.log(me.getBio())
// console.log(me.getYearsLeft())

// const person2 = new Person('Clancey', 'Turner', 51)

// console.log(person2.getBio())
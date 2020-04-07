const createCounter = () => {
    let count = 0

    return {
        increment() {
            count++
        },
        decrement() {
            count--
        },
        get() {
            return count
        }
    }
}

const counter = createCounter()
counter.increment()
counter.decrement()
counter.decrement()
counter.count = 0
console.log(counter.get())

const createAdder = (a) => {
    return (b) => {
        return a + b
    }
}

const add = (a, b) => a + b
const add10 = createAdder(10)
console.log(add10(-2))
console.log(add10(20))
const add100 = createAdder(100)
console.log(add100(-90))

const createTipper = (tipPercent) => {
    return (bill) => {
        return tipPercent * bill
    }
}

const tip15 = createTipper(.15)
const tip20 = createTipper(.20)
const tip10 = createTipper(.10)
console.log(tip15(100))
console.log(tip20(100))
console.log(tip10(100))

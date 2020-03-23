// Primitive value: string, number, boolean, null, undefined

//Object: myObject --> Object.prototype --> null
// Array: myArray --> Array.prototype --> Object.prototype --> null
// Function: myFunc --> Function.prototype --> Object.prototype --> null
// String: myString --> String.prototype --> Object.prototype --> null
// Number: myNumber --> Number.prototype --> Object.prototype --> null
// Boolean: myBoolean --> Boolean.prototype --> Object.prototype -->

const product = 'computer'
console.log(product)

const otherProduct = new String('phone')
console.log(otherProduct)
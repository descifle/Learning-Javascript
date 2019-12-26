let myBook = {
	title: '1984',
	author: 'George Orwell',
	pageCount: 326
}

let otherBook = {
	title: 'A peoples history',
	author: 'Howard Zinn',
	pageCount: 723
}

let getSummary = function (book) {

	return {
		summmary: `${book.title} by ${book.author}`,
		pageCountSummary: `${book.title} is ${book.pageCount}  pages long`
	}
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)

// Challenge area
// Create a function that takes fahrenheit in - returns an object with all three


let getTemp = function (fahrenheit) {
	return {
		fahrenheit: `the fahrenheit temperature is ${fahrenheit}`,
		celsius: `the celsius temperature is ${(fahrenheit - 32) * 5 / 9}`,
		kelvin: `the kelvin temperature is ${(fahrenheit + 459.67) * 5 / 9}`
	}
}
console.log(getTemp(43))

let sentence = function(ender) {
	return {
		who: `john is ${ender}`,
		what:`He is also the leader of ${ender}`,
		where: `He is ${ender} that lives in Massachusetts`
	}
}

console.log(sentence('that one guy'))

let getMeasurement = function(ounces) {
	return {
		ounces: `${ounces} ozs equal to ${ounces} ozs`,
		pounds: `${ounces} ozs equal to ${16 / ounces} pds`,
		grams: `${ounces} ozs equal to ${ounces * 28.3495} grams`
	} 
}

console.log(getMeasurement(20))

let object = {
	top: 568,
	middle: 'cool kid',
	bottom: 50 * 2
}

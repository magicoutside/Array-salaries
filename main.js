let salaries = [1700, 2000, 1560, 2300, 1920, 1400]
let y = salaries.reduce(function (sum, el){
	return sum + el;
})
console.log(y)
//second way 
let sum = 0;
for (let i=0; i < salaries.length; i++){
sum += salaries[i];
}
console.log(sum)
//average
average = sum / salaries.length
console.log(average)
//max
let max = salaries[0];
for(let i=0; i < salaries.length; i++){
     if (salaries[i] >= max) {
           max = salaries [i];
     }
 }
console.log(max)
//min
let min = salaries[0];
for(let i=0; i < salaries.length; i++){
     if (salaries[i] <= min) {
           min = salaries [i];
     }
 }
 console.log(min)

// filter
var filter = (arr, condition) => {
	var result = [];
	for (let i = 0; i < arr.length; i++) {
	
		if (condition(arr[i])) {
			result.push(arr[i]);
		}
	}
	return result;
}; 

filter([1,2,3,4,5,6], (e) => e > 4)
// find
var find = (arr, element) => {
	var found = filter(arr, (e) => e == element);
	return found.length == 1 
		? found[0] 
		: null;
} 
// map
var map = (arr, transformation) => {
	var result= [];
	for (let i = 0; i < arr.length; i++) {
        result.push(transformation(arr[i]));
	}
	return result;
};
// reduce
let reduce = (arr, reducer, initialValue) => {
	
	let result = initialValue;

	for (let i = 0; i < arr.length; i++) {
	
		result = reducer(arr[i], result);

	}

	return result;

}
reduce([1,2,3,4], (el, acc) => el + acc, 0);

//function expected
var assertTrue = (expected, actual) => {
    if (expected != actual)
        throw `Expected ${expected}, but got ${actual}`;
};

var person = {
    name: 'Ivan',
    age: 13
};

assertTrue(person.name, 'Ivan');
assertTrue(person.age , 130);
console.log(person)

// assertEquals
var assertArraysEquals = (ar1, ar2) => {
    assertEquals(ar1.length, ar2.length);
	for (i = 0; i < ar1.length; i++) { 
		assertEquals(ar1[i], ar2[i]);
    }
}

assertArraysEquals([1,2], [1,2]);

var string = " ";
var assertObjectsEquals = {name: "Ivan", age: 13};
for (var property1 in assertObjectsEquals) {
	string = string + assertObjectsEquals[property1];
}
console.log(string)
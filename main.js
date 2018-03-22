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

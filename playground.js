/*\
cd - change dir
ls - list directory content
git clone - clone repository
cat -  provide content or type and size information for repository objects
rm - delete something
*/
var assertEquals = (expected, actual) => {
    if (expected != actual)
        throw `Expected ${expected}, but got ${actual}`;
};

var person = {
    name: 'Ivan',
    age: 13
};

assertEquals(person.name, 'Ivan');
assertEquals(person.age , 13);

assertEquals([1,2], [1,2]);

console.log(person)
console.log('Ok');
//Shift + Alt + F -- format code
var assertEquals = (expected, actual) => {
    if (expected != actual)
        throw `Expected ${expected}, but got ${actual}`;
};

var assertArraysEquals = (ar1, ar2) => {
    assertEquals(ar1.length, ar2.length);
    for (i = 0; i < ar1.length; i++) {
        assertEquals(ar1[i], ar2[i]);
    }
}

let text = "some text is written here";
let getWords = (str) => {
    let words = str.split(" ");
    for (let i = 0; i < words.length - 1; i++) {
        words[i] += " ";
        console.log(words[i]);
    }
    // console.log(words);
};


console.log(getWords(text));


// assertArraysEquals(getWords(text), ["some", "text", "is", "written", "here"]);

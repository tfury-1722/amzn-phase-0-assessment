// 1. Write your functions here

function line(array) {
    if (array.length === 0) {
        retrun`The line is currently empty.`
    }

    let sum = 0;
    let result = "";
    for (let i = 1; i < array.length + 1; i++) {

        result += `The line is currently: ${i}. ${array[sum++]} `;
        
    }
        return result;
}

function takeANumber(array, names) {
    let nextInLine = "";
    let count = 0;
    for (let i = 1; i < array.length + 1; i++) {

        nextInLine += console.log(`Welcome, ${array[count]}. You are number ${i} in line.`)
        count++;
    }
    return nextInLine;
}

// 2. Example Usage

const katzDeli = ['Ada', 'Johnny']

// takeANumber(katzDeli, "Ada") //=> Welcome, Ada. You are number 1 in line.
// takeANumber(katzDeli, "Grace") //=> Welcome, Grace. You are number 2 in line.
// takeANumber(katzDeli, "Kent") //=> Welcome, Kent. You are number 3 in line.

console.log(line(katzDeli)) //=> "The line is currently: 1. Ada 2. Grace 3. Kent"

// nowServing(katzDeli) //=> "Currently serving Ada."

// line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent"

// takeANumber(katzDeli, "Matz") //=> Welcome, Matz. You are number 3 in line.

// line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent 3. Matz"

// nowServing(katzDeli) //=> "Currently serving Grace."

// line(katzDeli) //=> "The line is currently: 1. Kent 2. Matz"
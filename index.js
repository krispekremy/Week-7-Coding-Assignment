// Question 1.

let ages = [3, 9, 23, 64, 2, 8, 28, 93];

//Here is where I've set my array called ages with the values listed in the question using the keyword let.

const subtractFirstAndLast = arr => {
    let firstItem = arr[0];
    let lastItem = arr[arr.length - 1];
    return lastItem - firstItem;
}

//Here I've created an arrow function called subtractFirstAndLast using the const keyword that takes an array, and using two variables (firstItem and lastItem), returns the difference of the firstItem from the lastItem. To access the first item in the array programmatically I've set it to arr[0] which should always pull the value of the first item in an array. And to programatically access the last item in the array, even if that value changes, I've used the arr.length - 1 which accesses the element in the index one less than the length, which is always the last value since indexes start at 0.

console.log('The subtracted value is ' + subtractFirstAndLast(ages));

//Above I tested my new function. It works!!

ages.push(69);
console.log('The subtracted value is ' + subtractFirstAndLast(ages));

//Here I've pushed a new item to the array to see if its dynamic, and it works!!

const agesSum = arr => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

//I dunno if this was necessary but I saw an opportunity to make an extra function here that used a for loop to iterate through the array and find the sum, and then below seperately make another function that finds the average. Maybe I thought that'd be more concise? I guess you can tell me!

const agesAverage = arr => {
    let sum = agesSum(arr);
    return sum / arr.length;
}

//Here I've made another arrow function that uses the above arrow function agesSum to find the average value of all the numbers in the array. Below you'll find me testing it out to make sure it works and that its dynamic and it does seem to work!!

console.log('The average age is ' + agesAverage(ages));
ages.push(55);
console.log('The average age is ' + agesAverage(ages));

//Question 2:

//Here I'm creating the array for names with all the names per the prompt. Then I'm creating a variable called nameSum and setting its value to 0.

let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
let nameSum = 0;

//This is my for loop that iterates through the irray and adds the total number of characters per string to nameSum and then stops when it gets to the end of the array.

for (let i = 0; i < names.length; i++) {
    nameSum += names[i].length;
}

//Now I'm creating a variable that divides the sum of all the characters with the total number of names in the array, and then printing to the console the average name length!

let averageNameLength = nameSum / names.length;
console.log(`The average name length is ` + averageNameLength);

//Now I'm creating a blank string called namesConcat, and then using a for loop I've iterated through the array and added all the values of the string into the blank string namesConcat with a space as well and then at the bottom just console.log'd out the variable namesConcat

let namesConcat = "";
for (let i = 0; i < names.length; i++) {
    namesConcat += names[i] + " ";
}
console.log(namesConcat);

//Question 3:

//In order to access the last element of any array, you'd use array[array.length - 1]. I described above why that works.

console.log(names[names.length - 1])

//Question 4:

//In order to access the first element of any array, you'd just do array[0]. This always works because javascript only supports 0 based indexing for arrays so the 0 element will always be the first element.

console.log(names[0])

//Question 5:

//First off I start by creating a blank array named nameLengths. Then I create my for loop that iterates through the array and adds the lengths of the each element to the array nameLengths. Then I printed the array nameLengths to the console!

let nameLengths = [];
for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
}
console.log(nameLengths);

//Question 6:

//First I created a variable named nameLengthsSum with the value of 0, and then wrote a for loop that iterates over the array as many times as the array is long, and using the addition assignment, added each value from the namesLength to the value of nameLengthsSum.
let nameLengthsSum = 0;
for (let i = 0; i < nameLengths.length; i++) {
    nameLengthsSum += nameLengths[i];
}
console.log("The sum of all the lengths of all the names added together is " + nameLengthsSum);

//Question 7:

//First I started by using the const keyword and naming my arrow function concatNTimes, and set it to take 2 parameters. Then inside that function I created an empty string called string, and then using a for loop, added whatever string value the first parameter was set to to the empty string however many times the n parameter was set to!

const concatNTimes = (word, n) => {
    let string = "";
    for (let i = 0; i < n; i++) {
        string += word;
    }
    return string;
}

console.log(concatNTimes("Hello", 3));

//Question 8:

//I made a single line arrow function called createFullName that takes two parameters, and then returns a tempelate literal of both of those two strings together  with a space between them!

const createFullName = (firstName, lastName) => `${firstName} ${lastName}`
console.log(createFullName("John", "Smith"))

//Question 9:

//First I made an arrow function using the const keyword called isGreaterThan100 that takes one parameter. Then I set a variable called sum to have the value of 0, and then made a for loop that iterates over the parameter array however long it is, and goes through adding the value of each element in the array to the sum variable. Then if that sum variable is greater than 100, it returns true, else it returns false.

const isGreaterThan100 = arr => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    if (sum > 100) {
        return true
    } else return false;
}

console.log(isGreaterThan100(ages));
console.log(isGreaterThan100(nameLengths));

//Question 10

//I accidentally already did this above when I was asked to write a for loop that iterates through an array that returns the average of all the elements. I'll call it again here with a new array that I'll create to demonstrate that it still works!

let q10ArrayTest1 = [420, 69, 666, 333, 1312, 777];
console.log(agesAverage(q10ArrayTest1))




// Question 11

//Below I used my already created agesAverage function, which in hindsight could probably be named something better and more appropriate than agesAverage because its doing more than just ages now, its just calculating the arrayAverage! Oh well. Anyway, I created a new arrow function using the const keyword that takes two parameters. Then using the agesAverage function I made on an earlier question, I checked to see if parameter1 array average is greater than parameter2 array average, then returning true if 

const twoArrayAverage = (array1, array2) => agesAverage(array1) > agesAverage(array2)

let q11ArrayTest1 = [4, 8, 15, 16, 23, 42];
let q11ArrayTest2 = [1, 2, 3, 4, 5, 6];
console.log(agesAverage(q11ArrayTest1))
console.log(agesAverage(q11ArrayTest2))
console.log(twoArrayAverage(q11ArrayTest1, q11ArrayTest2))
console.log(twoArrayAverage(q11ArrayTest2, q11ArrayTest1))

//Question 12

//Below I have created a single line arrow function called willBuyDrink that takes two parameters, and then returns a boolean value of true or false if both isHotOutside is strictly equal to true, and moneyInPocket is greater than 10.50.

const willBuyDrink = (isHotOutside, moneyInPocket) => isHotOutside === true && moneyInPocket > 10.50

console.log(willBuyDrink(true, 20))
console.log(willBuyDrink(false, 20))
console.log(willBuyDrink(true, 10))

//Question 13

//Here I have created a silly arrow function called isYourNameTooLong to be judgy and funny about how long your name is or isn't. It takes two parameters, and then depending on how long the string is in each inputted parameter, will return a silly judgement about how long or short your name is! I also figured out how to have it prompt the user for their first and last name so that it will tell you at the bottom of the console if your name is too long or too short! And then as I was testing it I figured out how to respond if they hit escape by putting in if they're strictly equal to null then respond accordingly!

const isYourNameTooLong = (firstName, lastName) => {
    if (firstName === null || lastName === null) {
        console.log(`You didn't put anything in for your name!`)
    } else if (firstName.length > 9) {
        console.log(`Your first name, ${firstName}, is pretty long. At least your last name isn't soo bad.`)
    } else if (firstName.length > 9 && lastName.length > 12) {
        console.log(`Both your first name, ${firstName}, and your last name, ${lastName}, are way too long man! How's anybody supposed to remember that!`)
    } else {
        console.log(`You've got a pretty normal lengthed name, ${firstName} ${lastName}!`)
    }
}

isYourNameTooLong("Mason", "Caldwell")
isYourNameTooLong("Montgomery", "Wolfeschlegelsteinhausenbergerdorff")
isYourNameTooLong(prompt('Whats your firstName?'), prompt('What is your lastName?'))
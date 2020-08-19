
function repeater(char, counter=0) {
  if (counter===5) return char
  counter ++
  return char+repeater(char, counter)
}


// To check if you've completed the challenge, uncomment these console.logs!
 console.log(repeater("g"));
// console.log(repeater('j'));

//----------------------------------------------------
//----------------------------------------------------
//----------------------------------------------------

function factorial(num) {
	if(num===0)return 1
  return num * factorial(num-1)
}

// To check if you've completed the challenge, uncomment these console.logs!
// console.log(factorial(4)); // -> 24
// console.log(factorial(6)); // -> 720
// console.log(factorial(0)); // -> 1

// let length = 0
// function getLength(array) {
//   if (array[0]===undefined) return length
//   length++
//   return getLength(array.slice(1), length);
// }
//--------------------------------vs-------------------

function getLength(array, length=0) {
  if (array[0]===undefined) return length
  length++
  return getLength(array.slice(1), length);
}

// To check if you've completed the challenge, uncomment these console.logs!
// console.log(getLength([1])); // -> 1
// console.log(getLength([1, 2])); // -> 2
// console.log(getLength([1, 2, 3, 4, 5])); // -> 5
// console.log(getLength([])); // -> 0

//----------------------------------------------------
//----------------------------------------------------
//----------------------------------------------------

function pow(base, exponent, result=1) {
	if (exponent===1) return base*exponent
  exponent--
  return base*pow(base, exponent)
}

// To check if you've completed the challenge, uncomment these console.logs!
// console.log(pow(2, 4)); // -> 16
// console.log(pow(3, 5)); // -> 243

//----------------------------------------------------
//----------------------------------------------------
//----------------------------------------------------

function flow(input, funcArray) {
  // console.log(funcArray.length)
  if (funcArray.length === 0) return input
  const output = funcArray[0](input)
  return flow(output, funcArray.slice(1))
}

// To check if you've completed the challenge, uncomment this code!
function multiplyBy2(num) { return num * 2; }
function add7(num) { return num + 7; }
function modulo4(num) { return num % 4; }
function subtract10(num) { return num - 10; }
const arrayOfFunctions = [multiplyBy2, add7, modulo4, subtract10];
console.log(flow(2, arrayOfFunctions)); // -> -7
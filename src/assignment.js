// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};
// ========================



function sumOfNumbers(arrayOfNumbers) {
  let sum =  0; 
  for(x of arrayOfNumbers){
    sum =  sum + x
    
  }return (`The sum of the numbers in the array is: ${sum}`);
}
assignment.sumOfNumbers = sumOfNumbers;



function countEvenNumbers(arrayOfNumbers) {
  let count = 0
  for (x of arrayOfNumbers){
    if(x % 2 === 0)
      count++
  }return (`The count of even numbers in the array is: ${count}`)   
}
assignment.countEvenNumbers = countEvenNumbers;



function celsiusToFahrenheit(arrayOfNumbers) {
  const newArray = [];
  for(x of arrayOfNumbers){
    x = Math.floor((x * 9)/5 + 32)
    
    newArray.push(x);
  }
    return newArray;
}
assignment.celsiusToFahrenheit = celsiusToFahrenheit;


// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================


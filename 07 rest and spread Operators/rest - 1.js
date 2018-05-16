// rest operator captures together or gather together a list to an array
// rest creates an array

// Function to sum nos. in an array
function addNumbers(numbers) {
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

addNumbers([1, 2, 3, 4, 5]); //15

// Now, to sum nos. not in an array like addNumbers(1,2,3,4,5); -- no. of nos. can be variable

function addNumbers(...numbers) {
  // now 'numbers' is an array with all arguments
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}
//unknown no. of arguments are put into array numbers using '...numbers'

addNumbers(1, 2, 3, 4, 5); //15
addNumbers(1, 2, 3, 4, 5, 6); //21

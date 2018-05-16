// Destructuring in arrays

const companies = ["Google", "Facebook", "Uber"];

// Pulling off individual elements - destructuring in arrays
// Pulling off properties from objects - destructuring in objects

const [name] = companies;
name; // 'Google'

//order is as the array
const [name1, name2, name3] = companies;
name1; // 'Google'
name2; //'Facebook'
name3; //'Uber'

//Reaching outside the bounds of array doesn't return error it gives undefined

//Using { } in arrays will pull of that property of the array which is inside { }

const { length } = companies; //3

// We can use destructuring with spread operator also
const [name, ...rest] = companies;
name; //'Google'
rest; // ['Facebook','Uber']

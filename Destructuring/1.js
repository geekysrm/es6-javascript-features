var expense = {
  type: "Business",
  amount: "45$ USD"
};

var type = expense.type;
var amount = expense.amount;

// Destructuring makes assigning out of objects easier removing duplicate code
// Using ES6

const { type } = expense;
const { amount } = expense;

// not creating object above
// a new variable type will be created referencing expense.type similar to line no. 6
// Same for amount

//Reducing code further:

const { type, amount } = expense;

type; // 'Business'
amount; //'45$ USD'

// Name of the variable must be identical to the property of the object we are trying to access/reference

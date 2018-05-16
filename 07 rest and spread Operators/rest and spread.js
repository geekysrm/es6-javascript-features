// We always need to get milk in our shopping
function validateShoppingList(...items) {
  //now items array has all arguments passed to this function
  if (items.indexOf("milk") < 0) {
    //if 'milk' is not taken
    return ["milk", ...items]; //add milk to list of items
  }
  return items;
}

validateShoppingList("oranges", "bread"); // ["milk","oranges","bread"]

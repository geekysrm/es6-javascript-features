// spread operator flattens an array
// spread is used with an array

// We need to display pallete of colors to user

const defaultColors = ["red", "green"];
const userFavoriteColors = ["orange", "yellow"];
//Now we want to join the both arrays into a single array

defaultColors.concat(userFavoriteColors); //["red", "green","orange", "yellow"]

//--------------------------------------------------------
// Using spread operator

const defaultColors = ["red", "green"];
const userFavoriteColors = ["orange", "yellow"];

[...defaultColors, ...userFavoriteColors]; //["red", "green","orange", "yellow"]

// Now lets say we also have
const fallColors = ["fire red", "fall orange"];

// To add this also, we can do
[...fallColors, ...defaultColors, ...userFavoriteColors]; //["fire red", "fall orange","red", "green","orange", "yellow"]

// To add another color to it
["blue", ...fallColors, ...defaultColors, ...userFavoriteColors]; //["blue","fire red", "fall orange","red", "green","orange", "yellow"]

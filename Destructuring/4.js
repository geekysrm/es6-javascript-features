const companies = [
  { name: "Google", location: "Mountain View" },
  { name: "Facebook", location: "Menlo Park" },
  { name: "Uber", location: "San Francisco" }
];

const location = companies[0].location; // 'Mountain View'

//--------------------------------------
// Using destructuring of arrays and objects:
const [{ location }] = companies;
location; //'Mountain View'


// 2nd example:

const Google = {
  locations = ['Mountain View','New York', 'London']
};

//To access 'Mountain View'
const { locations } = Google;
locations; //['Mountain View','New York', 'London']

const { locations: [ location ] } = Google; 
location; // 'Mountain View'


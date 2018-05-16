function signup(username, password) {
  //create new user
}

signup("SRM", "pswd");

// To add email, dob and city
function signup(username, password, email, dob, city) {
  //create new user
}

signup("SRM", "pswd", "srm@srm.com", "1/1/1997", "Rourkela");

// Lets assume calling of signup is done at a different area of codebase
// To call it, we have to refer back to the definition of signup and remember the order of arguments

//Solution:-

function signup({ password, username, email, dob, city }) {
  // Here order of arguments dont matter
  //create new user
}

const user = {
  username: "SRM",
  password: "pswd",
  email: "srm@srm.com",
  dob: "1/1/1997",
  city: "Rourkela"
};

// A complex example

// We need to make a func to create a user
function User(id) {
  this.id = id;
}

//We want a random id
function generateId() {
  return Math.random() * 999999;
}

// We want to add an admin user through a func
function createAdminUser(user) {
  user.admin = true;
  return user;
}

// For this to work:
createAdminUser(new User(generateId()));

//---------------------------------------------------
//Using default arguments
// We need to make a func to create a user
function User(id) {
  this.id = id;
}

//We want a random id
function generateId() {
  return Math.random() * 999999;
}

// We want to add an admin user through a func
function createAdminUser(user = new User(generateId())) {
  user.admin = true;
  return user;
}

createAdminUser(); // We get back a random user as admin

//or for an existing user
const user = new User(generateId());
createAdminUser(user);
// Existing user is promoted to admin role here

const MathLibrary = {
  calculateProduct(a, b) {
    return a * b;
  }
};

//Now to rename calculateProuct to multiply, we might break many apps built using calculateProduct if we directly rename it

//Solution 1
const MathLibrary = {
  calculateProduct(a, b) {
    return a * b;
  },
  multiply(a, b) {
    return a * b;
  }
};

// But we have duplicate logic above.
const MathLibrary = {
  calculateProduct(...rest) {
    //rest operator above
    console.log("Please use multiply method");
    return this.multiply(...rest); // spread operator
  },
  multiply(a, b) {
    return a * b;
  }
};

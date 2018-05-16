// Use case of destructuring arrays
const points = [[4, 5], [10, 1], [0, 40]];

//Transform it to:
[{ x: 4, y: 5 }, { x: 10, y: 1 }, { x: 0, y: 40 }];

points.map(([x, y]) => {
  //return { x: x, y: y }; OR
  return { x, y };
});
//Output: [{ x: 4, y: 5 }, { x: 10, y: 1 }, { x: 0, y: 40 }];

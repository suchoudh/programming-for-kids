// sort the list in ascending order
//   [1,4,2,3]
// returns:
//   [1,2,3,4]
function sort(x) {
  // x.sort() mutates the array itsef
  // so we will copy it and sort it
  // after that
  let r = [];
  for (let v of x) {
    r.push(v);
  }

  r.sort();

  return r;
}

console.log(JSON.stringify(sort([1, 1, 2, 3, 3, 4, 1, 2, 7, 9])));

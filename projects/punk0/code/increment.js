// increment the elements of a list
//   [1,2,3,4]
// returns:
//   [2,1,2,3]
function increment(x) {
  let r = [];

  for (let i = 0; i < x.length; i++) {
    let v = x[i]
    if (i == 0) {
      v++;
    }
    r.push(v);        
  }

  return r;
}

console.log(JSON.stringify(increment([1, 1, 2, 3, 3, 4, 1, 2, 7, 1])));

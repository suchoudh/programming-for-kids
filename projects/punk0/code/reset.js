// Note: the reset() card can be played
// on top of any card.

// create a new list
// returns:
//   [0,0,0,0]
function reset() {
  let r = [];

  for (let i = 0; i < 4; i++) {
    r.push(0);
  }

  return r;
}

console.log(JSON.stringify(reset()));

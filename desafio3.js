// inverter lista, sem usar métodos já implementados como por exemplo(reverse, map)

function revertOriginal(...params) {
  let newArray = [];
  for (let index = params.length - 1; index >= 0; index--) {
    newArray.push(params[index]);
  }
  return newArray;
}
function recursiveInvert(vector) {
  console.log(vector)
  return vector.length > 1 ? [vector.pop()].concat(recursiveInvert(vector)) : vector.pop()
}
// console.log(revertOriginal(true, false, false));
// console.log(revertOriginal("Oh", "Hi", "Mark"));

console.log(recursiveInvert([true, false, false]))

function Chunk(number) {
  if (number === 1) {
    return 'Chunk'
  } else {
    return "chunk-" + Chunk(number - 1)
  }
}
console.log(Chunk(3));

// function not(number) {
//   let str = "";
//   for (let x = 0; x < number; x++) {
//     str += "chunk-";
//   }
//   return str;
// }

// console.log(not(5));

// Contador Recursivo

function Contador(min, max) {
  console.log(min)
  if (min < max) {
    Contador(++min, max)
  }
}
// Decrement
function decrement(max, min) {
  console.log(max)
  if (max > min) {
    decrement(--max, min)
  }
}
Contador(1,10)
decrement(10, 1)

function Chunk(number) {
  if (number === 1) {
    return "Chunk";
  } else {
    return "Chunk-" + Chunk(number - 1);
  }
}

console.log(Chunk(3));

// contador

function contador(min, max) {
  console.log(min);
  if (min < max) {
    contador(++min, max);
  }
}
contador(1, 10);

function decrement(max, min) {
  console.log(max);
  if (max > min) {
    decrement(--max, min);
  }
}
decrement(5, 2);

// media

function media(...numbers) {
  let sum = 0;
  numbers.forEach((number) => {
    sum += number;
  });
  return sum / numbers.length;
}

function mediaRefatored(...numbers) {
  let total = numbers.reduce((acc, currentValue)=> {
    return acc + currentValue
  }, 0)
  return total / numbers.length
}
console.log(media(5, 5, 5))
console.log(mediaRefatored(5, 5, 5))


function palindroma(str) {
  let strReverse = str.split('').reverse().join('')
  return str === strReverse ? 'Palindromo' : 'Não é palindromo'
}
console.log(palindroma('dwqqwdq'))
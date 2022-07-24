// forma rápida
function average(...numbers) {
  let sum = 0;

  numbers.forEach((number) => {
    sum += num;
  });

  const avg = sum / numbers.length;

  return avg;
}

// Forma refatorada

function calcMedia(...numbers) {
  const sum = numbers.reduce((acc, currentValue) => acc + currentValue, 0);
  return sum / numbers.length;
}

// Casos de testes
console.log(calcMedia(1, 2, 3, 4, 5));
console.log(calcMedia(25, 75));

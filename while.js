let number = 1;

while (number <= 100) {
  let isDivisibleBy3 = number % 3 === 0;
  let isDivisibleBy5 = number % 5 === 0;

  if (!isDivisibleBy3 && !isDivisibleBy5) {
    console.log(number);
  }

  number++;
}

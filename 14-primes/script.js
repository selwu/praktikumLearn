/*
 * Задача 14: «Простые числа»
 *
 * Напишите функцию primes(n). Её единственный аргумент — целое число n.
 * Функция должна возвращать массив простых чисел от 2 до n.
 *
 */

function primes(num) {
  const result = [];

  const isPrime = function (n) {
    if (n < 2) return false;
    for (let i = 2; i < n; i += 1) {
      if (n % i === 0) return false;
    }
    return true;
  };

  for (let i = 0; i <= num; i += 1) {
    if (isPrime(i)) result.push(i);
  }
  return result;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(primes(6)); // [2, 3, 5]
console.log(primes(17)); // [2, 3, 5, 7, 11, 13, 17]

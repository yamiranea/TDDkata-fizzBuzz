class FizzBuzz {
  validate_primes_3_5(number) {
    if (number % 15 === 0) {
      return "FizzBuzz";
    } else if (number % 3 === 0) {
      return "Fizz";
    } else if (number % 5 === 0) {
      return "Buzz";
    } else {
      return null;
    }
  }
}

module.exports = FizzBuzz;

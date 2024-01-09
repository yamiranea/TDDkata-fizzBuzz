const { expect } = require("@jest/globals");
const FizzBuzz = require("../FizzBuzz");

describe("FizzBuzz tests", () => {
  let fizzBuzz;

  beforeEach(() => {
    fizzBuzz = new FizzBuzz();
  });

  test("return Fizz when number is divisible by 3", () => {
    expect(fizzBuzz.validate_primes_3_5(3)).toBe("Fizz");
  });

  test("return Buzz when number is divisible by 5", () => {
    expect(fizzBuzz.validate_primes_3_5(5)).toBe("Buzz");
  });

  test("return FizzBuzz when number is divisible by both 3 and 5", () => {
    expect(fizzBuzz.validate_primes_3_5(15)).toBe("FizzBuzz");
  });
});

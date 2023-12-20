const { expect } = require("@jest/globals");
const FizzBuzz = require("../FizzBuzz");

describe("test that validates 3 and 5 multiples", () => {
  test("test return Fizz when number could be divided by 3", () => {
    const number = 3;
    const expectedResponse = "Fizz";
    const fizz = new FizzBuzz();

    const receivedResponse = fizz.validate_primes_3_5(number);

    expect(receivedResponse).toBe(expectedResponse);
  });

  test("test return Buzz when number could be divided by 5", () => {
    const number = 5;
    const expectedResponse = "Buzz";
    const buzz = new FizzBuzz();

    const receivedResponse = buzz.validate_primes_3_5(number);

    expect(receivedResponse).toBe(expectedResponse);
  });

  test("test return FizzBuzz when number could be divided by 3 and 5", () => {
    const number = 15;
    const expectedResponse = "FizzBuzz";
    const fizzBuzz = new FizzBuzz();

    const receivedResponse = fizzBuzz.validate_primes_3_5(number);

    expect(receivedResponse).toBe(expectedResponse);
  });
});

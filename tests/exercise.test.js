const excercise = require("../exercise1");
describe("fizzBuzz", () => {
  it("should return exception if type of input is not a number", () => {
    const args = ["anything", true, null, ""];
    args.forEach((arg) =>
      expect(() => {
        excercise.fizzBuzz(arg);
      }).toThrow()
    );
  });
  it("should return FizzBuzz if input is %3 and %5", () => {
    const result = excercise.fizzBuzz(15);
    expect(result).toBe("FizzBuzz");
  });
  it("should return Fizz if input is %3", () => {
    const result = excercise.fizzBuzz(6);
    expect(result).toBe("Fizz");
  });

  it("should return Buzz if input is %5", () => {
    const result = excercise.fizzBuzz(10);
    expect(result).toBe("Buzz");
  });
  it("should return input if neither any", () => {
    const result = excercise.fizzBuzz(11);
    expect(result).toBe(11);
  });
});

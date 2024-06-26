const lib = require("../lib");

describe("absolute", () => {
  it("should return positive number if input is positive ", () => {
    const result = lib.absolute(1);
    expect(result).toBe(1);
  });
  it("should return positive number if input is negative ", () => {
    const result = lib.absolute(-1);
    expect(result).toBe(1);
  });

  it("should return 0 if input is 0 ", () => {
    const result = lib.absolute(0);
    expect(result).toBe(0);
  });
});

describe("greet", () => {
  it("returns the greeting with the name", () => {
    const result = lib.greet("Taimoor");
    //expect(result).toBe("Welcome Taimoor");
    //expect(result).toMatch(/Taimoor/g);
    expect(result).toContain("Taimoor");
  });
});

describe("Get currenties", () => {
  it("should have an arrya of currencies", () => {
    const result = lib.getCurrencies();
    //expect(result).toBeDefined();
    //expect(result).not.toBeNull();
    expect(result[0]).toBe("USD");
    expect(result[1]).toBe("AUD");
    expect(result[2]).toBe("EUR");

    expect(result).toContain("USD", "AUD", "EUR");

    expect(result.length).toBe(3);

    // Proper way
    expect(result).toEqual(expect.arrayContaining(["USD", "AUD", "EUR"]));
  });
});

// test("array contains objects with specified properties", () => {
//   const result = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "Charlie", age: 35 },
//   ];
//   expect(result).toEqual(
//     expect.arrayContaining([
//       expect.objectContaining({ name: "Alice" }),
//       expect.objectContaining({ name: "Charlie" }),
//     ])
//   ); // Passes
// });

describe("getProduct", () => {
  it("should return the product with the given id", () => {
    const result = lib.getProduct(1);
    //expect(result).toEqual({ id: 1, price: 10 });
    expect(result).toMatchObject({ id: 1, price: 10 });
    expect(result).toEqual(expect.objectContaining({ id: 1 }));
    expect(result).toHaveProperty("id", 1);
  });
});

//toBe()  --> Match References(Primitive)
//toEqual() --> Match References (Array, Object)

describe("registerUser", () => {
  it("should throw an exception if passsed value is falsy", () => {
    const args = [null, "", 0, undefined, false];
    args.forEach((arg) => {
      expect(() => {
        lib.registerUser(arg);
      }).toThrow();
    });
  });

  it("should give the user object if username is passed", () => {
    const result = lib.registerUser("Taimoor");
    expect(result).toHaveProperty("username", "Taimoor");
    expect(result).toMatchObject({ username: "Taimoor" });
    expect(result.id).toBeGreaterThan(0);
  });
});

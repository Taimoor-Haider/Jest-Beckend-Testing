const db = require("../db");
const lib = require("../lib");
const mail = require("../mail");
describe("applyDiscount", () => {
  it("Should add points through mock function and apply discount if points > 10", () => {
    // Mock the db.getCustomerSync method
    jest.spyOn(db, "getCustomerSync").mockImplementation((customerId) => {
      console.log("Fake reading customer from db");
      return { id: customerId, points: 20 };
    });

    const order = { customerId: 1, totalPrice: 10 };
    lib.applyDiscount(order);
    expect(order.totalPrice).toBe(9);

    // Restore the original method
    db.getCustomerSync.mockRestore();
  });
});

// describe("notifyCustomer", () => {
//   it("should notify customer using email", () => {
//     jest.spyOn(db, "getCustomerSync").mockImplementation((customerId) => {
//       return { id: customerId };
//     });
//     let isSend = false;
//     jest.spyOn(mail, "send").mockImplementation((to, message) => {
//       isSend = true;
//     });
//     const order = { customerId: 1 };
//     lib.notifyCustomer(order);
//     expect(isSend).toBe(true);
//     db.getCustomerSync.mockRestore();
//     mail.send.mockRestore();
//   });
// });

describe("notifyCustomer", () => {
  it("should notify customer using email", () => {
    db.getCustomerSync = jest.fn().mockReturnValue({ email: "a" });
    //   jest.spyOn(db, "customerInfoSync").mockImplementation((customerId) => {
    //     return { id: customerId };
    //   });

    mail.send = jest.fn();
    // let isSend = false;
    // jest.spyOn(mail, "send").mockImplementation((to, message) => {
    //   isSend = true;
    // });
    const order = { customerId: 1 };
    lib.notifyCustomer(order);
    //expect(mail.send).toHaveBeenCalledWith("a", "...");
    expect(mail.send).toHaveBeenCalled();
    expect(mail.send.mock.calls[0][0]).toBe("a");
    expect(mail.send.mock.calls[0][1]).toMatch(/order/);
    //   expect(isSend).toBe(true);
    //   db.getCustomerSync.mockRestore();
    //   mail.send.mockRestore();
  });
});

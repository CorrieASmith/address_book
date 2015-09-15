describe("Contact", function() {
  it("Creates a new contact with the given specifications", function() {
    var testContact= new Contact("Sally", "Clapsaddle");
    expect(testContact.firstName).to.equal("Sally");
    expect(testContact.lastName).to.equal("Clapsaddle");
    expect(testContact.addresses).to.eql([]);
  });

  it("adds the fullName method to all contacts", function() {
    var testContact = new Contact("Bart","Simpson");
    expect(testContact.fullName()).to.equal("Bart Simpson");

  });
});

describe("Address", function () {
  it("creates a new address with the given specifications", function () {
    var testAddress = new Address("123 Main St", "Test City", "Test State");
    expect(testAddress.street).to.equal("123 Main St");
    expect(testAddress.city).to.equal("Test City");
    expect(testAddress.state).to.equal("Test State");
  });

  it("adds the fullAddress method to all address", function () {
    var testAddress = new Address("123 Main St", "Test City", "Test State");
    expect(testAddress.fullAddress()).to.equal("123 Main St, Test City, Test State");
  });
});

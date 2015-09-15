describe("Contact", function() {
  it("Creates a new contact with the given specifications", function() {
    var testContact= new Contact("Sally", "Clapsaddle");
    expect(testContact.firstName).to.equal("Sally");
    expect(testContact.lastName).to.equal("Clapsaddle");
    expect(testContact.addresses).to.eql([]);
  });
});

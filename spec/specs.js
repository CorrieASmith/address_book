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

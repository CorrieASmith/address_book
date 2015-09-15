function Contact(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.addresses = [];
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
};


function Address(street, city, state) {
  this.street = street;
  this.city = city;
  this.state = state;
}

Address.prototype.fullAddress = function() {
  return this.street + ", " + this.city + ", " + this.state;
}





$(function() {
  $("#add-address").click(function() {
    $(".new-address").append('<div class="new-address">' +
    '<div class="form-group">' +
    '<input type="text" placeholder="Address" class="form-control address"' +
    '</div>' +

    '<div class="form-group">' +
    '<input type="text" placeholder="City" class="form-control city"' +
    '</div>' +

    '<div class="form-group">' +
    '<input type="text" placeholder="State" class="form-control state"' +
    '</div>' +

    '<div class="form-group">' +
    '<input type="text" placeholder="Zip" class="form-control zip"' +
    '</div>' +
    '</div>');
  });


  $("form#new_address").submit(function(event) {
    event.preventDefault();
    var inputtedFirstName = $("input#firstName").val();
    var inputtedLastName = $("input#lastName").val();
    var newContact = new Contact(inputtedFirstName, inputtedLastName);

    $(".new-address").each(function() {
      var inputtedAddress = $(this).find("input.address").val();
      var inputtedCity = $(this).find("input.city").val();
      var inputtedState = $(this).find("input.state").val();
      var inputtedZip = parseInt($(this).find("input.zip").val());

      newAddress = { address: inputtedAddress, city: inputtedCity, state: inputtedState, zip: inputtedZip };
      newContact.addresses.push(newAddress);

    });

  $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
    $("#result").show();

  $(".contact").last().click(function() {
    $("#show-contact").show();

    $("#show-contact h2").text(newContact.firstName);
    $(".first-name").text(newContact.firstName);
    $(".last-name").text(newContact.lastName);

    $("ul#addresses").text("");
    newContact.addresses.forEach(function(address) {
      $("ul#addresses").append("<li>" + address.address + ", " + address.city + ", " + address.state + ", " + address.zip + "</li>");
    });
  });

  $("input#firstName").val("");
  $("input#lastName").val("");
  $("input.address").val("");
  $("input.city").val("");
  $("input.state").val("");
  $("input.zip").val("");


  });
});

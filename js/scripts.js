$(function() {
  $("#add-address").click(function() {
    $("#new-address").append('<div id="new-address">' +
    '<div class="form-group">' +
    '<input type="text" placeholder="Address" class="form-control" id="address">' +
    '</div>' +

    '<div class="form-group">' +
    '<input type="text" placeholder="City" class="form-control" id="city">' +
    '</div>' +

    '<div class="form-group">' +
    '<input type="text" placeholder="State" class="form-control" id="state">' +
    '</div>' +

    '<div class="form-group">' +
    '<input type="text" placeholder="Zip" class="form-control" id="zip">' +
    '</div>' +
    '</div>');
  });


  $("form#new_address").submit(function(event) {
    event.preventDefault();
    var inputtedFirstName = $("input#firstName").val();
    var inputtedLastName = $("input#lastName").val();
    var newContact = { firstName: inputtedFirstName, lastName: inputtedLastName, addresses: [] };

    $(".new-address").each(function() {
      var inputtedAddress = $(this).find("input.address").val();
      var inputtedCity = $(this).find("input.city").val();
      var inputtedState = $(this).find("input.state").val();
      var inputtedZip = parseInt($(this).find$("input.zip").val());

      newAddress = { address: inputtedAddress, city: inputtedCity, state: inputtedState, zip: inputtedZip };
      newContact.addresses.push(newAddress);

    });

  $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + "</span></li");
    $("#result").show();
  });

  $(".contact").last().click(function() {
    $("#show-contact").show();

    $("#show-contact 2").text(newContact.firstName);
    $(".firstName").text(newContact.firstName);
    $(".lastName").text(newContact.lastName);

    $("ul#addresses").text("");
    newContact.addresses.forEach(function(address) {
      $("ul#addresses").append("<li>" + address.street + ", " + address.city + ", " +       address.state + ", " + address.zip +"</li>");
    });
  });

  $("input#firstName").val("");
  $("input#lastName").val("");
  $("input#address").val("");
  $("input#city").val("");
  $("input#state").val("");
  $("input#zip").val("");


});

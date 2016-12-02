var customerName = "Someone";
var price = 10;
var quality = 2;
var totalPrice = price * quality;

var customerElement = document.getElementById("customer-name");
customerElement.textContent = customerName;
var tshirtPrice = document.getElementById("tshirt-price");
tshirtPrice.textContent = totalPrice;
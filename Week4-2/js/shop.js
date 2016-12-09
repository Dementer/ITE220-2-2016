/*
var customerName = "Someone";
var prices = 10;
var quantity = 2;
//var totalPrice = prices * quantity;
var prices = [10, 10, 199, 159];
var priceCut = 25;
var totalPriceCut = (1 - (priceCut * 0.01));


var totalPrice = (prices[0] + prices[1] + prices[2] + prices[3]) * totalPriceCut;

var customerElement = document.getElementById("customer-name");
customerElement.textContent = customerName;
var totalPriceElement = document.getElementById("total-price");
totalPriceElement.textContent = totalPrice;
var priceCutElement = document.getElementById("price-cut");
priceCutElement.textContent = priceCut + "% off";

var products = [
	"Brooklyn T-Shirt White", 
	"Brooklyn T-Shirt Black", 
	"Apple Watch", 
	"Android Phone"
];

var productsText = "";
var productsElement = document.getElementById("product-list");

productsText += "<li class='list-group-item'><span class='badge'>$"+ prices[0]+"</span>" + products[0]+ "</li>";
productsText += "<li class='list-group-item'><span class='badge'>$"+ prices[1]+"</span>" + products[1]+ "</li>";
productsText += "<li class='list-group-item'><span class='badge'>$"+ prices[2]+"</span>" + products[2]+ "</li>";
productsText += "<li class='list-group-item'><span class='badge'>$"+ prices[3]+"</span>" + products[3]+ "</li>";

productsElement.innerHTML = productsText;

//---------------------------------------------------------------------------
var date = new Date();
var n = date.getHours();

if (n >= 6 && n <= 11) {
	daytime = "Good morning";
}else if (n >= 12 && n <= 18) {
	daytime = "Good Afternoon";
}else if (n >= 19 && n <= 23) {
	daytime = "Good Evening";
}else {
	daytime = "Good Sometime";
}
var greeting = document.getElementById("day-time");
greeting.textContent = daytime + ", ";
*/
var shop = {
	customerName: "That Shit",
	totalPrice: 0,
	products: [
		"Brooklyn T-Shirt White",
		"Brooklyn T-Shirt Black",
		"Apple Watch",
		"Android Phone"
	],
	prices: [10, 10, 199, 159],
	priceCut: 25,

	displayCustomerName: function() {
		var customerElement = document.getElementById("customer-name");
		customerElement.textContent = this.customerName;
	},

	displayProductList: function() {
		var productsText = "";
		var productsElement = document.getElementById("product-list");

		productsText += "<li class='list-group-item'><span class='badge'>$"+ this.prices[0]+"</span>" + this.products[0]+ "</li>";
		productsText += "<li class='list-group-item'><span class='badge'>$"+ this.prices[1]+"</span>" + this.products[1]+ "</li>";
		productsText += "<li class='list-group-item'><span class='badge'>$"+ this.prices[2]+"</span>" + this.products[2]+ "</li>";
		productsText += "<li class='list-group-item'><span class='badge'>$"+ this.prices[3]+"</span>" + this.products[3]+ "</li>";
	
		productsElement.innerHTML = productsText;
	},


	calculateTotalPrice: function() {
		var totalPriceCut = (1 - (priceCut * 0.01));
		return (this.prices[0] +this.prices[1] +this.prices[2] +this.prices[3]) * totalPriceCut;
	},	

	displayTotalPrice: function() {
		this.totalPrice = this.calculateTotalPrice();
		var totalPriceElement = document.getElementById("total-price");
		totalPriceElement.textContent = this.totalPrice;
	},

	displayPriceCut: function(){
		var priceCutElement = document.getElementById("price-cut");
		priceCutElement.textContent = this.priceCut + "% off";
	}	

	getGreeting: function(){
		var date = new Date();
		var n = date.getHours();

		if (n >= 6 && n <= 11) {
			this.daytime = "Good morning";
		}else if (n >= 12 && n <= 18) {
			this.daytime = "Good Afternoon";
		}else if (n >= 19 && n <= 23) {
			this.daytime = "Good Evening";
		}else {
			this.daytime = "Good Sometime";
		}
		return(this.daytime);
	},

	displayGreeting: function(){
		this.daytime = this.getGreeting();
		var greeting = document.getElementById("day-time");
		greeting.textContent = this.daytime + ", ";
	}
}

shop.displayCustomerName();
shop.displayProductList();
shop.displayPriceCut();
shop.displayTotalPrice();
shop.displayGreeting();
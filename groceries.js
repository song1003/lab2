var products = [
	{
		name: "brocoli",
		lactose_intolerant: false,
		nut_allergies: false,
		organic_products: true,
		nonorganic_products: false,
		price: 2.11
	},
	{
		name: "egg",
		lactose_intolerant: false,
		nut_allergies: false,
		organic_products: false,
		nonorganic_products: true,
		price: 2.99
	},
	{
		name: "ice cream",
		lactose_intolerant: true,
		nut_allergies: false,
		organic_products: false,
		nonorganic_products: true,
		price: 2.35
	},
	{
		name: "cabbage",
		lactose_intolerant: false,
		nut_allergies: false,
		organic_products: true,
		nonorganic_products: false,
		price: 3.99
	},
	{
		name: "milk",
		lactose_intolerant: true,
		nut_allergies: false,
		organic_products: false,
		nonorganic_products: true,
		price: 4.00
	},
	{
		name: "lettuce",
		lactose_intolerant: false,
		nut_allergies: false,
		organic_products: true,
		nonorganic_products: false,
		price: 2.89
	},
	{
		name: "seasoning",
		lactose_intolerant: true,
		nut_allergies: false,
		organic_products: false,
		nonorganic_products: true,
		price: 6.00
	},
	{
		name: "peanut oil",
		lactose_intolerant: false,
		nut_allergies: true,
		organic_products: false,
		nonorganic_products: true,
		price: 12.99
	},
	{
		name: "salmon",
		lactose_intolerant: false,
		nut_allergies: false,
		organic_products: false,
		nonorganic_products: true,
		price: 14.00
	},
	{
		name: "ginger",
		lactose_intolerant: false,
		nut_allergies: false,
		organic_products: false,
		nonorganic_products: true,
		price: 3.99
	}
];

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "lactose-intolerant") && (prods[i].lactose_intolerant == false)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "nut allergies") && (prods[i].nut_allergies == false)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "organic products") && (prods[i].organic_products == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "non-organic products") && (prods[i].nonorganic_products == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "none"){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}

function restrictListPrices(prods, restriction) {
	let prices = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "lactose-intolerant") && (prods[i].lactose_intolerant == false)){
			prices.push(prods[i].price);
		}
		else if ((restriction == "nut allergies") && (prods[i].nut_allergies == false)){
			prices.push(prods[i].price);
		}
		else if ((restriction == "organic products") && (prods[i].organic_products == true)){
			prices.push(prods[i].price);
		}
		else if ((restriction == "non-organic products") && (prods[i].nonorganic_products == true)){
			prices.push(prods[i].price);
		}
		else if (restriction == "none"){
			prices.push(prods[i].price);
		}
	}
	return prices;
}

function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
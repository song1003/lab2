
function openInfo(evt, buttonName){

	div2 = document.getElementsByClassName("div2");
	for (var i = 0; i < div2.length; i++) {
		div2[i].style.display = "none";
	}

	buttons = document.getElementsByClassName("buttons");
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].className = buttons[i].className.replace(" active","");
	}

	document.getElementById(buttonName).style.display = "block";
	evt.currentTarget.className += " active";
}

function populateListProductChoices(slct1, slct2) {
    var s1 = document.getElementById(slct1);
    var s2 = document.getElementById(slct2);
	
    s2.innerHTML = "";
		
    var optionArray = restrictListProducts(products, s1.value);
    var optionArray2 = restrictListPrices(products, s1.value);
		
	for (i = 0; i < optionArray.length; i++) {
			
		var productName = optionArray[i];
		var productPrice = optionArray2[i];
		
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName;
		s2.appendChild(checkbox);
		
		var label = document.createElement('label')
		label.htmlFor = productName;
		label.appendChild(document.createTextNode(productName));
		s2.appendChild(label);
		s2.appendChild(document.createElement("br")); 

		var para = document.createElement("strong");
		para.innerHTML = "Price : ";
		para.appendChild(document.createTextNode(productPrice.toString()));
		s2.appendChild(para);
		
		s2.appendChild(document.createElement("br"));    
	}
}
	

function selectedItems(){
	
	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	var para = document.createElement("P");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createElement("br"));
			para.appendChild(document.createTextNode("Price : "));
			for (var j = 0; j < products.length; j++) {
				if(ele[i].value==(products[j].name)){
					para.appendChild(document.createTextNode(products[j].price.toString()));
				}
			}
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}
		
	c.appendChild(para);
	var para2 = document.createElement("strong");
	para2.appendChild(document.createTextNode("Total Price is " + getTotalPrice(chosenProducts)));
	c.appendChild(para2);
		
}
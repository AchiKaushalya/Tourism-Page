let addingItemsButton = document.getElementsByClassName("addToCart");
let inCart = document.getElementsByTagName("table")[0];
let qtyField  = document.getElementsByClassName("proQty");
let removeButton = document.getElementsByClassName("removeItem");




function addProds(event){
	let inItems = document.createElement("tr");
	let btn = event.target;
	let parentB = btn.parentElement;
	let prodImg = parentB.children[0].src;
	let productDesc = parentB.children[1].textContent.replace(/ |\n/g,'');
	let productP = parentB.children[2].innerText;
	
	inItems.innerHTML = 
				`
				<td><img class="proImg" src=${prodImg} width="100" height="100" alt=""></td>
				<td class="proDesc" id="desc">${productDesc}</td>
				<td class="proPrice" id="price">${productP}</td>
				<td><input type="number" class="proQty" id="qty" min="1" style="width: 30px"></td> 
				<td class="totalPrice" id="totalAmount">${productP}</td>
				<td><button class="removeItem" type="button">Remove</button></td>
				`
				
	inCart.append(inItems);
		
	
    for(let i = 0; i < qtyField.length; i++){
        qtyField[i].value = 1
        qtyField[i].addEventListener('change', totalCost)
                
    }


    for(let i = 0; i < removeButton.length; i++){
        removeButton[i].addEventListener('click', removeProduct)
    }

    allTotal()
	
	}




form.addEventListener("submit", function(event) {	

event.preventDefault();

let country = document.getElementById("country").value;
let firstName = document.getElementById("fName").value;
let lastName = document.getElementById("lName").value;
let streetAddress = document.getElementById("address").value;
let city = document.getElementById("city").value;
let zipCode = document.getElementById("zipCode").value;
let emailAddress = document.getElementById("email").value;
let visa = document.getElementById("visa");
let masterCard = document.getElementById("master");
let americanExp = document.getElementById("amExp");
let cardName = document.getElementById("cardName").value;
let cardNumber = document.getElementById("cardNo").value;
let expiryDate = document.getElementById("expDate").value;
let cvv = document.getElementById("securityNo").value;
// let productsSelected = productsTable.children[1].value;
// console.log(productsSelected)
	
	if ((country == "") || (firstName = "") || (lastName == "") || (streetAddress == "") || (city == "") || (zipCode == "") || (emailAddress == "") || (cardName == "") || (cardNumber == "") || (expiryDate == "") || (cvv == "")) {
		alert("Please fill  all the fields.");
		return false;
	} else if ((visa.checked == false) && (masterCard.checked == false) && (americanExp.checked == false)){
		alert("Please select the card ");
		return false;
	} else if (cardNo.value.length!==16) {
		alert("The card number you have entered is invalid!");
		return false;
	} 

pushValues();


function pushValues(){
	
let details = [];
let fname = document.getElementById("fName").value;
let lname = document.getElementById("lName").value;
let email = document.getElementById("email").value;
let qty = document.getElementById("qty").value;
let desc = document.getElementById("desc").value;
let price = document.getElementById("price").value;
let totalPrice = document.getElementById("totalAmount").value;
let obj = { firstname : fname,
			lastname : lname,
			email: email,
			qty	: qty,
			desc : desc,
			price : price }

details.push(obj);
console.log(desc)
document.getElementById("itemsInvoice").style.visibility = "visible";

for (i=0; i<details.length; i++){		
		document.getElementById("itemsInvoice").innerHTML = "Details of your order" + "<br><br>" + "Name: " + details[i].firstname + "&nbsp;" + details[i].lastname + "<br>" +"Email: " + details[i].email + "<br><br>" + "Invoice Details"+ "<hr>" +"Quantity: " + details[i].qty + "<br><br>" +"Product: " + details[i].desc + "<br><br>" +"Price: " + details[i].price + "<br><br>" +"Total Bill: " + details[i].totalPrice;
	}
	
}

})


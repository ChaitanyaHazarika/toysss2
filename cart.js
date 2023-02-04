import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js'
import { getDatabase, ref, child, get } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";


const firebaseConfig = {
	apiKey: "AIzaSyCkDL6o5zIadycIqJoROr48mqUB3EkZab0",
	authDomain: "mikutoys-d47de.firebaseapp.com",
	databaseURL: "https://mikutoys-d47de-default-rtdb.firebaseio.com",
	projectId: "mikutoys-d47de",
	storageBucket: "mikutoys-d47de.appspot.com",
	messagingSenderId: "453934610008",
	appId: "1:453934610008:web:092e9ad475e2c675773c2d"
};
//firebase variables
const app = initializeApp(firebaseConfig)
var childKey = ""



//variables
var item1 = ""
var item2 = ""
var item3 = ""
var item4 = ""
var item5 = ""
var item1_price = 0
var item2_price = 0
var item3_price = 0
var item4_price = 0
var item5_price = 0
var display_item1 = ""
var display_item2 = ""
var display_item3 = ""
var display_item4 = ""
var display_item5 = ""
var items = JSON.parse(localStorage.getItem('items'))
var total = 0
var class1= ""
var class2= ""
var class3= ""
var class4= ""
var class5= ""
const length = items.length;
var counter= 0




console.log(items)

//MESSAGE
if (items.length == 0) {
	document.getElementById('msg').style.display = 'block'
} else {
	document.getElementById('msg').style.display = 'none'
}

if (length == 1) {
	counter = 1
}else if(length == 2){
	counter = 2
}else if(length == 3){
	counter = 3
}else if(length == 4){
	counter = 4
}else if(length == 5){
	counter = 5
}


if (counter== 1) {
	//ONE ITEM
	item1 = items[0]
	counter=1
	class1= item1.split(" ").join("")
	console.log(class1);

	const dbRef = ref(getDatabase());
	get(child(dbRef, "/Items/" + item1)).then((snapshot) => {
		if (snapshot.exists()) {
			console.log(snapshot.val());
			childKey = snapshot.val()
			item1_price = childKey.price
			console.log(item1_price);
			total= item1_price
		} else {
			console.log("No data available");
		}
	}).catch((error) => {
		console.error(error);
	});



	//display
	setTimeout(() => {
		display_item1 = "<div class=" + class1 + "><img src='D' class='item_img'><h4 class='item_name'>" + item1 + "</h4><br><br><h5 id='price' class='price'>₹		" + item1_price + "</h5><hr class='line'><br><button class='btn btn-danger' id='remove'>Remove All Items</button><br><h3>Total : ₹ "+ total+"</h3><button class= 'btn btn-success' id='checkout'>Checkout</button></div>"
		document.getElementById('items').innerHTML += display_item1
		document.getElementById("remove").addEventListener('click', ()=>{
			document.getElementById("items").innerHTML= "<center><h2 id='msg'>CART IS EMPTY</h2></center>"
			items= []
			localStorage.setItem("items", JSON.stringify(items))
		})
	
	}, 1300);

	



} else if (counter == 2) {
	counter=2
	//TWO ITEMS
	item1 = items[0]
	class1= item1.split(" ").join("")
	console.log(class1);

	class2= item2.split(" ").join("")
	console.log(class1);
	item2 = items[1]

	const dbRef = ref(getDatabase());
	get(child(dbRef, "/Items/" + item1)).then((snapshot) => {
		if (snapshot.exists()) {
			console.log(snapshot.val());
			childKey = snapshot.val()
			item1_price = childKey.price
			total= item1_price
			console.log(item1_price);
		} else {
			console.log("No data available");
		}
	}).catch((error) => {
		console.error(error);
	});
	get(child(dbRef, "/Items/" + item2)).then((snapshot) => {
		if (snapshot.exists()) {
			console.log(snapshot.val());
			childKey = snapshot.val()
			item2_price = childKey.price
			total= item1_price+item2_price
			console.log(item1_price);
		} else {
			console.log("No data available");
		}
	}).catch((error) => {
		console.error(error);
	});


	//display
	setTimeout(() => {
		display_item1 = "<div class=" + class1 + "><img src='D' class='item_img'><h4 class='item_name'>" + item1 + "</h4><br><br><h5 id='price' class='price'>₹		" + item1_price + "</h5><br><hr class='line'></div>"
		display_item2 = "<div class=" + class2 + "><img src='D' class='item_img'><h4 class='item_name'>" + item2 + "</h4><br><br><h5 id='price' class='price'>₹		" + item2_price + "</h5><br><hr class='line'><br><button class='btn btn-danger' id='remove'>Remove All Items</button></div><br><h3>Total : ₹ "+ total+"</h3><button class= 'btn btn-success' id='checkout'>Checkout</button></div>"
		document.getElementById('items').innerHTML += display_item1
		document.getElementById('items').innerHTML += display_item2
		document.getElementById("remove").addEventListener('click', ()=>{
			document.getElementById("items").innerHTML= "<center><h2 id='msg'>CART IS EMPTY</h2></center>"
			items= []
			localStorage.setItem("items", JSON.stringify(items))
		})
	
	}, 1300);





} else if (counter == 3) {
	counter=3
	//THREE ITEMS
	item1 = items[0]
	item2 = items[1]
	item3 = items[2]

	class1= item1.split(" ").join("")
	console.log(class1);
	class2= item2.split(" ").join("")
	console.log(class1);
	class3= item3.split(" ").join("")
	console.log(class1);
	const dbRef = ref(getDatabase());
	get(child(dbRef, "/Items/" + item1)).then((snapshot) => {
		if (snapshot.exists()) {
			console.log(snapshot.val());
			childKey = snapshot.val()
			item1_price = childKey.price
			total= item1_price
			console.log(item1_price);
		} else {
			console.log("No data available");
		}
	}).catch((error) => {
		console.error(error);
	});
	get(child(dbRef, "/Items/" + item2)).then((snapshot) => {
		if (snapshot.exists()) {
			console.log(snapshot.val());
			childKey = snapshot.val()
			item2_price = childKey.price
			total= item1_price+ item2_price
			console.log(item1_price);
		} else {
			console.log("No data available");
		}
	}).catch((error) => {
		console.error(error);
	});
	get(child(dbRef, "/Items/" + item3)).then((snapshot) => {
		if (snapshot.exists()) {
			console.log(snapshot.val());
			childKey = snapshot.val()
			item3_price = childKey.price
			total= item1_price+item2_price+item3_price
			console.log(item1_price);
		} else {
			console.log("No data available");
		}
	}).catch((error) => {
		console.error(error);
	});


	//display
	setTimeout(() => {
		display_item1 = "<div class=" + class1 + "><img src='D' class='item_img'><h4 class='item_name'>" + item1 + "</h4><br><br><h5 id='price' class='price'>₹		" + item1_price + "</h5><br><hr class='line'></div>"
		display_item2 = "<div class=" + class2 + "><img src='D' class='item_img'><h4 class='item_name'>" + item2 + "</h4><br><br><h5 id='price' class='price'>₹		" + item2_price + "</h5><br><hr class='line'></div>"
		display_item3 = "<div class=" + class3 + "><img src='D' class='item_img'><h4 class='item_name'>" + item3 + "</h4><br><br><h5 id='price' class='price'>₹		" + item3_price + "</h5><br><hr class='line'><br><button class='btn btn-danger' id='remove'>Remove All Items</button></div><br><h3>Total : ₹ "+ total+"</h3><button class= 'btn btn-success' id='checkout'>Checkout</button></div>"
		document.getElementById('items').innerHTML += display_item1
		document.getElementById('items').innerHTML += display_item2
		document.getElementById('items').innerHTML += display_item3
		document.getElementById("remove").addEventListener('click', ()=>{
			document.getElementById("items").innerHTML= "<center><h2 id='msg'>CART IS EMPTY</h2></center>"
			items= []
			localStorage.setItem("items", JSON.stringify(items))
		})
	}, 1300);




} else if (counter == 4) {
	//FOUR ITEMS
	item1 = items[0]
	item2 = items[1]
	item3 = items[2]
	item4 = items[3]

	class1= item1.split(" ").join("")
	console.log(class1);
	class2= item2.split(" ").join("")
	console.log(class1);
	class3= item3.split(" ").join("")
	console.log(class1);
	class4= item4.split(" ").join("")
	console.log(class1);






	const dbRef = ref(getDatabase());
	get(child(dbRef, "/Items/" + item1)).then((snapshot) => {
		if (snapshot.exists()) {
			console.log(snapshot.val());
			childKey = snapshot.val()
			item1_price = childKey.price
			
			console.log(item1_price);
		} else {
			console.log("No data available");
		}
	}).catch((error) => {
		console.error(error);
	});
	get(child(dbRef, "/Items/" + item2)).then((snapshot) => {
		if (snapshot.exists()) {
			console.log(snapshot.val());
			childKey = snapshot.val()
			item2_price = childKey.price
			console.log(item1_price);
		} else {
			console.log("No data available");
		}
	}).catch((error) => {
		console.error(error);
	});
	get(child(dbRef, "/Items/" + item3)).then((snapshot) => {
		if (snapshot.exists()) {
			console.log(snapshot.val());
			childKey = snapshot.val()
			item3_price = childKey.price
			console.log(item1_price);
		} else {
			console.log("No data available");
		}
	}).catch((error) => {
		console.error(error);
	});
	get(child(dbRef, "/Items/" + item4)).then((snapshot) => {
		if (snapshot.exists()) {
			console.log(snapshot.val());
			childKey = snapshot.val()
			item4_price = childKey.price
			total= item1_price+item2_price+item3_price+item4_price
			console.log(item1_price);
		} else {
			console.log("No data available");
		}
	}).catch((error) => {
		console.error(error);
	});
	


	//display
	setTimeout(() => {
		display_item1 = "<div class=" + class1 + "><img src='D' class='item_img'><h4 class='item_name'>" + item1 + "</h4><br><br><h5 id='price' class='price'>₹		" + item1_price + "</h5><br><hr class='line'></div>"
		display_item2 = "<div class=" +class2 + "><img src='D' class='item_img'><h4 class='item_name'>" + item2 + "</h4><br><br><h5 id='price' class='price'>₹		" + item2_price + "</h5><br><hr class='line'></div>"
		display_item3 = "<div class=" +class3 + "><img src='D' class='item_img'><h4 class='item_name'>" + item3 + "</h4><br><br><h5 id='price' class='price'>₹		" + item3_price + "</h5><br><hr class='line'></div>"
		display_item4 = "<div class=" +class4 + "><img src='D' class='item_img'><h4 class='item_name'>" + item4 + "</h4><br><br><h5 id='price' class='price'>₹		" + item4_price + "</h5><br><hr class='line'><br><button class='btn btn-danger' id='remove'>Remove All Items</button></div><br><h3>Total : ₹ "+ total+"</h3><button class= 'btn btn-success' id='checkout'>Checkout</button></div>"
		document.getElementById('items').innerHTML += display_item1
		document.getElementById('items').innerHTML += display_item2
		document.getElementById('items').innerHTML += display_item3
		document.getElementById('items').innerHTML += display_item4
		document.getElementById("remove").addEventListener('click', ()=>{
			document.getElementById("items").innerHTML= "<center><h2 id='msg'>CART IS EMPTY</h2></center>"
			items= []
			localStorage.setItem("items", JSON.stringify(items))
		})
	}, 1300);


} else if (counter == 5) {
	//FIVE ITEMS
	item1 = items[0]
	item2 = items[1]
	item3 = items[2]
	item4 = items[3]
	item5 = items[4]

	class1= item1.split(" ").join("")
	console.log(class1);
	class2= item2.split(" ").join("")
	console.log(class1);
	class3= item3.split(" ").join("")
	console.log(class1);
	class4= item4.split(" ").join("")
	console.log(class1);
	class5= item5.split(" ").join("")
	console.log(class1);

	
	const dbRef = ref(getDatabase());
	get(child(dbRef, "/Items/" + item1)).then((snapshot) => {
		if (snapshot.exists()) {
		
			childKey = snapshot.val()
			item1_price = childKey.price
		} else {
			console.log("No data available");
		}
	}).catch((error) => {
		console.error(error);
	});
	get(child(dbRef, "/Items/" + item2)).then((snapshot) => {
		if (snapshot.exists()) {
		
			childKey = snapshot.val()
			item2_price = childKey.price
		} else {
			console.log("No data available");
		}
	}).catch((error) => {
		console.error(error);
	});
	get(child(dbRef, "/Items/" + item3)).then((snapshot) => {
		if (snapshot.exists()) {
		
			childKey = snapshot.val()
			item3_price = childKey.price
		} else {
			console.log("No data available");
		}
	}).catch((error) => {
		console.error(error);
	});
	get(child(dbRef, "/Items/" + item4)).then((snapshot) => {
		if (snapshot.exists()) {
		
			childKey = snapshot.val()
			item4_price = childKey.price
		} else {
			console.log("No data available");
		}
	}).catch((error) => {
		console.error(error);
	});
	get(child(dbRef, "/Items/" + item5)).then((snapshot) => {
		if (snapshot.exists()) {
		
			childKey = snapshot.val()
			item5_price = childKey.price
			total= item1_price+item2_price+item3_price+item4_price+item5_price
		} else {
			console.log("No data available");
		}
	}).catch((error) => {
		console.error(error);
	});
		


	//display
	setTimeout(() => {
		display_item1 = "<div class=" + class1 + "><img src='D' class='item_img'><h4 class='item_name'>" + item1 + "</h4><br><br><h5 id='price' class='price'>₹		" + item1_price + "</h5><br><hr class='line'></div>"
		display_item2 = "<div class=" + class2 + "><img src='D' class='item_img'><h4 class='item_name'>" + item2 + "</h4><br><br><h5 id='price' class='price'>₹		" + item2_price + "</h5><br><hr class='line'></div>"
		display_item3 = "<div class=" + class3 + "><img src='D' class='item_img'><h4 class='item_name'>" + item3 + "</h4><br><br><h5 id='price' class='price'>₹		" + item3_price + "</h5><br><hr class='line'></div>"
		display_item4 = "<div class=" + class4 + "><img src='D' class='item_img'><h4 class='item_name'>" + item4 + "</h4><br><br><h5 id='price' class='price'>₹		" + item4_price + "</h5><br><hr class='line'></div>"
		display_item5 = "<div class=" + class5 + "><img src='D' class='item_img'><h4 class='item_name'>" + item5 + "</h4><br><br><h5 id='price' class='price'>₹		" + item5_price + "</h5><br><hr class='line'><br><button class='btn btn-danger' id= 'remove'>Remove All Items</button></div><br><h3>Total : ₹ "+ total+"</h3><button class= 'btn btn-success' id='checkout'>Checkout</button></div>"
		document.getElementById('items').innerHTML += display_item1
		document.getElementById('items').innerHTML += display_item2
		document.getElementById('items').innerHTML += display_item3
		document.getElementById('items').innerHTML += display_item4
		document.getElementById('items').innerHTML += display_item5
		document.getElementById("remove").addEventListener('click', ()=>{
			document.getElementById("items").innerHTML= "<center><h2 id='msg'>CART IS EMPTY</h2></center>"
			items= []
			localStorage.setItem("items", JSON.stringify(items))
		})
	}, 1300);

}



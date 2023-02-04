setTimeout(() => {
  localStorage.setItem('items', "")
}, 2000);


if (localStorage.getItem("LoginStatus")== "Yes") {
  window.location= "home.html"
}
//variables
var username= ""
var password= ""

//firebase
const firebaseConfig = {
    apiKey: "AIzaSyCkDL6o5zIadycIqJoROr48mqUB3EkZab0",
    authDomain: "mikutoys-d47de.firebaseapp.com",
    databaseURL: "https://mikutoys-d47de-default-rtdb.firebaseio.com",
    projectId: "mikutoys-d47de",
    storageBucket: "mikutoys-d47de.appspot.com",
    messagingSenderId: "453934610008",
    appId: "1:453934610008:web:092e9ad475e2c675773c2d"
}
firebase.initializeApp(firebaseConfig);


//signup
function signUp() {
    window.location = "phoneverification.html"
}

//login
function login() {
  if (document.getElementById("username").value == "") {
    alert("Please enter a name")
  }else if (document.getElementById("password").value == "") {
    alert("Please enter the password")
  }else{
    username= document.getElementById("username").value 
    password= document.getElementById("password").value
    firebase.database().ref("/Users/"+ username).on('value', function(snapshot){
        childKey= snapshot.val()
        console.log(childKey);
        if (childKey== null) {
            document.getElementById("note").innerHTML= "User Not Found"
        }else{
          password= childKey.passcode
          console.log(password);
          if (password == document.getElementById("password").value) {
            window.location= "home.html"
            phone_number = childKey.number
            localStorage.setItem("username", document.getElementById("username").value)
            localStorage.setItem("password", password)
            localStorage.setItem("phonenumber", phone_number)
            localStorage.setItem("LoginStatus","Yes")
          }else{
            document.getElementById("note").innerHTML= "Incorrect password"
          }
        }
        

    })
}
  }

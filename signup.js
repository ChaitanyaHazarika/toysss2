if (localStorage.getItem('LoginStatus') == "No") {
    window.location= "index.html"
}elseif()
var phone_number = ""
var password = ""
var username = ""

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
function signup() {
    //matching password
    if (document.getElementById("createpassword").value == document.getElementById("Confirmpassword").value) {
        password= document.getElementById("createpassword").value;
        //other criteria
        if (password.length >= 4 && document.getElementById("name").value != "" && document.getElementById("createpassword").value != "") {
            //setting value
            phone_number = localStorage.getItem("phonenumber")
            password = document.getElementById("createpassword").value;
            username = document.getElementById("name").value;
            //making account 
            firebase.database().ref("/Users/" + username).update({
                number: phone_number,
                passcode: password,
                name: username
            });
            //local storage
            localStorage.setItem("LoginStatus", "Yes")
            localStorage.setItem("username", username)
            localStorage.setItem("phonenumber", phone_number)
            setTimeout(() => {
                window.location= "home.html"
            }, 2000);
            
           
        }else{
            //alert1
            alert("Please fill out all the informatation NOTE: Password should be more than 4 characters")
        }
       

    } else {
        //alert2
        alert("Password does not match")
    }
    
}
   

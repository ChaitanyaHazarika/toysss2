
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
export default login()
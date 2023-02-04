const firebaseConfig = {
    apiKey: "AIzaSyCkYXalvbqKLUqEz1AFotTRknUttT8CLyQ",
    authDomain: "test-e7297.firebaseapp.com",
    databaseURL: "https://test-e7297-default-rtdb.firebaseio.com",
    projectId: "test-e7297",
    storageBucket: "test-e7297.appspot.com",
    messagingSenderId: "782292109622",
    appId: "1:782292109622:web:dc8e1d2b2af94d445f4b97"
};
firebase.initializeApp(firebaseConfig);
function send() {
    var value = document.getElementById('text').value;
    firebase.database().ref('/Idk').child('Idk2').update({
        Website: value
    });
}
function get() {
    getData()
}
function getData() {
    firebase.database().ref("/Idk/Idk2").on('value', function (snapshot) {
        console.log(snapshot);
            childKey=snapshot.val()
            console.log(childKey);
            document.getElementById("result").innerHTML= childKey['Website']
    });
}

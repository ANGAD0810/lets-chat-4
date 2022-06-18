const firebaseConfig = {
   apiKey: "AIzaSyDkzafFLCQ0NIk_Or16mxndqXrKeBsAtms",
  authDomain: "kwitter-7b7dd.firebaseapp.com",
  databaseURL: "https://kwitter-7b7dd-default-rtdb.firebaseio.com",
  projectId: "kwitter-7b7dd",
  storageBucket: "kwitter-7b7dd.appspot.com",
  messagingSenderId: "496782276563",
  appId: "1:496782276563:web:b837407d6f424d2df92126"
};
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
                        //End code
                  }
            });
      });
}
getData();

function signout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
 document.getElementById("msg").value = "";
}
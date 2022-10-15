var firebaseConfig = {
      apiKey: "AIzaSyDvePNKs1oKF3Hgm8LAngb0dtEzC8CFAF8",
      authDomain: "lets-chat-app-dc785.firebaseapp.com",
      databaseURL: "https://lets-chat-app-dc785-default-rtdb.firebaseio.com",
      projectId: "lets-chat-app-dc785",
      storageBucket: "lets-chat-app-dc785.appspot.com",
      messagingSenderId: "59879045763",
      appId: "1:59879045763:web:9f02dd56ef82e5584179b6",
    };

    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_input");

    document.getElementById("user_name").innerHTML = "Welcome to Lets Chat " + user_name +"!";


    function getData() {
        firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
        //Start code
        console.log("Room name - " + Room_names);
        row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" +Room_names+"</div><hr>";
        //End code
        });});}
  getData();
  
  function addroom()
  {
        room_name = document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
              purpose : "adding room name"
        });
  
        localStorage.setItem("room_name", room_name);
  
        window.location = "chat_page.html";
  
    }
  
  function redirectToRoomName(name)
  {
        console.log(name);
        localStorage.setItem("room_name", name);
        window.location = "chat_page.html";
  }
  
  function logout()
  {
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");
  
        window.location="index.html";
  }
 
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
  room_name = localStorage.getItem("room_name");


  function send()
  {
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name : user_name,
          message : msg,
          like : 0
    });
    document.getElementById("msg").value="";
  }


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
names=message_data['name'];
message=message_data['message'];
like=message_data['like'];

name_with_tag = "<h4>"+ names +"<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>"+ message +"</h4>";
like_button = "<button class='btn btn-warning' id="+firebase_message_id+"value = " + like + "onlcick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like:" + like +"</span></button><hr>";

row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;

//End code
    } });  }); }
getData();

function updateLike(message_id)
{
    console.log
}
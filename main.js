function addUser() {
    user_input = document.getElementById("user_input").value;

    localStorage.setItem("user_input", user_input);

    window.location="chat_room.html";
}
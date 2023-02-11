// Create function addUser()
function add_User() {
  // Get value of user by id player1_name_input and player2_name_input
  player1_name = document.getElementById("player1_name_input").value;
  player2_name = document.getElementById("player2_name_input").value;

  // Store these values locally
  Store.setItem("player1_name")
  Store.setItem("player2_name");

  //Assign "game_page.html" to window.location
  window.location = "game_login.html";
}


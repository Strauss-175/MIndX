const username = document.getElementById("username");
const password = document.getElementById("password");
const save = document.getElementById("save");
const failed = document.getElementById("failed");
const confirm = document.getElementById("confirm");
const data = ["abc@gmail.com", "abc12@gmail.com", "abc123@gmail.com"];
localStorage.setItem("data", JSON.stringify(data));
// U   S   E   R    N   A   M   E
function checkEmail() {
  for (let i = 0; i < data.length; i++) {
    if (username.value == data[i]) {
      failed.style.display = "block";
      return;
    } else {
      failed.style.display = "none";
    }
  }
}
username.addEventListener("focusout", checkEmail);
username.addEventListener("focus", checkEmail);

// P   A   S   S   W   O   R   D
var upperCaseLetters = /[A-Z]/g;
function checkPassword() {
  if (password.value.length > 6 && password.value.match(upperCaseLetters)) {
    alert("Password OK!");
  }
  else {alert("Must have at least 6 characters and 1 upper case");}
}
confirm.onclick = checkPassword;

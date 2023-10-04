function Logic() {
  if (username.value == "admin" && password.value == "admin123") {
    alert("Right Password");
  } else {
    alert("Wrong UserName or Password");
  }
}
const username = document.getElementById("username");
const password = document.getElementById("password");
const btn = document.getElementById("btn");
btn.onclick = Logic

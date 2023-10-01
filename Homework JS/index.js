function Logic() {
  if (username == "admin" && password == "admin123") {
    alert("Right Password");
  } else {
    alert("Wrong UserName or Password");
  }
}
var ary = [];
function user() {
  for (var i = 0; i < username.length; i++) {
    if (username[i].type.toLowerCase() === "admin") {
      ary.push(username[i]);
    }
  }
}
const username = document.getElementById("username");
const password = document.getElementById("password");
const btn = document.getElementById("btn");
btn.onclick = console.log(ary);

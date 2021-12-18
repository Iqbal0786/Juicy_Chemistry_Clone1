document.querySelector("button").addEventListener("click", CONTINUE);
var userData = JSON.parse(localStorage.getItem("userDatabase")) || [];
function CONTINUE(event) {
  event.preventDefault()
  var email = document.querySelector("#email").value;
  var password = document.querySelector("#password").value;
  var user = document.querySelector("#firstname").value;
  var mobile = document.querySelector("#mobile").value;

  var userCred = {
    emailAdd: email,
    pass: password,
    userName: user,
    mobile: mobile,
  };
  userData.push(userCred);
  localStorage.setItem("userDatabase", JSON.stringify(userData));
  
}
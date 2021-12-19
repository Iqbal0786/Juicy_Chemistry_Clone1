document.querySelector("#button").addEventListener("click", CONTINUE);
  var regdUsers = JSON.parse(localStorage.getItem("userDatabase"));
  function CONTINUE() {
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;

    if (email === "admin" && password === "admin") {
      window.location.href = "admin1.html";
    } else {
      for (var i = 0; i < regdUsers.length; i++) {
        if (regdUsers[i].emailAdd == email && regdUsers[i].pass == password) {
          alert("Login Successfull!");
          window.location.href = "product.html";
        }
      }
    }
  }

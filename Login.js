document.querySelector("#button").addEventListener("click", CONTINUE);
  var regdUsers = JSON.parse(localStorage.getItem("userDatabase"));
  function CONTINUE() {
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;

    if (email === "admin" && password === "admin") {
      window.location.href = "Aadmin.html";
    } else {
      for (var i = 0; i < regdUsers.length; i++) {
        if (regdUsers[i].emailAdd == email && regdUsers[i].pass == password) {
          console.log("registered user");
          window.location.href = "Pproducts.html";
        }
      }
    }
  }

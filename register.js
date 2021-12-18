function signup(e) {
    e.preventDefault()

    var register = document.getElementById("register");

    var firstname = register.firstname.value;
    var lastname = register.lastname.value;
    var mob   = register.mob.value;
    var email = register.email.value;
    var password = register.password.value;


register.firstname.value=null;
 
register.lastname.value=null;
 
register.mob.value=null;
    
register.email.value=null;
  
register.password.value=null;


    // should go to the local Storage
    if(localStorage.getItem("users") === null) {
        localStorage.setItem("users", JSON.stringify([]));
    }

    // get all the user data 
    var users = JSON.parse(localStorage.getItem("users"))        // existing users

    if (already_user(firstname, email, users)) {
        alert("User Already Exists");
    } else {
        var user = {
            firstname,
            lastname,
            mob,
            email,
            password,
        };

        // get array from localStorage


        //push new user
        users.push(user)

        localStorage.setItem("users", JSON.stringify(users));
        window.location.href = ""
    }
}
//check if user already exits or not
       function already_user(name,email,users){
          for(let i = 0;i<users.length;i++) {
               if(users[i].name === name && users[i].email === email){
                 return true;
               }
           };
           return false;

       }
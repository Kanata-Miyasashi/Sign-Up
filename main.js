// Sign Up Function
function signUp(){
    var username = document.getElementById('username_input').value;
    var email = document.getElementById('email_input').value;
    var password = document.getElementById('password_input').value;

    localStorage.setItem("Username: ", username);
    localStorage.setItem("Email: ", email);
    localStorage.setItem("Password: ", password);
    window.open("https://kanata-miyasashi.github.io/Login/","_self")
    }



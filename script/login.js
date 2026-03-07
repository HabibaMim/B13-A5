document.getElementById("login-btn").addEventListener("click", function(){
    const user=document.getElementById("username").value;
    console.log(user);

    const pass=document.getElementById("password").value;
    console.log(pass);

    if (user==="admin" && pass==="admin123"){
        alert("Login success!");
        window.location.assign("main.html");
    }
})
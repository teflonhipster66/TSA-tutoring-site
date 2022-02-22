

function submit(){
    var type = document.getElementById("roles").value;
    var password= document.getElementById("psw").value;
    var password2= document.getElementById("pswrepeat").value;
    var username = document.getElementById("Username").value;

    if(password!=password2){
    alert("Passwords do not match")
    }

    if (type == "teacher") {
        localStorage.setItem("teacherUser", username)
        localStorage.setItem("teacherPassword", password)
    }
    
    if (type == "student") {
        localStorage.setItem("StudentUser", username)
        localStorage.setItem("studentPassword", password)
    }

    if (password == password2){
        window.open("login.html")
    }

}

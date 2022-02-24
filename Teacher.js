function submit(){
    var type = document.getElementById("roles").value;
    var password= document.getElementById("psw").value;
    var password2= document.getElementById("pswrepeat").value;
    var username = document.getElementById("Username").value;
    var email  = document.getElementById("email").value;
    localStorage.setItem("StoredEmail", email)

    

    if(password!=password2){
    alert("Passwords do not match")
    }

    if (type == "teacher") {
        localStorage.setItem("teacherUser", username)
        localStorage.setItem("teacherPassword", password)
        localStorage.setItem("TypeCounter",  1)

    }
    
    if (type == "student") {
        localStorage.setItem("StudentUser", username)
        localStorage.setItem("studentPassword", password)
        type = type + 2
        localStorage.setItem("TypeCounter", 2)
    }

    if (password == password2){
        window.open("login.html")
    }

}


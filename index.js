

function verify() {
    var userInput = document.getElementById("enterUser").value
    var pwInput = document.getElementById("enterPw").value;
    var x = 0

    if (userInput == localStorage.getItem("teacherUser") && pwInput == localStorage.getItem("teacherPassword")) {
       alert("Teacher Login Succesful")
       window.open("#")
    }
    else {
        x = x + 1
    }

    if (userInput == localStorage.getItem("StudentUser") && pwInput == localStorage.getItem("studentPassword")) {
        alert("Student Login succesful")
        window.open("#")
    }
    else {
        x = x + 1
    }

    if (x == 2) {
        alert("Incorrect Username or Password")
    }
}


function email() {
    var type = localStorage.getItem("TypeCounter")
    var GetEmail = localStorage.getItem("StoredEmail")
    console.log(GetEmail)
    console.log(type)
    if (type == 1) { 
        Email.send({
		    Host: "smtp.gmail.com",
		    Username: "TutoringAppTSA@gmail.com",
		    Password: "tutoringpassword",
		    To: GetEmail,
		    From: "TutoringAppTSA@gmail.com",
		    Subject: "Username and password Recovery",
		    Body: "Username: " + localStorage.getItem("teacherUser") + "Password: " + localStorage.getItem("teacherPassword"),
	})
		    .then(function (message) {
		    alert("mail sent successfully")
		});
    
    }

    if (type == 2) {
        Email.send ({
            Host: "smtp.gmail.com",
		    Username: "TutoringAppTSA@gmail.com",
		    Password: "tutoringpassword",
		    To: GetEmail,
		    From: "TutoringAppTSA@gmail.com",
		    Subject: "Username and password Recovery",
            Body: "Username: " + localStorage.getItem("StudentUser") + "Password: " + localStorage.getItem("studentPassword") ,
        })
            .then(function (message) {
                alert("mail sent successfully")
            
        })
    }

}

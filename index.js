
function verify() {
    var userInput = document.getElementById("enterUser").value
    var pwInput = document.getElementById("enterPw").value;



    if (userInput == localStorage.getItem("teacherUser") && pwInput == localStorage.getItem("teacherPassword")) {
       alert("bigNigga energy")
    }
    if (userInput == localStorage.getItem("StudentUser") && pwInput == localStorage.getItem("studentPassword")) {
        alert("big NIgga energy")
    }
}
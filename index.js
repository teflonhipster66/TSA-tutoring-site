
function submit(){
    var type = document.getElementById("roles").value;
    var password= document.getElementById("psw").value;
    var password2= document.getElementById("pswrepeat").value;
    var username = document.getElementById("Username").value;
    var email  = document.getElementById("email").value;
    

    if(password!=password2){
    alert("Passwords do not match")
    }
   
        
    // SAVE TEACHER DATA
    if (type == "teacher") {
        if(localStorage.getItem('Data')==null){
            localStorage.setItem('Data', '[]')
        }
        var Data=JSON.parse(localStorage.getItem('Data'))

        Data.push (2)
        Data.push (email);
        Data.push (username);
        Data.push (password);
        localStorage.setItem('Data', JSON.stringify(Data))
        window.open("login.html")
        
    
    }
    // SAVE STUDENT DATA 
    if (type == "student") {    
        if(localStorage.getItem('Data1')==null){
            localStorage.setItem('Data1', '[]')
        }
        var Data1=JSON.parse(localStorage.getItem('Data1'))

        Data1.push (1)
        Data1.push (email);
        Data1.push (username);
        Data1.push (password);
        localStorage.setItem('Data1', JSON.stringify(Data1))
        window.open("login.html")
        
        
    }
   
    
}




function Incorrect() {
    alert("Inncorect Username or Password")
}

function verify() {
    console.time()

    var Data = JSON.parse(localStorage.getItem("Data"))
    var Data1= JSON.parse(localStorage.getItem("Data1"))
    var userInput = document.getElementById("enterUser").value
    localStorage.setItem("ID1", userInput)
    var pwInput = document.getElementById("enterPw").value;
    var x = 0

    if (Data.includes(userInput)) {
        var role = Data.indexOf(userInput) - 2
        var userlocation = Data.indexOf(userInput)
        var pwlocation = Data.indexOf(pwInput)
    }
    if (Data1.includes(userInput)) {
        var role1 =  Data1.indexOf(userInput) - 2
        var userlocation1 = Data1.indexOf(userInput)
        var pwlocation1 = Data1.indexOf(pwInput)
    
    }

    
    if (Data[role] == 2 && userlocation + 1 == pwlocation ) {
        window.open("http://127.0.0.1:5500/Teacherside.html")

    }
    else {
        x = x + 1
    }
  
    if(Data1[role1] == 1 && userlocation1 + 1 == pwlocation1) {
        alert("Student Login succesful")}
     else {
        x = x + 1
    }
    if (x == 2) {
        Incorrect()
    }


    console.timeEnd()
}

function GetUserwithEverythird(){
    var Data = JSON.parse(localStorage.getItem("Data"))
    var result=[]
    for(let i= 0; i<Data.length;i+=3){
        result.push(Data[i+1])
        
        
    }
    localStorage.setItem("USERS",JSON.stringify(result))
    var USNDATA=JSON.parse(localStorage.getItem("USERS"))

    if(USNDATA.includes(localStorage.getItem("ID1"))){
      var ID=[USNDATA.indexOf(localStorage.getItem("ID1"))]

      localStorage.setItem("ID", ID)

            
    }
}

function pastedescription(){
    var ARRYFORSTUDENT=localStorage.getItem(JSON.parse("ARRYFORSTUDENT"))
    document.getElementById("profile").innerHTML=ARRYFORSTUDENT[1]
    document.getElementById()
    }



function email() {
    console.time()
    var input = prompt("Enter Recovery Email")
    var x = 0 
    var Data = JSON.parse(localStorage.getItem("Array"))
    if (Data.includes(input)) {
        var infoLocation = Data.indexOf(input)
        var userRecovery = infoLocation + 1
        var pwRecovery = infoLocation + 2
        x = x + 1
    }
    

    if (x == 1) { 
        Email.send({
            Host: "smtp.gmail.com",
            Username: "TutoringAppTSA@gmail.com",
            Password: "tutoringpassword",
            To: input,
            From: "TutoringAppTSA@gmail.com",
            Subject: "Username and password Recovery",
            Body: "Username: " + Data[userRecovery] + "Password: " + Data[pwRecovery],
    })
            .then(function (message) {
            alert("mail sent successfully")
        });
    
    }
 
  
    
        
   
    
   
}
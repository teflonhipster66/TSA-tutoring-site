window.onload=function GetUSER(){
    var USLES=localStorage.getItem("ID1")
    document.getElementById("USERNAME_PROFILE").innerHTML=USLES
}


function saveALL(){
   
    
    
    var New3= document.getElementById("profile").value
    var New2=localStorage.getItem("ID1")
    var New1=document.getElementById("descrip").value


    if(localStorage.getItem('data')==null){
        localStorage.setItem('data', '[]')
    }

    var oldData= JSON.parse(localStorage.getItem('data'))
    
    
    oldData.push(New2)
    oldData.push(New3)
    oldData.push(New1)
    localStorage.setItem('data', JSON.stringify(oldData))

}
function getalldescriptions(){
    var ID= localStorage.getItem("ID")
    var usernamedata=JSON.parse(localStorage.getItem("data"))
    
    var ARRYFORSTUDENT=usernamedata[ID]

     var place=usernamedata.indexOf(ARRYFORSTUDENT)
     var place2=place+3
     var ARRYFORSTUDENT=[usernamedata.slice(place,place2)]


    localStorage.setItem("ARRYFORSTUDENT",JSON.stringify(ARRYFORSTUDENT))

    
    
}


 
function online(){

}
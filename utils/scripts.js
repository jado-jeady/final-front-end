
function checkUser(){
    var password= document.getElementById("password").value;
     var username = document.getElementById("username").value;
     if(username==="jado" && password ==="jado"){
        return "Views/homeuser.html";
     }
     else if(username==="how" && password==="are"){
        return window.location="Views/homeuser.html";
     }
     else{
        alert("welcome "+username.toUpperCase());
        
        return window.location="Views/homeuser.html";

         
     }
 }
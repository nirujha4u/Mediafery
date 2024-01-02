// import { username } from './02 signup';
// console.log(username); 

const btn=document.getElementById("login-btn");
const user=document.getElementById("user");
const pass=document.getElementById("pass");

btn.addEventListener("click", function(){

    if(user.value =="user" && pass.value=="pass"){
        // alert("Successful");
        window.open("https://www.gettyimages.in/");

    }else{
        alert("User Name or Password is Incorrect");
    }
})

function signin(){
    window.open("https://www.gettyimages.in/");
   
}

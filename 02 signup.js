function signup(){
    var emailid=document.getElementById("emailid").value;
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;


var userData = {
    Emailid: emailid,
    userame: username,
    password: password
};

console.log("User data:", userData);
}

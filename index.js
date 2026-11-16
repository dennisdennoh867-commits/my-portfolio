//========Log in System===========
let username;
let email;
let password;

document.getElementById("submit").onclick=function(){
    username=document.getElementById("mytext").value;
    email=document.getElementById("myEmail").value;
    password=document.getElementById("mypassword").value;
    //=====check empty fields===
    if(username.trim()==="" || 
    email.trim()==="" ||
     password.trim()===""){
        alert(`Plz fill the fields to proceed`);
    }
    //=====check email format======
    else if(!/^[^\s@]+@[^\s@]+$/.test(email)){
        alert("Please Enter a valid Email Address.");
    }
    //======check password length=====
    else if(password.length<8){
        alert("password must contain atleast 8 characters");
    }
    //=====check letters and numbers in password=========
    else if(!/[A_Z a-z]/.test(password) || !/[0-9]/.test(password)){
            alert("password must contain atleast one letter and one number");
    }
    //======succesfull=====validation
    else{
        // hide the login page
        document.getElementById("login").hidden=true;
        //display the portfolio page
        document.getElementById("mybody").hidden=false;
       
        
    }
};
//============messaging / contact systyem============
let fullName;
let Email;
let message;
document.getElementById("send").onclick = function(){

    fullName = document.getElementById('name').value;
    Email = document.getElementById('email').value;
    message = document.getElementById('message').value;

    if(fullName.trim() === "" ||
     Email.trim() === "" ||
      message.trim() === ""){

        alert("Kindly fill the fields.");

    }
    else {

        document.getElementById("myh5").textContent=`Hey ${fullName}, your message has been sent successfully.
        To be replied soon.`;

    }

};
// ========== LOGOUT SYSTEM ==========

document.getElementById("logout").onclick = function() {

    // Hide portfolio
    document.getElementById("mybody").hidden = true;

    // Show login
    document.getElementById("login").hidden = false;

    // Clear login fields
    document.getElementById("mytext").value = "";
    document.getElementById("myEmail").value = "";
    document.getElementById("mypassword").value = "";

    // Clear previous messages
    document.getElementById("myh4").textContent = "";

};
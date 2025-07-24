

function myMenuFunction(){
     var menuBtn = document.getElementById("myNavMenu");
     if(menuBtn.className === "nav-menu"){
          menuBtn.className += " responsive"
     } else {
          menuBtn.className = "nav-menu";
     }

}
const body = document.querySelector("body"),
toggleSwitch = document.getElementById("toggle-switch");
toggleSwitch.addEventListener("click", ()=> {
     body.classList.toggle("dark")
});

var names = getElementById("name").value;
var Emails = getElementById("email").value;
var messages = getElementById("message").value;
var subjects = getElementById("subject").value;
function sendEmail(){
     Email.send({
          Host : "smtp.elasticemail.com",
          Username : "kingbonheur02@gmail.com",
          Password : "E7C83E440848ACAEAF497B69D9A5601D84F5",
          To : Emails,
          From : 'kingbonheur02@gmail.com',
          subject: subjects,
          Body : messages
      }).then(
        message => alert(message)
      );
}
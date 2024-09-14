

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

function sendEmail(){
     Email.send({
          Host : "",
          Username : "",
          Password : "",
          To :"",
          Form : "",
          Subject : "",
          Body : ""
     }).then(
          message => alert(message)
     );
}
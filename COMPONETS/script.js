

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
          Host : "smtp.elasticemail.com",
          Username : "kingbonheur46@gmail.com",
          Password : "58D88AE5BDCFE756E75A61125334E2B0FA50",
          To : 'kingbonheur46@gmail.com',
          From : "you@isp.com",
          Subject : "This is the subject",
          Body : "And this is the body"
      }).then(
        message => alert(message)
      );
}
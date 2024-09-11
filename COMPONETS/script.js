

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

const section = document.querySelectorAll(".section[id]");
 
function srcollActive(){
     const scrollY = Window.scrollY;
      
     section.forEach((current) => {
          const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 50,
          sectionId = current.getAttribute("id");

          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
          document
          .querySelector(".nav-menu a[href*=" +sectionId + "]")
          .classList.add(".active-link");
          } else {
               document
               .querySelector(".nav-menu a[href*=" +sectionId + "]")
               .classList.remove(".active-link");
          }
     });
}

window.addEventListener("scroll", srcollActive);
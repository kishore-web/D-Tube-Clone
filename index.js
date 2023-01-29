const toggleBar = document.querySelector(".side-toggleIcon")
const leftSection = document.querySelector(".left-section")
const leftTabs = document.querySelectorAll(".nav-list")
toggleBar.addEventListener("click",(e)=>{
  
  if(e.target.classList.contains("fa-bars")){
    leftSection.classList.toggle("displayNone")
  }
})
// leftTabs.forEach((ele)=>{
//   console.log(ele)
// })



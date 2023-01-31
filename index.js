const toggleBar = document.querySelector(".side-toggleIcon")
const leftSection = document.querySelector(".left-section")
const rightSection = document.querySelector(".right-section")
const leftTabs = document.querySelectorAll(".nav-list")
toggleBar.addEventListener("click",(e)=>{
  
  if(e.target.classList.contains("fa-bars")){
    leftSection.classList.toggle("displayNone")
  }
})
// leftTabs.addEventListener("click", getRequiredWindow)


leftTabs.forEach((ele)=>{
  ele.addEventListener('click',(e)=>{
    console.log(ele)

  //   if(ele.classList.contains)



  })
  
})
  





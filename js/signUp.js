const userName = document.querySelector("#username")
const email = document.querySelector("#emailid")
const password = document.querySelector("#password")
const signUp = document.querySelector(".signup-btn")



signUp.addEventListener("click", getUserDetails)

async function getUserDetails(e){
  e.preventDefault()
  
  let uname = userName.value
  let uemail = email.value
  let upassword = password.value
  let userdata = {
    "name" : uname,
    "email" : uemail,
    "password" : upassword,
  }
  try{
    const response = await fetch('https://youtube-api-beta.vercel.app/user/signup',{
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userdata),
  })
  const data = await response.json();
    console.log(data);
  }
  catch (error) {
    console.error(error);
  }
}
// let element = JSON.parse(localStorage.getItem("userDetails"))

const email = document.querySelector("#emailid")
const password = document.querySelector("#password")
const login = document.querySelector(".login-btn")
const form = document.querySelector(".form")

form.addEventListener("submit", getUserLoginDetails)

async function getUserLoginDetails(e){
  e.preventDefault()
  // console.log("hiiii")
  let uemail = email.value
  let upassword = password.value
  let userdata = {
    "email" : uemail,
    "password" : upassword,
  }
  try{
    const response = await fetch('https://youtube-api-beta.vercel.app/user/login',{
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userdata),
  })
  const data = await response.json();
    console.log(data);
    localStorage.setItem("token",JSON.stringify(data))
  }
  catch (error) {
    console.error(error);
  }
}
const inputURL = document.querySelector("#url-id")
const uploadBtn = document.querySelector("#upload-btn")
const videoDescription = document.querySelector("#video-desc")
const formUrlUpload = document.querySelector(".formUrl-upload")
const warningUrl = document.querySelector(".warning-url")
const warningDes = document.querySelector(".warning-des")

formUrlUpload.addEventListener("submit", sendUrlData)

async function sendUrlData(e){
  e.preventDefault();

  const url = inputURL.value;
  const description = videoDescription.value;
  
  if(url==""){
    warningUrl.innerHTML = "Enter valid Embed url"

    setTimeout(()=>{
      warningUrl.innerHTML = ""
    },1000)
  }
  if(description == ""){
    warningDes.innerHTML = "Enter valid Embed url"

    setTimeout(()=>{
      warningDes.innerHTML = ""
    },1000)
  }
  // console.log("hiii")
  // console.log(localStorage.getItem("token"))
  const videoUrlData = {
    "video_url": url,
    "description": description,
  }
  try {
    const responseUrl = await fetch("https://youtube-api-beta.vercel.app/video/add", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Authorization": 'Bearer '+ JSON.parse(localStorage.getItem("token")).token
    },
    body: JSON.stringify(videoUrlData)
});
const userVideoData = await responseUrl.json();
console.log(userVideoData);
localStorage.setItem("userVideoData",JSON.stringify(userVideoData))
}
catch (error) {
  console.error(error);
}
}
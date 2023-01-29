// let user = "63d66c9a54a1a07ad010ecff"

// const api_url = `https://youtube-api-beta.vercel.app/video/all/${user}`

async function fetchData() {

//     // Storing response
//     const response = await fetch(api_url);
//     // Storing data in form of JSON
//     const data = await response.json();
 
//     return data;

// }

//  async function showData(){
//   let result = await fetchData()
//   console.log(result)
//  }
//  showData()

try {
  const responseUrl = await fetch("https://youtube-api-beta.vercel.app/video/all/63d66c9a54a1a07ad010ecff", {
  method: "GET",
  headers: {
      "Content-Type": "application/json",
      "Authorization": 'Bearer '+ JSON.parse(localStorage.getItem("token")).token
  },
  
});
const userData = await responseUrl.json();
console.log(userData[0].video_url);
localStorage.setItem("userData",JSON.stringify(userData))
}
catch (error) {
console.error(error);
}
}

fetchData()
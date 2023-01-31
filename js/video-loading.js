// let user = "63d6ba5fbdbd26273a16377d"
let user = "63d66c9a54a1a07ad010ecff"


const api_url = `https://youtube-api-beta.vercel.app/video/all/${user}`

async function fetchData() {

try {
  const responseUrl = await fetch(api_url, {
  method: "GET",
  headers: {
      "Content-Type": "application/json",
      "Authorization": 'Bearer '+ JSON.parse(localStorage.getItem("token")).token
  },
  
});
const userData = await responseUrl.json();
console.log(userData);
userData.map((val)=>{
  console.log("hiiii")
  showVideoData(val);
    //  displaySearchResult(val);
})

}
  catch (error) {
  console.error(error);
  }
}
fetchData()

const videoDiv = document.querySelector(".final-videodiv") 



function showVideoData(val){

  videoDiv.innerHTML += ` <div class="video-frame flexC">
  <div class="iframe-section">
    <iframe src=${val.video_url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
  <div class="video-content">
    <p class="video-content-text">${val.description}
    </p>
    <div class="video-content-likes">
      <div class="like-btn"><i class="fa-solid fa-thumbs-up"></i>  1</div>
      <div class="dislike-btn"><i class="fa-solid fa-thumbs-down"></i> 0</div>
      <div class="share-btn">Share <i class="fa-solid fa-share"></i></div>
      <div><i class="fa-solid fa-ellipsis"></i>
      </div>
    </div>
  </div>
  <div class="owner-data">
    <div class="owner-img">
      <img src="../src/dummy-profile.png" alt="profile-pic">
    </div>
    <div class="owner-subscription">
      <p class="profile-name">Profile Name</p>
      <p class="sub-btn">SUBSCRIBE</p><span class="sub-val">10</span>
    </div>
  </div>
  <div class="info-container">
    <h4>Published on Jan 27, 2023</h4>
    <p>Can't stop ourselves from vibing to this absolute banger! 🕺💃 #JhoomeJoPathaan
      Book your tickets NOW! BookMyShow: https://bookmy.show/Pathaan | Paytm: https://m.paytm.me/pathaan
      Celebrate #Pathaan with YRF50 only at a big screen near you, in Hindi, Tamil and Telugu.</p>
      <p>🎧 Song Credits:</p>
      <p>Music: Vishal and Sheykhar</p>
      <p>Lyrics: Kumaar</p>
      <p>Singers: Arijit Singh, Sukriti Kakar, Vishal and Sheykhar</p>
  </div>
  <div class="comments-section">
    <h4>0 replies</h4>
    <textarea name="" id="" cols="102" rows="4" placeholder="Add a comment"></textarea>
    <div class="comment-btndiv"><p>ADD A COMMENT</p>
      <div class="comment-icon"><i class="fa-solid fa-comment-dots"></i></div>
    </div>
    <div class="comment-ui">
      <div class="owner-img">
        <img src="../src/dummy-profile.png" alt="profile-pic">
      </div>
      <div class="owner-subscription">
        <p class="profile-name">Profile Name</p>
        <p class="sub-btn">SUBSCRIBE</p>
    </div>
  </div>
</div>`

}



//youtube video li
// <form>
//   <textarea id="embedCode"></textarea>
//   <button id="submitBtn" type="submit">Check</button>
//   <p id="result"></p>
// </form>

// <script>
//   document.getElementById("submitBtn").addEventListener("click", function(event) {
//     event.preventDefault();
//     var embedCode = document.getElementById("embedCode").value;
//     var resultEl = document.getElementById("result");
//     var pattern = /^<iframe.*src="https:\/\/www.youtube.com\/embed\/([\w-]+).*<\/iframe>$/;
//     if (pattern.test(embedCode)) {
//       resultEl.innerHTML = "Valid YouTube embed code";
//     } else {
//       resultEl.innerHTML = "Invalid YouTube embed code";
//     }
//   });
// </script>



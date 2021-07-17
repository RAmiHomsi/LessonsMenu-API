//API link from youtube
const url = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLMTdZ61eBnyp1nMM8mGRzpwuu6FNxFy0D&maxResults=5&key=AIzaSyAaRjH-yWMxGLPBOvDdqkGjTn84-wqY--o";
fetch(url)

.then( response => { return response.json()})

.then(data =>{

    getData(data.items);
        
}).catch(error =>{

    console.log(error);
})


function getData(data){
    data.forEach(element => {
       var title =  element.snippet.title;
       var videoId = element.snippet.resourceId.videoId;
     
       var card = document.getElementById("content");
       card.innerHTML +='<div class="card-header shadow p-3 mb-5 bg-white rounded" onclick="loadVideo(\'' +videoId+ '\')">'
        + title+  '</div>';
    });
};


function loadVideo(videoId){
    document.getElementById("player").src= "https://www.youtube.com/embed/"+videoId;
}
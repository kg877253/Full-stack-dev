console.log("Welcome to Spotify Clone!");


async function getSongs() {
    let a = await fetch("http://127.0.0.1:3000/SPOTIFY%20CLONE/songs/")
    let response = await a.text();
    // console.log(response);
    let div = document.createElement("div");
    div.innerHTML = response;
    let as=div.getElementsByTagName("a");
    // console.log(as);
    
    let songs = [];

    for(let i =0 ;i<as.length;i++){
        const element = as[i];

        if(element.href.endsWith("mp3")){
            songs.push(element.href);
        }
    }
    return songs;
}

async function main(){
    let songss=await getSongs();
    console.log(songss);
}
main();
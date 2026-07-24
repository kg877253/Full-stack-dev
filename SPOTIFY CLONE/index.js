console.log("Welcome to Spotify Clone!");

async function getSongs() {
    let a = await fetch("http://127.0.0.1:3000/SPOTIFY%20CLONE/songs/")
    let response = await a.text();
    let div = document.createElement("div");
    div.innerHTML = response;
    let as = div.getElementsByTagName("a");

    let songs = [];
    for (let i = 0; i < as.length; i++) {
        const element = as[i];

        if (element.href.endsWith("mp3")) {
            // pehle decode karo taaki %5C wapas \ ban jaaye
            let decoded = decodeURIComponent(element.href);

            // ab real \ ya / pe split karo
            let parts = decoded.split(/[\\/]/);
            let filename = parts[parts.length - 1];

            // clean URL banao (filename ko encode karke, spaces sahi handle hon)
            let cleanUrl = "http://127.0.0.1:3000/SPOTIFY%20CLONE/songs/" + encodeURIComponent(filename);
            songs.push(cleanUrl);
        }
    }
    return songs;


}

// songs ko display karne ka function lib ke neeche

function displaySongs(songs) {
    let listContainer = document.getElementById("songList");
    listContainer.innerHTML = "";

    for (let i = 0; i < songs.length; i++) {
        let songUrl = songs[i];
        let filename = decodeURIComponent(songUrl.split("/").pop());
        let songName = filename.replace(".mp3", "");

        let item = document.createElement("div");
        item.className = "song-item";
        item.innerHTML = `
            <img src="music.svg" alt="Music image">
            <div class="song-name">${songName}</div>
            <button class="song-play-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="#1ED760">
                    <circle cx="12" cy="12" r="12" fill="#1ED760"/>
                    <polygon points="9,7 18,12 9,17" fill="#000000"/>
                </svg>
            </button>
        `;

        // ab click sirf play button pe lagega, poore item pe nahi
        let playBtn = item.querySelector(".song-play-btn");
        playBtn.addEventListener("click", () => {
            audio.src = songUrl;
            audio.play().catch(err => console.log("Play failed:", err));;
        });

        listContainer.appendChild(item);
    }
}
let audio = new Audio();  // ek hi audio object bahar bana lo


async function main() {
    let songs = await getSongs();
    console.log(songs);

    displaySongs(songs);   // list bana do

    audio.src = songs[0];   // pehle song set karo

    // ab tumhare play-pause button pe click event lagao
    // let playBtn = document.querySelector(".play-pausebtn");
    // playBtn.addEventListener("click", () => {
    //     audio.play();
    // });
}
main();
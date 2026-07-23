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
function displaySongs(songs) {
    let listContainer = document.getElementById("songList");
    listContainer.innerHTML = "";  // purana clear karo

    for (let i = 0; i < songs.length; i++) {
        let songUrl = songs[i];

        // filename nikaalo URL se (extension hataake)
        let filename = decodeURIComponent(songUrl.split("/").pop());
        let songName = filename.replace(".mp3", "");

        let item = document.createElement("div");
        item.className = "song-item";
        item.innerHTML = `
            <img src="music.svg" alt="Music image ">
            <div class="song-name">${songName}</div>
        `;

        // click karne pe woh gaana play ho
        item.addEventListener("click", () => {
            audio.src = songUrl;
            audio.play();
        });

        listContainer.appendChild(item);
    }
}
let audio = new Audio();  // ek hi audio object bahar bana lo


async function main() {
    let songs = await getSongs();
    console.log(songs);

    displaySongs(songs);   // list bana do

    audio.src = songs[4];   // pehle song set karo

    // ab tumhare play-pause button pe click event lagao
    let playBtn = document.querySelector(".play-pausebtn");
    playBtn.addEventListener("click", () => {
        audio.play();
    });
}
main();
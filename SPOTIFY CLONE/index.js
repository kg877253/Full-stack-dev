console.log("Welcome to Spotify Clone!");

// Step 1: Server se saare mp3 file links nikalna
async function getSongs() {
    let response = await fetch("http://127.0.0.1:3000/SPOTIFY%20CLONE/songs/");
    let htmlText = await response.text();

    let tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlText;
    let allLinks = tempDiv.getElementsByTagName("a");

    let songs = [];

    for (let i = 0; i < allLinks.length; i++) {
        let link = allLinks[i];

        if (link.href.endsWith("mp3")) {
            let decodedLink = decodeURIComponent(link.href);
            let parts = decodedLink.split(/[\\/]/);
            let filename = parts[parts.length - 1];
            let songUrl = "http://127.0.0.1:3000/SPOTIFY%20CLONE/songs/" + encodeURIComponent(filename);
            songs.push(songUrl);
        }
    }

    return songs;
}

// Step 2: Songs ki list HTML me dikhana, har song ke saath ek play button
function displaySongs(songs) {
    let listContainer = document.getElementById("songList");
    listContainer.innerHTML = "";

    for (let i = 0; i < songs.length; i++) {
        let songUrl = songs[i];
        let filename = decodeURIComponent(songUrl.split("/").pop());
        let songName = filename.replace(".mp3", "");

        let songItem = document.createElement("div");
        songItem.className = "song-item";
        songItem.innerHTML = `
            <img src="music.svg" alt="Music image">
            <div class="song-name">${songName}</div>
            <button class="song-play-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="#1ED760">
                    <circle cx="12" cy="12" r="12" fill="#1ED760"/>
                    <polygon points="9,7 18,12 9,17" fill="#000000"/>
                </svg>
            </button>
        `;

        let playButton = songItem.querySelector(".song-play-btn");
        playButton.addEventListener("click", () => {
            audio.src = songUrl;
            audio.play().catch(error => console.log("Play failed:", error));
        });

        listContainer.appendChild(songItem);
    }
}

// ek hi shared audio object
let audio = new Audio();

// bottom wala play-pause icon aur uska img element
let playPauseIcon = document.getElementById("playPauseIcon");

audio.addEventListener("play", () => playPauseIcon.src = "pause.svg");
audio.addEventListener("pause", () => playPauseIcon.src = "play.svg");
audio.addEventListener("ended", () => playPauseIcon.src = "play.svg");

// bottom button pe click karne se toggle ho (if-else se)
playPauseIcon.addEventListener("click", () => {
    if (audio.paused) {
        audio.play().catch(error => console.log("Play failed:", error));
    } else {
        audio.pause();
    }
});

// Step 3: Sab kuch shuru karne wala main function
async function main() {
    let songs = await getSongs();
    console.log(songs);

    displaySongs(songs);

}

main();
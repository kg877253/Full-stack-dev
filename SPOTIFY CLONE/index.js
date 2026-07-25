console.log("Welcome to Spotify Clone!");

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
            safePlay();
            updateNowPlayingName(songName);   // naam update karo click hote hi
        });

        listContainer.appendChild(songItem);
    }
}

let audio = new Audio();
let playPauseIcon = document.getElementById("playPauseIcon");
let nowPlayingName = document.getElementById("nowPlayingName");
let timeElapsed = document.getElementById("timeElapsed");
let timeTotal = document.getElementById("timeTotal");

function safePlay() {
    audio.play().catch(error => console.log("Play failed:", error));
}

// naam update karne ka chhota function
function updateNowPlayingName(name) {
    nowPlayingName.textContent = name;
}

// seconds ko "mm:ss" format mein badalne wala helper
function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = Math.floor(seconds % 60);

    // agar seconds 5 hai toh "05" dikhana hai, "5" nahi
    if (remainingSeconds < 10) {
        remainingSeconds = "0" + remainingSeconds;
    }

    return minutes + ":" + remainingSeconds;
}

audio.addEventListener("play", () => playPauseIcon.src = "pause.svg");
audio.addEventListener("pause", () => playPauseIcon.src = "play.svg");
audio.addEventListener("ended", () => playPauseIcon.src = "play.svg");

// jab song load ho jaye aur uski total duration pata chal jaye
audio.addEventListener("loadedmetadata", () => {
    timeTotal.textContent = formatTime(audio.duration);
});

// jab audio chalta rehta hai, ye baar baar fire hota hai (roughly har second)
audio.addEventListener("timeupdate", () => {
    timeElapsed.textContent = formatTime(audio.currentTime);
});

// bottom button pe click karne se toggle ho (if-else se)
playPauseIcon.addEventListener("click", () => {
    if (audio.paused) {
        audio.play().catch(error => console.log("Play failed:", error));
    } else {
        audio.pause();
    }
});

async function main() {
    let songs = await getSongs();
    console.log(songs);

    displaySongs(songs);

    // pehle song ka naam bhi dikha do shuru mein
    let firstFilename = decodeURIComponent(songs.split("/").pop());
    let firstSongName = firstFilename.replace(".mp3", "");
    updateNowPlayingName(firstSongName);
}

main();
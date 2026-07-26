console.log("Welcome to Spotify Clone!");

let hamburgerBtn = document.getElementById("hamburgerBtn");
let sidebar = document.querySelector(".sidebar");
let sidebarOverlay = document.getElementById("sidebarOverlay");

hamburgerBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    sidebarOverlay.classList.toggle("show");
});

sidebarOverlay.addEventListener("click", () => {
    sidebar.classList.remove("open");
    sidebarOverlay.classList.remove("show");
});

// Step 1: Server se saare mp3 file links nikalna
async function getSongs(folder) {
    let response = await fetch(`http://127.0.0.1:3000/SPOTIFY%20CLONE/${folder}/`);
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
            let songUrl = `http://127.0.0.1:3000/SPOTIFY%20CLONE/${folder}/` + encodeURIComponent(filename);
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
            playSongByIndex(i);
        });

        listContainer.appendChild(songItem);
    }
}

// ek hi shared audio object
let audio = new Audio();

let playPauseIcon = document.getElementById("playPauseIcon");
let nowPlayingName = document.getElementById("nowPlayingName");
let timeElapsed = document.getElementById("timeElapsed");
let timeTotal = document.getElementById("timeTotal");
let seekCircle = document.querySelector(".circle");

let allSongs = [];
let currentIndex = 0;

// safe play helper — error handle karne ke liye ek hi jagah
function safePlay() {
    audio.play().catch(error => console.log("Play failed:", error));
}

// currently playing song ka naam update karna
function updateNowPlayingName(name) {
    nowPlayingName.textContent = name;
}

// seconds ko "mm:ss" format mein badalne wala helper
function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = Math.floor(seconds % 60);

    if (remainingSeconds < 10) {
        remainingSeconds = "0" + remainingSeconds;
    }

    return minutes + ":" + remainingSeconds;
}

// diye gaye index ka gaana play karta hai, aur out-of-range ko wraparound karta hai
function playSongByIndex(index) {
    if (index < 0) {
        index = allSongs.length - 1;
    }
    if (index >= allSongs.length) {
        index = 0;
    }

    currentIndex = index;

    let songUrl = allSongs[currentIndex];
    let filename = decodeURIComponent(songUrl.split("/").pop());
    let songName = filename.replace(".mp3", "");

    audio.src = songUrl;
    safePlay();
    updateNowPlayingName(songName);
}

// audio object khud batata hai jab bhi play/pause/end ho
audio.addEventListener("play", () => playPauseIcon.src = "pause.svg");
audio.addEventListener("pause", () => playPauseIcon.src = "play.svg");

audio.addEventListener("ended", () => {
    playPauseIcon.src = "play.svg";
    seekCircle.style.left = "0%";
});

// jab song load ho jaye aur uski total duration pata chal jaye
audio.addEventListener("loadedmetadata", () => {
    timeTotal.textContent = formatTime(audio.duration);
});

// audio chalte waqt baar baar fire hota hai (roughly har second)
audio.addEventListener("timeupdate", () => {
    timeElapsed.textContent = formatTime(audio.currentTime);

    let percentPlayed = (audio.currentTime / audio.duration) * 100;
    seekCircle.style.left = percentPlayed + "%";
});

// bottom button pe click karne se toggle ho
playPauseIcon.addEventListener("click", () => {
    if (audio.paused) {
        audio.play().catch(error => console.log("Play failed:", error));
    } else {
        audio.pause();
    }
});

// prev aur next buttons
let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");

prevBtn.addEventListener("click", () => {
    playSongByIndex(currentIndex - 1);
});

nextBtn.addEventListener("click", () => {
    playSongByIndex(currentIndex + 1);
});

let volumeSlider = document.getElementById("volumeSlider");

volumeSlider.addEventListener("input", () => {
    audio.volume = volumeSlider.value / 100;
});


//displayalbums ke liye function
async function displayalbums() {

    let response = await fetch(`http://127.0.0.1:3000/SPOTIFY%20CLONE/songs/`);
    let htmlText = await response.text();

    let tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlText;
    let anchors = tempDiv.getElementsByTagName("a");
    let cardcontainer = document.getElementsByClassName("cardcontainer")[0];

    Array.from(anchors).forEach(async anchor => {
        if (anchor.href.endsWith("/") && anchor.href.includes("%5C")) {
            let folder = anchor.href.split("5C").slice(-1)[0].replace("/", "");

            let infoResponse = await fetch(`http://127.0.0.1:3000/SPOTIFY%20CLONE/songs/${folder}/info.json`);
            let infoData = await infoResponse.json();

            cardcontainer.innerHTML = cardcontainer.innerHTML + `<div data-folder="${folder}" class="card">
                            <div class="playbutton">
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
                                    <circle cx="24" cy="24" r="24" fill="#1ED760" />
                                    <polygon points="18,14 36,24 18,34" fill="#000000" />
                                </svg>
                            </div>
                            <img src="songs/${folder}/albumimage.jpg" alt="Album image">
                            <div class="card-info">
                                <div>${infoData.title}</div>
                                <p>${infoData.artist}</p>
                            </div>
                        </div>`
        }
    });

}

// Step 3: Sab kuch shuru karne wala main function
async function main() {
    let songs = await getSongs("songs/firstplaylist"); // Replace "firstplaylist" with the actual folder name
    allSongs = songs;

    displaySongs(songs);

    document.querySelector(".seekbar").addEventListener("click", (event) => {
        let percent = event.offsetX / event.target.getBoundingClientRect().width * 100;
        document.querySelector(".circle").style.left = percent + "%";
        audio.currentTime = ((audio.duration) * percent) / 100;
    });

    // Playlist cards ke liye event delegation — cardcontainer pe ek hi listener,
    // isse naye (dynamically added) cards pe bhi click kaam karega
    document.querySelector(".cardcontainer").addEventListener("click", async (event) => {
        let card = event.target.closest(".card");
        if (!card) return;

        let folder = card.getAttribute("data-folder");
        let songs = await getSongs(`songs/${folder}`);
        allSongs = songs;
        displaySongs(songs);
    });

    displayalbums();

    //volume button toggle
    document.querySelector("#volumeIcon").addEventListener("click",e => {
        if(e.target.src.includes("volume.svg")){
            e.target.src = e.target.src.replace("volume.svg", "mute.svg");
            audio.volume = 0;
            document.querySelector(".volume-slider").value = 0;
        } else {
            e.target.src = e.target.src.replace("mute.svg", "volume.svg");
            audio.volume = .3;
            document.querySelector(".volume-slider").value = 30;
        }
    });
}

main();
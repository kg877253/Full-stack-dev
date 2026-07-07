// this is for making a card image for youtube video using javascript, html and css but only 1 card can be created .
// function createCardImage(title,cname,views,monthsold,duration,thumbnail) {

//     document.getElementById("title").innerText=title;
//     document.getElementById("cname").innerText=cname;
//     document.getElementById("views").innerText=views;
//     document.getElementById("monthsold").innerText=monthsold;
//     document.getElementById("duration").innerText=duration;
//     document.getElementById("thumbnail").src=thumbnail;


// }
// function convertViews(views) {
//     if(views>=1000 && views<1000000){
//         return (views/1000)+"K";
//     }
//     if(views>=1000000){
//         return (views/1000000)+"M";
//     }else{
//         return views;
//     }
// }

// function convertMonths(months) {
//     return months + " Months ago";
// }

// createCardImage("Introduction to Backend | Sigma Web Dev video #2", "  CodeWithHarry", convertViews(560000),convertMonths(7), "131:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
// this code is for creating multiple card images for youtube videos using javascript, html and css. Each time you call the function, a new card will be added below the previous one.
function createCardImage(title, cname, views, monthsold, duration, thumbnail) {
    const card = document.createElement("div");
    card.className = "container";

    card.innerHTML = `
        <div class="thumb-wrap">
            <img src="${thumbnail}" alt="Thumbnail">
            <span class="duration">${duration}</span>
        </div>
        <div class="info">
            <h4 class="title">${title}</h4>
            <ul>
                <li>${cname}</li>
                <li>${convertViews(views)}</li>
                <li>${convertMonths(monthsold)}</li>
            </ul>
        </div>
    `;
// ye card ko append karne ke liye humne document.getElementById("cards-wrapper").appendChild(card); use kiya hai, jisse har baar function call hone par naya card neeche add hoga.
    document.getElementById("cards-wrapper").appendChild(card);
}

function convertViews(views) {
    if (views >= 1000 && views < 1000000) return (views / 1000) + "K";
    if (views >= 1000000) return (views / 1000000) + "M";
    return views;
}

function convertMonths(months) {
    return months + " Months ago";
}


// Ab jitni baar chaho call karo, har baar naya card niche add hoga
createCardImage("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 500, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg");
createCardImage("Installing VS Code & How Websites Work", "CodeWithHarry", 727000, 2, "31:20", "https://i.ytimg.com/vi/gRLdHSabW3o/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBOkIyACIrUQH4WItgmM-x89Ebw2Q");
createCardImage("Installing VS Code & How Websites Work", "CodeWithHarry", 7270000, 2, "31:20", "https://i.ytimg.com/vi/gRLdHSabW3o/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBOkIyACIrUQH4WItgmM-x89Ebw2Q");

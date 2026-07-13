
async function fetchData() {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("fetching data...");
    }, 2000);
})
//post get put delete patch request ke liye fetch api ka use hota h
}

async function main() {

    console.log("reading script...");

    console.log("loading data...");

    let data = await fetchData();
    console.log(data);

    let a = await fetch("https://jsonplaceholder.typicode.com/posts");
    let postData = await a.json();
    console.log(postData);
    console.log("script executed successfully");
}

main();

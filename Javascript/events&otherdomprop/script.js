console.log("hello world");

let button = document.querySelector("button");

//jese hi click krenge change content button pr vaise hi ye function call hoga aur box ka content change ho jayega.
button.addEventListener("click",()=>{
    document.querySelector(".container").style.background ="blue";
    document.querySelector(".box").innerText = "I am a box. I have changed.";
    document.querySelector(".box").style.color = "white";
})
//jab change content buttton pr rigth click krenge to alert ayega ki right click is disabled on this button.
button.addEventListener("contextmenu", ()=>{
    alert("Right click is disabled on this button.");
})

// button.addEventListener("mousemove", ()=>{
//     alert("Mouse is moving over the button.");
// })

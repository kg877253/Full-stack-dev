console.log("helloooo")





function greet(name, Callbackhai) {
  console.log("Hello " + name);
  Callbackhai();
}

function callbackkliye() {
  console.log("Callback executed!");
}

let nameofp = "Kartik";



greet(nameofp, callbackkliye);
console.log("helloooo")

// setTimeout(() => {
//     console.log("i am inside ")
// },2000)

console.log("i am outside")
const funcs = ()=>{
    console.log("i am nothing")
}
const callbacks =(arg,funcs)=>{
    console.log(arg)
    funcs()
}
const loadscript=(src,callback) => {
    let sr = document.createElement('script')
    sr.src = src
    sr.onload = ()=>callbacks("harry", funcs);
    document.head.append(sr)
  
}

loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js",callbacks)
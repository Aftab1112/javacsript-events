// btn.onclick = () =>{
//     console.log("Ok")
//     a = 25;
//     a++
//     console.log(a)
// }

// let hel = document.querySelector(".box")

// hel.onmouseover = () =>{
//     console.log("hey you made it")
//     hel.style.backgroundColor = "red"
// }



// let div = document.querySelector(".box")

// div.addEventListener("mouseover",() => {
//     console.log("you are inside a div")
//     b = 28;
//     b++;
//     console.log(b)
// })


// let btn = document.querySelector(".btn")

// btn.addEventListener("click",() =>{
//     console.log("button clicked 1st")
// })

// btn.addEventListener("click",() =>{
//     console.log("button clicked 2nd")
// })

// const handler3 = () =>{
//     console.log("button clicked 3rd")
// }

// btn.addEventListener("click",handler3)

// btn.addEventListener("click",() =>{
//     console.log("button clicked 4th")
// })

// btn.removeEventListener("click",handler3)

let modeBtn = document.querySelector(".mode")
let currMode = "light";
let body = document.querySelector("body")

modeBtn.addEventListener("click",()=>{
    if(currMode === "light"){
        currMode = "dark"
        body.classList.add("dark")
        body.classList.remove("light")
    }else{
        currMode = "light"
        body.classList.add("light")
        body.classList.remove("dark")
    }

    console.log(currMode)
})













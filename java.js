const base = document.querySelector(".base")
let gridSize = 256 
let size = 16
let randomColour = 0
let mode = "standard"

drawGrid = function(gridSize){
    removeGrid()
    for (i =0; i < gridSize;i++){
        const div = document.createElement("div");
        div.classList.add("grid")
        base.appendChild(div)
    }
}
 
colourChange = function() {

const grid = document.querySelectorAll(".grid")
    grid.forEach((square) => {
        square.addEventListener("mouseover", () => {
            square.classList.add("change")
            const change = document.querySelectorAll(".change")
            change.forEach((initialSquare) => {
                initialSquare.setAttribute("style", "background:black;")
            })
        });
    });
}

randomColour = function(){
    let a = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    let c = Math.floor(Math.random() * 256)
    randomColour = `rgb(${a},${b},${c})`
}

rainbowColourChange = function(){
    const grid = document.querySelectorAll(".grid")
    randomColour()
    grid.forEach((square) => {
        square.addEventListener("mouseover", () => {
            square.classList.add("change")
            const change = document.querySelectorAll(".change")
            change.forEach((initialSquare) => {
                initialSquare.setAttribute("style", `background: ${randomColour};`)
            })
        });
    });
}

resetGrid = function() {
    const grid = document.querySelectorAll(".grid")
    grid.forEach((square) =>{
        square.setAttribute("style", "background:white;")
        square.classList.remove("change")
    })
}

removeGrid = function(){
    const grid = document.querySelectorAll(".grid")
    grid.forEach((one) => {
        one.remove()
    })    
}   

changeGrid = function(newSize) {
    const base = document.querySelector(".base")
    base.style.gridTemplateColumns = `repeat(${newSize}, auto)`
    base.style.gridTemplateRows = `repeat(${newSize}, auto)`
}

drawGrid(gridSize)


const button = document.querySelector(".button")
button.addEventListener ("click", () => {
    size = parseInt(prompt("What size grid would you like? "));
    if (size > 100){
        size = 100
        alert("Size cannot be larger than 100")
    }
    gridSize = size*size 
    drawGrid(gridSize)
    changeGrid(size)
    // colourChange()
    // rainbowColourChange()
});


const standard = document.querySelector(".standard")
standard.addEventListener ("click", () => {
    mode = "standard"
})

const psychedelic = document.querySelector(".psychedelic")
psychedelic.addEventListener("click", () =>{
    mode = "psychedelic"
})

const clear = document.querySelector(".clear")
clear.addEventListener ("click", () => {
    resetGrid()
})

if (mode == "psychedelic") {
    colourChange()
} else if (mode == "standard") { 
    rainbowColourChange()
}


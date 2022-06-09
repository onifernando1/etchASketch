const base = document.querySelector(".base")
let gridSize = 256 
let size = 16

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


removeGrid = function(){
    const grid = document.querySelectorAll(".grid")
    grid.forEach((one) => {
        one.remove()
    })    
}   

drawGrid(gridSize)
colourChange()

changeGrid = function(newSize) {
    const base = document.querySelector(".base")
    base.style.gridTemplateColumns = `repeat(${newSize}, auto;`
    base.style.gridTemplateRows = `repeat(${newSize}, auto;`
}

// changeSize = function() {
//     const grid = document.querySelector(".grid")
//     grid.style.height = "fit-content"
//     grid.style.width = "fit-content"
    
    
// }

const button = document.querySelector(".button")
button.addEventListener ("click", () => {
    size = parseInt(prompt("What size grid would you like? "));
    gridSize = size*size 
    drawGrid(gridSize)
    changeGrid(size)
    // changeSize()
    colourChange()
});

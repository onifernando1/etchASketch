const base = document.querySelector(".base")
let gridSize = 256
let size = 16

drawGrid = function(gridSize){
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

changeGrid = function() {
    const base = document.querySelector(".base")
    base.style.gridTemplateColumns = `repeat(${size}, 1fr, 1fr)`;
    base.style.gridTemplateColumns = `repeat(${size}, 1fr, 1fr)`;

}

changeSize = function() {
    const grid = document.querySelector(".grid")
    grid.style.height = `${100/gridSize}%`
    grid.style.width = `${100/gridSize}%`
    
}

const button = document.querySelector(".button")
button.addEventListener ("click", () => {
    size = parseInt(prompt("What size grid would you like? "));
    gridSize = size*size 
    removeGrid()
    drawGrid(gridSize)
    changeGrid()
    colourChange()
});


const base = document.querySelector(".base")
let gridSize = 256

drawGrid = function(gridSize){
    for (i =0; i < gridSize;i++){
        const div = document.createElement("div");
        div.classList.add("grid")
        base.appendChild(div)
    }

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

changeGrid = function() {
    const base = document.querySelector(".base")
    base.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
}

changeSize = function() {
    const grid = document.querySelector(".grid")
    grid.style.height = "90px"
    grid.style.width = "90px"
    
}

const button = document.querySelector(".button")
button.addEventListener ("click", () => {
    gridSize = parseInt(prompt("What size grid would you like? "));
    removeGrid()
    drawGrid(gridSize*gridSize)
    changeGrid()
    changeSize()
});

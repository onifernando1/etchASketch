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

drawGrid(gridSize)

const button = document.querySelector(".button")
button.addEventListener ("click", () => {
    gridSize = prompt("What size grid would you like? ");
    drawGrid(gridSize)
});

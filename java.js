const base = document.querySelector(".base")

for (i =0; i < 256;i++){
    const div = document.createElement("div");
    div.classList.add("grid")
    base.appendChild(div)
}

const grid = document.querySelectorAll(".grid")
grid.forEach((square) => {
    square.addEventListener("mouseover", () => {
        colourChange()
});
});

colourChange = function(){
    
}
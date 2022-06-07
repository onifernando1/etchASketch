const base = document.querySelector(".base")

for (i =0; i <10;i++){
    const div = document.createElement("div");
    div.classList.add("grid")
    base.appendChild(div)
}

let body = document.querySelector("body")
let circleDiv = document.createElement("div");
    circleDiv.classList.add("circel");
    body.appendChild(circleDiv);

let cursorMove = (event) => {
    circleDiv.style.transition = "all linear .3s";
    circleDiv.style.left = event.clientX + "px";
    circleDiv.style.top = event.clientY + "px";
    circleDiv.style.cursor = "none"
}
document.addEventListener("mousemove", cursorMove)








// make all img HTML Tags undraggable
function draggables() {
    const img = document.querySelectorAll("img");
    img.forEach((image) => image.setAttribute("draggable", "false"));
}

export default draggables;

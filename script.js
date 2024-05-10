const wrapper = document.querySelector(".wrapper-draggable"),
    header = wrapper.querySelector("img");
function onDrag({ movementX, movementY }) {
    let getStyle = window.getComputedStyle(wrapper);
    let leftVal = parseInt(getStyle.left);
    let topVal = parseInt(getStyle.top);
    wrapper.style.left = `${leftVal + movementX}px`;
    wrapper.style.top = `${topVal + movementY}px`;
}
wrapper.addEventListener("mousedown", () => {
    wrapper.classList.add("active");
    wrapper.addEventListener("mousemove", onDrag);
});
document.addEventListener("mouseup", () => {
    wrapper.classList.remove("active");
    wrapper.removeEventListener("mousemove", onDrag);
});

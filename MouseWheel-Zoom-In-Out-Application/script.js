const zoomScreen = document.querySelector(".container");

let zoom = 1;
let zoomS = 0.1;

function handleZoom(event) {
  const deltaY =
    event.type === "wheel" ? event.deltaY : event.touches[0].clientY - event.touches[0].pageY;

  const zoomFactor = deltaY > 0 ? 1 + zoomS : 1 - zoomS;
  zoomScreen.style.transform = `scale(${zoom * zoomFactor})`;
  zoom = zoom * zoomFactor;
}

// Listen for both mouse wheel and touchstart events:
document.addEventListener("wheel", handleZoom);
document.addEventListener("touchstart", handleZoom);
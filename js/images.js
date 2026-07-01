function toExchangeImage(thumbnail) {
    const mainImage = document.getElementById("img_main");

    mainImage.src = thumbnail.src;
    mainImage.alt = thumbnail.alt;

    document.querySelectorAll(".thumbnail-selected").forEach(el => {
        el.classList.remove("thumbnail-selected", "border-blue-500", "ring-2", "ring-blue-400");
    });

    const container = thumbnail.parentElement;
    container.classList.add("thumbnail-selected", "border-blue-500", "ring-2", "ring-blue-400");
}

window.addEventListener("DOMContentLoaded", () => {
    const first = document.querySelector("[onclick='toExchangeImage(this)']");
    if (first) {
        first.parentElement.classList.add("thumbnail-selected", "border-blue-500", "ring-2", "ring-blue-400");
    }
});
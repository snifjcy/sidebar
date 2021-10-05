toggleSidebar = (evt) => {
    evt?.stopPropagation();
    document.getElementById("sidebar").classList.toggle("open")
}
document.getElementById("openButton").addEventListener("click", toggleSidebar)
document.getElementById("closeButton").addEventListener("click", toggleSidebar)

document.getElementById("sidebar").addEventListener("click", (evt) => {
    evt.stopPropagation()
})

document.addEventListener("click", (event) => {
    if (document.getElementById("sidebar").classList.contains("open"))
        toggleSidebar()
})

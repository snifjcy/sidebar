toggleSidebar = () => {
    document.getElementById("sidebar").classList.toggle("open")
}
document.getElementById("openButton").addEventListener("click", toggleSidebar)
document.getElementById("closeButton").addEventListener("click", toggleSidebar)

document.getElementById("title").addEventListener("click", () => {
    if (document.getElementById("sidebar").classList.contains("open"))
        toggleSidebar()
})

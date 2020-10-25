toggleSidebar = () => {
    document.getElementById("sidebar").classList.toggle("open")
}
document.getElementById("openButton").addEventListener("click", toggleSidebar)
document.getElementById("closeButton").addEventListener("click", toggleSidebar)
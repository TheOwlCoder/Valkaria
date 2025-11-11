document.querySelector("#ip>span").addEventListener("click", e => {
    navigator.clipboard.writeText("127.0.0.1:8080")
})
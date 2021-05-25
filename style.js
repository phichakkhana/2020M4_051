document.getElementById("toggle").addEventListener("click", toggle);
document.getElementById("percent").addEventListener("click", percent);
function toggle() {
    current = -1 * current;
    document.getElementById("display").innerHTML = current;
}
function percent() {
    current = current / 100;
    document.getElementById("display").innerHTML = current;
}
let num = 0
let numberEl = document.getElementById("number")

function decrease() {
    num--;
    numberEl.innerHTML = num
}
function reset() {
    num = 0
    numberEl.innerHTML = num

}
function increase() {
    num++;
    numberEl.innerHTML = num
}
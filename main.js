let res = 0

document.getElementById("increase").onclick = function () {
    res = res + 1
    document.getElementById("result").textContent = `${res}`
}

document.getElementById("decrease").onclick = function () {
    res = res -1
    document.getElementById("result").textContent = `${res}`
}

document.getElementById("reset").onclick = function () {
    res = 0
    document.getElementById("result").textContent = `${res}`
}

const list = document.getElementById("list")
const add = document.getElementById("add_button")

let index = 1

add.addEventListener("click", function () {
    let element = document.createElement("li")
    element.textContent = "Task #" + index++;
    list.appendChild(element)
})
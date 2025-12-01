// const list = document.getElementById("list")
// const add = document.getElementById("add_button")

// let index = 1

// add.addEventListener("click", function () {
//     let element = document.createElement("li")
//     element.textContent = "Task #" + index++;
//     list.appendChild(element)
// })


// building the UI  without ReactJS

function render(children) {
    const app = document.getElementById("main")
    app.appendChild(children)
}

function h1(children) {
    const element = document.createElement("h1")
    element.appendChild(children)
    return element
}
function text(content) {
    return document.createTextNode(content)
}

render(h1(text("UI witout React")))
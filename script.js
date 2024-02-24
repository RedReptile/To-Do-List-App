const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("Fill the Field to see do-to list");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
        saveData(); // Save data after adding a task
    }
    inputBox.value = "";
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData(); // Save data after changing the class
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData(); // Save data after removing an item
    }
});

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();

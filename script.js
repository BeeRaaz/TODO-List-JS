const inputText = document.getElementById("inputText");
const listItems = document.getElementById("listItems"); 
const button = document.getElementById("btn");

button.addEventListener("click", function addTask() {
    if (inputText.value === "") {
        alert("You have to write something!!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputText.value;
        listItems.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputText.value = "";
    saveData();
})

listItems.addEventListener("click", function(a){
    if (a.target.tagName === "LI") {
        a.target.classList.toggle("checked");
        saveData();
    }
    else if (a.target.tagName === "SPAN") {
        a.target.parentElement.remove();
        saveData();
    }
}, false);
    
function saveData() {
    localStorage.setItem("data", listItems.innerHTML);
}

function showData() {
    listItems.innerHTML = localStorage.getItem("data");
}
showData();
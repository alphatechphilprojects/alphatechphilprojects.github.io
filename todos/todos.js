var addButton = document.querySelector("#add");
var removeButton = document.getElementById("remove");
var list = document.getElementById("list");

addButton.addEventListener("click", function(){
    var todo = document.querySelector("#inputToDo").value;
    document.getElementById("td").innerHTML = todo;
    var entry = document.createElement('li');
    entry.appendChild(document.createTextNode(todo));
    list.appendChild(entry);
    entry.addEventListener("click", function(){
        entry.classList.toggle("done");
    })
});

removeButton.addEventListener("click", function() {
    list.removeChild(list.childNodes[0]);
})
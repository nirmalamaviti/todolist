const newelement = document.getElementById("todoinput");
const todoList = document.getElementById("todolist");

function addbtnn() {
    if (newelement.value === '') {
        alert("Please Enter Something");
    } else {
        let list = document.createElement("li");
        list.innerHTML = newelement.value;
        todoList.insertAdjacentElement("beforeend", list);
       

        // Adding  X symbol

        let span = document.createElement("span");
        span.innerHTML = "Remove";
        list.insertAdjacentElement("beforeend", span);
        
    }
    newelement.value = '';
    storedata();
}

// "checked" or deleting 

todoList.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        if (event.target.classList.contains("checked")) {
            event.target.classList.remove("checked");
        } else {
            event.target.classList.add("checked");
        }
        storedata();
    } else if (event.target.tagName === "SPAN") {
        event.target.parentNode.remove();
        storedata();
    }
}, false);

// -----------------------------------------------------------------

function storedata(){
    localStorage.setItem("todoList", todoList.innerHTML); 
}

function displaytask(){
    const savedList = localStorage.getItem("todoList"); 
    if(savedList) {
        todoList.innerHTML = savedList; 
    }
}
displaytask();






























// function storedata(){
//     localStorage.setItem("data",todoList.innerHTML);
// }

// function displaytask(){
//     todoList.innerHTML=localStorage.getItem("data")
// }
// displaytask();


// todoList.addEventListener("click", function(event) {
//     if (event.target.tagName === "LI") {
//         event.target.classList.toggle("checked");
//     } else if (event.target.tagName === "SPAN") {
//         event.target.parentNode.remove();
//     }
// }, false);





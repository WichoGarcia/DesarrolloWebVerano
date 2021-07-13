var post  = document.getElementById("ButtonPost");
var clear  = document.getElementById("ButtonClear");
var mark  = document.getElementById("ButtonMark");
var del = document.getElementById("ButtonDelete");
 
post.addEventListener("click",TodoPost);
clear.addEventListener("click",TodoClear);
mark.addEventListener("click",TodoMark);
del.addEventListener("click",TodoDel);
 
function TodoPost(e){
e.preventDefault();
 
var to_do = document.getElementById("todoText").value;
var list = document.getElementById("todoList");
 
/*
var currentListHTML = list.innerHTML;
console.log(currentListHTML)
list.innerHTML = currentListHTML + `<input type = "checkbox" name="todo" class="prueba" /> ${to_do} <br>`
document.getElementById("todoText").value = "";*/

var div = document.createElement("div");
var cb = document.createElement("input");
var label = document.createElement("label");

cb.type="checkbox";
cb.name="todo";

label.textContent=to_do;

div.appendChild(cb);
div.appendChild(label);

list.appendChild(div);

to_do ="";

}
 
function TodoClear(){
    var markTodos = document.getElementsByName("todo");
    for(var i=0;i<markTodos.length;i++){
        markTodos[i].checked=false;
    }  
}
 
function TodoMark(){
    var markTodos = document.getElementsByName("todo");
    for(var i=0;i<markTodos.length;i++){
        markTodos[i].checked=true;
    }
}
 
function TodoDel(){
    var list = document.getElementsByName("todo");
    
 
    list.forEach(element=>{
        if(element.checked){
            element.parentElement.remove();
        }
    })

}
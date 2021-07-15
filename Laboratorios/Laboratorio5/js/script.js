var post  = $("#ButtonPost").on("click",TodoPost);
var clear  = $("#ButtonClear").on("click",TodoClear);
var mark  = $("#ButtonMark").on("click",TodoMark);
var del = $("#ButtonDelete").on("click",TodoDel);

function TodoPost(e){
e.preventDefault();
 
var to_do = $("#todoText").val();
var list = $("#todoList");
 
/*
var currentListHTML = list.innerHTML;
console.log(currentListHTML)
list.innerHTML = currentListHTML + `<input type = "checkbox" name="todo" class="prueba" /> ${to_do} <br>`
document.getElementById("todoText").value = "";*/

var div = $("<div>");
var cb = $("<input>");
var label = $("<label>");

cb.attr("type","checkbox");
cb.attr("name","todo");

label.text(to_do);

div.append(cb);
div.append(label);

list.append(div);

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
var post = $(".agregar").on("click",listPost);

function listPost(e){
    e.preventDefault();

    var producto = $("#newText").val();
    var list = $(".Lista");

    var div = $("<div>");
    var label = $("<label>");
    var section =$("<section>");
    var bMark=$("<button>");
    var bDelete=$("<button>");

    div.attr("class","producto");
    section.attr("class","botones");
    bMark.attr("class","check");
    bDelete.attr("class","delete");
    bMark.html("Check");
    bDelete.html("Delete");
    label.attr("class","textoP")

    label.html(producto);


    div.append(label);
    section.append(bMark);
    section.append(bDelete);
    div.append(section);
    list.append(div);

    var counter=0;

    var checa=$(".producto").on("click",".check",function(){
        if(counter % 2 ==0){
        label.css("text-decoration","line-through");
        counter++;
        }
        else{
            label.css("text-decoration","none");
            counter++;
        }
    });  

    var borra=$(".producto").on("click",".delete",function(){
        $(this).parent().parent().remove();
    });
}


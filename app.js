window.addEventListener ("load", function(){
   var boton = document.getElementById ("button");
   boton.addEventListener("click", function(e)    {
      e.preventDefault();
      var textArea = document.getElementById("text").value;
      var newItem = document.createElement("div");
      newItem.innerText = textArea;
      var contenedor = document.getElementById("contenedor");
      contenedor.insertBefore(newItem,contenedor.childNodes[0]);
      textArea.value = "";
   });
    
    function agregaMensaje () {
var div = document.createElement("div");
div.innerText = texto;
var mensajes = document.getElementById("mensajes");
mensajes.inserBefore(div, mensajes.childNodes[0]);
}
});
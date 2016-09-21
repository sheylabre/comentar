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
// versión 0.0.2

//Para que agrande la barra de texarea
var textarea = document.querySelector('textarea');

textarea.addEventListener('keydown', function(){
    autosize();
});
             
function autosize(){
    textarea.style.cssText = 'height:auto; padding:0';
    textarea.style.cssText = 'height:' + textarea.scrollHeight + 'px';
}


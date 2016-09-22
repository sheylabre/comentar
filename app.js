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

    text.addEventListener("keyup",function(e){
        button.disabled = false;
        var tec = e.keyCode;
        var limite = 140;
        var longitud = document.getElementById("text").value.length;
        var contador =  document.getElementById("cont")
        contador.innerText = limite-longitud;
            if( longitud == 0 ){
                 button.disabled = true;
            }else if(longitud>limite){
                 button.disabled = true;
            }else if(longitud>120){
                 contador.classList.add("blue");
            }else{
                 contador.classList.remove("blue");
            
            }if(longitud>130){
                 contador.classList.add("rojo");
            }
            else{
                 contador.classList.remove("rojo");
            }
        });

//Para que agrande la barra de texarea
var textarea = document.querySelector('textarea');

textarea.addEventListener('keydown', function(){
    autosize();
});
             
function autosize(){
    textarea.style.cssText = 'height:auto; padding:0';
    textarea.style.cssText = 'height:' + textarea.scrollHeight + 'px';
}






























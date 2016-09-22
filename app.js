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
// versión 0.0.2 & verison 0.0.3

    text.addEventListener("keyup",function(e){
        button.disabled = false;
        var tec = e.keyCode;
        var limite = 140;
        var letras = document.getElementById("text").value.length;
        var contador =  document.getElementById("cont")
        contador.innerText = limite-letras;
            if( letras == 0 ){
                 button.disabled = true;
            }else if(letras>limite){
                 button.disabled = true;
            }else if(letras>120){
                 contador.classList.add("azul");
            }else{
                 contador.classList.remove("azul");
            
            }if(letras>130){
                 contador.classList.add("rojo");
            }
            else{
                 contador.classList.remove("rojo");
            }
        });
// version 0.0.4
   function expandirTextArea(tecla) {
         var textArea= document.getElementById("textArea");
         if (tecla == 13) {     
             textArea.rows += 1;     
         }else if(tecla == 8){
             textArea.rows -= 1; 
         }if(textArea.rows < 5){
             textArea.rows = 4;
         }
    }

//Para que agrande la barra de texarea version 0.0.5
var textarea = document.querySelector('textarea');

textarea.addEventListener('keydown', function(){
    autosize();
});
             
function autosize(){
    textarea.style.cssText = 'height:auto; padding:0';
    textarea.style.cssText = 'height:' + textarea.scrollHeight + 'px';
}































function validarString() {
   let valor = document.getElementById("input").value;
   console.log(valor);
   let msg = "hola";
   let headingElement = document.getElementById("modified-string");
   if (valor == msg) {
      headingElement.innerHTML = "Verdadero";
   } else {
      headingElement.innerHTML = "Falso";
   }

}
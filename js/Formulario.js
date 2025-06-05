document.addEventListener("DOMContentLoaded", function() {
  let campos = document.querySelectorAll("#miFormulario input");

  campos.forEach(campo => {
    campo.addEventListener("focus", function() {
      this.style.backgroundColor = "#a8fff3";
     
    });

    campo.addEventListener("blur", function() {
      this.style.backgroundColor = "";
    });
  });
});




const formulario = document.getElementById("miFormulario");

if (formulario) {
  formulario.addEventListener("submit", function(event) {
    event.preventDefault(); 
    alert("¡Enviado exitosamente!");
    
  });
}

function redirigirMapa() {
    const localidades = {
        "Moloacan": "https://www.google.com/maps?q=Moloacan",
        "Choapas": "https://www.google.com/maps?q=Las+Choapas",
        "AguaDulce": "https://www.google.com/maps?q=Agua+Dulce",
        "Cuichichapa": "https://www.google.com/maps?q=Cuichapa"
    };

    let seleccion = document.getElementById("lista").value;
    
    if (seleccion) {
        window.open(localidades[seleccion], "_blank");
        setTimeout(enviarWhatsApp, 500); 
    } else {
        alert("Por favor, selecciona una localidad antes de continuar.");
    }
}

function enviarWhatsApp() {
    let seleccion = document.getElementById("lista").value;
    let numeroWhatsApp = "5212292443800"; 

    if (seleccion) {
        let mensaje = `Hola, estoy interesado en la localidad de ${seleccion}. ¿Me podrías dar más información?`;
        let urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

        window.open(urlWhatsApp, "_blank");
    } else {
        alert("Por favor, selecciona una localidad antes de enviar el mensaje.");
    }
}

document.getElementById("whatsappBtn").addEventListener("click", redirigirMapa);

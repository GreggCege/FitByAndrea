document.addEventListener("DOMContentLoaded", function () {
    const whatsAppLink = "https://wa.me/5519000420"; // TU NÚMERO DE WHATSAPP AQUÍ

    // --- 1. Formulario Especial para "Agendar Cita" (en agendarCita.html) ---
    const formAgendar = document.getElementById("agendar-form");
    if (formAgendar) {
        formAgendar.addEventListener("submit", function (event) {
            event.preventDefault(); // Evita recargar la página

            const nombre = document.getElementById("agendar-name").value;
            const telefono = document.getElementById("agendar-phone").value;

            const objetivoEl = document.getElementById("agendar-goal");
            const objetivoText = objetivoEl.options[objetivoEl.selectedIndex].text;

            const nivelEl = document.getElementById("agendar-level");
            const nivelText = nivelEl.options[nivelEl.selectedIndex].text;

            const horarioEl = document.getElementById("agendar-time");
            const horarioText = horarioEl.options[horarioEl.selectedIndex].text;

            const mensajeWhatsApp = `¡Hola Andrea!\n\n` +
                `Me gustaría agendar una cita para mi asesoría. Aquí están mis datos:\n\n` +
                `*Nombre:* ${nombre}\n` +
                `*WhatsApp:* ${telefono}\n` +
                `*Objetivo:* ${objetivoText}\n` +
                `*Nivel:* ${nivelText}\n` +
                `*Horario preferido:* ${horarioText}\n\n` +
                `¡Quedo a la espera de confirmación!`;

            window.open(`${whatsAppLink}?text=${encodeURIComponent(mensajeWhatsApp)}`, "_blank");
            formAgendar.reset(); // Limpia el formulario
        });
    }

    // --- 2. Formulario de Contacto Original (en index.html) ---
    // En index.html el formulario de contacto no tiene id, pero tiene inputs con id="name", etc.
    // Solo añadimos el event listener si encontramos el campo de nombre del contacto general.
    const nombreGeneralInput = document.getElementById("name");
    if (nombreGeneralInput) {
        // Encontramos el formulario buscando el padre (closest form)
        const formContacto = nombreGeneralInput.closest("form");
        if (formContacto) {
            formContacto.addEventListener("submit", function (event) {
                event.preventDefault();

                const nombre = document.getElementById("name").value;
                const telefono = document.getElementById("phone").value;
                const email = document.getElementById("email").value;

                const objetivoEl = document.getElementById("goal");
                const objetivoText = objetivoEl.options[objetivoEl.selectedIndex].text;

                const mensaje = document.getElementById("message").value;

                let mensajeWhatsApp = `¡Hola Andrea!\n\n` +
                    `Quiero pedir más información general sobre tus planes:\n\n` +
                    `*Nombre:* ${nombre}\n` +
                    `*Teléfono:* ${telefono}\n` +
                    `*Correo:* ${email}\n` +
                    `*Objetivo:* ${objetivoText}\n`;

                if (mensaje) {
                    mensajeWhatsApp += `*Comentario:* ${mensaje}\n`;
                }

                window.open(`${whatsAppLink}?text=${encodeURIComponent(mensajeWhatsApp)}`, "_blank");
                formContacto.reset();
            });
        }
    }

    // --- 4. Botones de Planes de Servicio ---
    const botonesPlanes = document.querySelectorAll(".btn-plan");
    botonesPlanes.forEach(boton => {
        boton.addEventListener("click", function (event) {
            event.preventDefault();
            const nombrePlan = this.getAttribute("data-plan");
            const mensajeWhatsApp = `¡Hola Andrea!\n\n` +
                `Estoy muy interesado/a en el *${nombrePlan}*.\n` +
                `¿Me podrías dar más información sobre cómo empezar?`;

            window.open(`${whatsAppLink}?text=${encodeURIComponent(mensajeWhatsApp)}`, "_blank");
        });
    });
});

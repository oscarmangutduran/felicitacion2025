// Referencias a los elementos
const btn = document.getElementById('btnMagic');
const audio = document.getElementById('carol');
const input = document.getElementById('userName');
const inputSection = document.getElementById('input-section');
const messageContainer = document.getElementById('messageContainer');
const greetingText = document.getElementById('personalizedGreeting');
const wishText = document.querySelector('.wish-text');

btn.addEventListener('click', () => {
    const rawName = input.value.trim();

    if (rawName !== "") {
        // --- LÓGICA DE FORMATO (Capitalización) ---
        // Tomamos la primera letra en mayúscula y el resto en minúscula
        const formattedName = rawName.charAt(0).toUpperCase() + rawName.slice(1).toLowerCase();
        
        // Para la comparación lógica, usamos todo en minúsculas
        const nameLow = formattedName.toLowerCase();

        // 1. Ocultar el formulario
        inputSection.style.display = 'none';

        // 2. Lógica de mensajes personalizados
        if (nameLow === "ceci" || nameLow === "cecilia") {
            greetingText.innerText = `¡Feliz Navidad, ${formattedName}!`;
            wishText.innerText = "Por la primera navidad de muchas. Sigamos sumando momentos";
        } else {
            greetingText.innerText = `¡Feliz Navidad, ${formattedName}!`;
            wishText.innerText = "Que la magia de estas fiestas ilumine tu hogar y te traiga mucha felicidad.";
        }

        // 3. Mostrar el contenedor de la felicitación
        messageContainer.classList.remove('hidden');

        // 4. Reproducir el villancico
        audio.volume = 0.4;
        audio.play().catch(error => {
            console.log("Error al reproducir audio:", error);
        });
    } else {
        alert("Por favor, dinos tu nombre para poder felicitarte.");
    }
});
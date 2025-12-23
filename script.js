// Referencias a los elementos
const btn = document.getElementById('btnMagic');
const audio = document.getElementById('carol');
const input = document.getElementById('userName');
const inputSection = document.getElementById('input-section');
const messageContainer = document.getElementById('messageContainer');
const greetingText = document.getElementById('personalizedGreeting');

btn.addEventListener('click', () => {
    const name = input.value.trim();

    if (name !== "") {
        // 1. Ocultar la sección del formulario completamente
        inputSection.style.display = 'none';

        // 2. Insertar el nombre y mostrar la felicitación
        greetingText.innerText = `¡Feliz Navidad, ${name}!`;
        messageContainer.classList.remove('hidden');

        // 3. Reproducir el villancico
        // El navegador permite el audio porque viene de una acción del usuario (clic)
        audio.volume = 0.4; // Volumen moderado
        audio.play().catch(error => {
            console.log("Error al reproducir audio:", error);
        });
    } else {
        alert("Por favor, dinos tu nombre para poder felicitarte.");
    }
});
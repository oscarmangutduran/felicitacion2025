// Referencias a los elementos
const btn = document.getElementById('btnMagic');
const audio = document.getElementById('carol');
const input = document.getElementById('userName');
const inputSection = document.getElementById('input-section');
const messageContainer = document.getElementById('messageContainer');
const greetingText = document.getElementById('personalizedGreeting');
// Añadimos referencia al párrafo del deseo
const wishText = document.querySelector('.wish-text');

btn.addEventListener('click', () => {
    const rawName = input.value.trim();
    const nameLow = rawName.toLowerCase(); // Convertimos a minúsculas para comparar

    if (rawName !== "") {
        // 1. Ocultar la sección del formulario completamente
        inputSection.style.display = 'none';

        // 2. Lógica de mensajes personalizados
        if (nameLow === "ceci" || nameLow === "cecilia") {
            greetingText.innerText = `¡Feliz Navidad, ${rawName}!`;
            wishText.innerText = "Por la primera navidad de muchas. Sigamos sumando momentos";
        } else {
            // Mensaje por defecto para los demás
            greetingText.innerText = `¡Feliz Navidad, ${rawName}!`;
            wishText.innerText = "Que la magia de estas fiestas ilumine tu hogar y el de tú familia";
        }

        // 3. Mostrar el contenedor
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
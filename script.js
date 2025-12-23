const btn = document.getElementById('btnMagic');
const audio = document.getElementById('carol');
const input = document.getElementById('userName');
const inputSection = document.getElementById('input-section');
const messageContainer = document.getElementById('messageContainer');
const greetingText = document.getElementById('personalizedGreeting');
const wishText = document.querySelector('.wish-text');

// Elementos del Regalo y Popup
const giftButton = document.getElementById('giftButton');
const photoModal = document.getElementById('photoModal');
const closeModal = document.getElementById('closeModal');

btn.addEventListener('click', () => {
    const rawName = input.value.trim();

    if (rawName !== "") {
        // Formatear nombre: Primera Mayúscula
        const formattedName = rawName.charAt(0).toUpperCase() + rawName.slice(1).toLowerCase();
        const nameLow = formattedName.toLowerCase();

        // 1. Desaparece el formulario
        inputSection.style.display = 'none';

        // 2. Personalizar textos
        greetingText.innerText = `¡Feliz Navidad, ${formattedName}!`;
        
        if (nameLow === "ceci" || nameLow === "cecilia") {
            wishText.innerText = "Por la primera navidad de muchas. Sigamos sumando momentos";
        } else {
            wishText.innerText = "Que la magia de estas fiestas te traiga mucha felicidad y alegría.";
        }

        // 3. Mostrar felicitación y sonar música
        messageContainer.classList.remove('hidden');
        audio.volume = 0.5;
        audio.play().catch(e => console.log("Error audio:", e));
    } else {
        alert("Por favor, escribe un nombre.");
    }
});

// EVENTO: Abrir el popup al pinchar el regalo
giftButton.addEventListener('click', () => {
    photoModal.classList.remove('hidden');
});

// EVENTO: Cerrar el popup al pinchar la 'X'
closeModal.addEventListener('click', () => {
    photoModal.classList.add('hidden');
});

// EVENTO: Cerrar el popup si pinchan fuera de la foto
window.addEventListener('click', (e) => {
    if (e.target === photoModal) {
        photoModal.classList.add('hidden');
    }
});
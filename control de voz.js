const startBtn = document.getElementById('start-btn');
const output = document.getElementById('output');
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.interimResults = true;
recognition.lang = 'es-ES';

startBtn.addEventListener('click', () => {
    recognition.start();
});

recognition.addEventListener('result', (event) => {
    const transcript = event.results[event.resultIndex][0].transcript;
    output.textContent = `Comando recibido: ${transcript}`;

    // Comandos para navegar a diferentes direcciones
    if (transcript.includes('ir a hoster')) {
        window.location.href = 'https://www.hostinger.mx/dominios';
    } else if (transcript.includes('ir a YouTube')) {
        window.location.href = 'https://www.youtube.com';
    } else if (transcript.includes('ir a Wikipedia')) {
        window.location.href = 'https://www.wikipedia.org';
    } else if (transcript.includes('ir a Facebook')) {
        window.location.href = 'https://www.facebook.com';
    }
});

recognition.addEventListener('end', recognition.start);

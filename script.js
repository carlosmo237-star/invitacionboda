// CONFIGURACIÓN FECHA: 22 de Agosto de 2026
const fechaBoda = new Date("Aug 22, 2026 17:00:00").getTime();

// Contador
const x = setInterval(function() {
    const ahora = new Date().getTime();
    const d = fechaBoda - ahora;

    document.getElementById("dias").innerHTML = Math.floor(d / 86400000);
    document.getElementById("horas").innerHTML = Math.floor((d % 86400000) / 3600000);
    document.getElementById("minutos").innerHTML = Math.floor((d % 3600000) / 60000);
    document.getElementById("segundos").innerHTML = Math.floor((d % 60000) / 1000);

    if (d < 0) {
        clearInterval(x);
        document.getElementById("cuentaRegresiva").innerHTML = "¡HOY ES EL GRAN DÍA!";
    }
}, 1000);

// Iniciar música al primer clic en la página (para saltar el bloqueo del navegador)
document.body.addEventListener('click', function() {
    const musica = document.getElementById('miCancion');
    if (musica.paused) {
        musica.play();
    }
}, { once: true });

function toggleMusica() {
    const musica = document.getElementById('miCancion');
    const btn = document.getElementById('btnControl');
    if (musica.paused) {
        musica.play();
        btn.innerText = "Pausar Música ⏸";
    } else {
        musica.pause();
        btn.innerText = "Reanudar Música ▶";
    }
}

function confirmarWhatsApp() {
    const miTelefono = "522223566143"; 
    const mensaje = encodeURIComponent("¡Hola! 👋 Confirmo mi asistencia a la boda. ¡Nos vemos pronto! 🥂");
    window.open(`https://wa.me/${miTelefono}?text=${mensaje}`, '_blank');
}
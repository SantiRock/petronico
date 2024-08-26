const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('play_pause');
const seekBar = document.getElementById('seek_bar');
const currentTimeSpan = document.getElementById('current_time');
const durationSpan = document.getElementById('duration');

// Reproducir/Pausar
playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseBtn.innerHTML = '<b>I I</b>';
    } else {
        audio.pause();
        playPauseBtn.innerHTML = '&#9654;';
    }
});

// Actualizar la barra de progreso y el tiempo actual
audio.addEventListener('timeupdate', () => {
    seekBar.value = (audio.currentTime / audio.duration) * 100;
    currentTimeSpan.textContent = formatTime(audio.currentTime);
});

// Actualizar la duración total



durationSpan.textContent = formatTime(audio.duration);

audio.addEventListener('loadedmetadata', () => {
    durationSpan.textContent = formatTime(audio.duration);
});

// Cambiar la posición de la canción al mover la barra de progreso
seekBar.addEventListener('input', () => {
    audio.currentTime = (seekBar.value / 100) * audio.duration;
});

// Formatear el tiempo en minutos:segundos
function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
}

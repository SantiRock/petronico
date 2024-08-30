const info = document.getElementById('info_w');

info.addEventListener('click', function (e) {
    e.preventDefault();
    const targetElement = document.getElementById('audio_player');

    const offsetPosition = targetElement.offsetTop - 15;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
});



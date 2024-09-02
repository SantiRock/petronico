const info = document.getElementById('info_w');

info.addEventListener('click', function (e) {
    e.preventDefault();
    const targetElement = document.getElementById('audio_player');
    console.log(targetElement)

    const offsetPosition = targetElement.offsetTop + 30;
    console.log(offsetPosition);

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
});



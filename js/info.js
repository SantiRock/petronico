const info = document.getElementById('info');
const text = document.getElementById('text');


/*
info.addEventListener('mouseover', function() {
    text.style.opacity = '1'; 
})

info.addEventListener('mouseout', function() {
    text.style.opacity = '0';
})

text.addEventListener('mouseover', function() {
    text.style.opacity = '1'; 
})

text.addEventListener('mouseout', function() {
    text.style.opacity = '0';
})*/



const mediaQuery = window.matchMedia('(min-width: 640px)');

function handleLargeScreen(event) {

    if (event.matches) {
        text.style.opacity = '0';

        info.addEventListener('mouseover', function() {
            text.style.opacity = '1'; 
        })
        
        info.addEventListener('mouseout', function() {
            text.style.opacity = '0';
        })
        
        text.addEventListener('mouseover', function() {
            text.style.opacity = '1'; 
        })
        
        text.addEventListener('mouseout', function() {
            text.style.opacity = '0';
        })

        info.addEventListener('touchstart', function() {
            text.style.opacity = '1'; 
        })
        
        info.addEventListener('touchend', function() {
            text.style.opacity = '0';
        })
        
        text.addEventListener('touchstart', function() {
            text.style.opacity = '1'; 
        })
        
        text.addEventListener('touchend', function() {
            text.style.opacity = '0';
        })

    } else {
       text.style.opacity = '1';

       info.addEventListener('mouseout', function() {
        text.style.opacity = '1';
       })

       text.addEventListener('mouseout', function() {
        text.style.opacity = '1';
       })

       info.addEventListener('touchend', function() {
        text.style.opacity = '1';
       })

       text.addEventListener('touchend', function() {
        text.style.opacity = '1';
    })       

    }
}

handleLargeScreen(mediaQuery);

mediaQuery.addEventListener('change', handleLargeScreen)



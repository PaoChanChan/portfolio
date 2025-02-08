document.addEventListener('DOMContentLoaded', function() {
    const svgs = document.querySelectorAll('.svg-image');
    let currentIndex = 0;

    function showNextSVG() {
        svgs[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % svgs.length;
        svgs[currentIndex].classList.add('active');
    }

    setInterval(showNextSVG, 2000); // Cambia cada 1 segundo

    // Inicializa el primer SVG como activo
    svgs[currentIndex].classList.add('active');

    const svgContainer = document.querySelector('.svg-container');
    const description = document.getElementById('description');
    const closeButton = document.getElementById('close-description');

    svgContainer.addEventListener('click', function() {
        description.classList.add('d-block');
        setTimeout(() => {
            description.scrollIntoView({ behavior: 'smooth' });
        }, 300);
    });

    closeButton.addEventListener('click', function() {
        description.classList.add('flip-out');
        setTimeout(() => {
            description.classList.remove('d-block', 'flip-out');
        }, 300); // Duración de la animación
    });

    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });

    document.addEventListener('mousedown', () => {
        cursor.classList.add('active');
    });

    document.addEventListener('mouseup', () => {
        cursor.classList.remove('active');
    });

    const scrollingContent = document.querySelector('.scrolling-content');
    const clone = scrollingContent.cloneNode(true);
    scrollingContent.parentNode.appendChild(clone);
    
    

});
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

    // TOP NAV

    const topNav = document.querySelector('.top-nav');

    // Mostrar el nav al cargar la página
    setTimeout(() => {
        topNav.classList.add('hidden');
    }, 3000); // Ocultar después de 3 segundos

    // Mostrar el nav al hacer scroll
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            topNav.classList.add('hidden');
        } else {
            topNav.classList.remove('hidden');
        }
        lastScrollTop = scrollTop;
    });

    // Mostrar el nav al pasar el ratón por la parte superior
    topNav.addEventListener('mouseenter', function() {
        topNav.classList.remove('hidden');
    });

    topNav.addEventListener('mouseleave', function() {
        if (window.pageYOffset > 0) {
            topNav.classList.add('hidden');
        }
    });

    // Desplazamiento suave al hacer clic en los enlaces del nav
    document.querySelectorAll('.top-nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });
    
    

});
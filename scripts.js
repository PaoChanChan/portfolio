document.addEventListener('DOMContentLoaded', function() {
    // SVG Animation
    const svgs = document.querySelectorAll('.svg-image');
    let currentIndex = 0;

    function showNextSVG() {
        svgs[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % svgs.length;
        svgs[currentIndex].classList.add('active');
    }

    setInterval(showNextSVG, 2000); // Cambia cada 2 segundos

    // Inicializa el primer SVG como activo
    svgs[currentIndex].classList.add('active');

    // Description Toggle
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

    // Custom Cursor
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

    // Scrolling Content Clone
    const scrollingContent = document.querySelector('.scrolling-content');
    const clone = scrollingContent.cloneNode(true);
    scrollingContent.parentNode.appendChild(clone);

    // Top Nav
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

    // Slider
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentIndexSlider = 0;

    function showSlide(index) {
        if (index >= slides.length) {
            currentIndexSlider = 0;
        } else if (index < 0) {
            currentIndexSlider = slides.length - 1;
        } else {
            currentIndexSlider = index;
        }
        slider.style.transform = `translateX(-${currentIndexSlider * 100}%)`;
    }

    prevButton.addEventListener('click', function() {
        showSlide(currentIndexSlider - 1);
    });

    nextButton.addEventListener('click', function() {
        showSlide(currentIndexSlider + 1);
    });

    
    setInterval(function() {
         showSlide(currentIndexSlider + 1);
   }, 5000);

    const bubblesContainer = document.querySelector('.bubbles-container');

    function createBubble() {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        bubble.style.left = `${Math.random() * 100}%`;
        bubble.style.animationDuration = `${Math.random() * 3 + 2}s`; // Duración aleatoria entre 2 y 5 segundos
        bubblesContainer.appendChild(bubble);

        // Eliminar la burbuja después de que termine la animación
        bubble.addEventListener('animationend', () => {
            bubble.remove();
        });
    }

    // Crear burbujas a intervalos regulares
    setInterval(createBubble, 500); // Crear una burbuja cada 500ms


    // ANIMACIÓN DEL TITULAR DE EXPERIENCIA

    const exp = document.querySelector('.animate-on-scroll');
    const letters = exp.textContent.split('');
    exp.textContent = '';

    letters.forEach((letter, index) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.animationDelay = `${index * 0.1}s`;
        exp.appendChild(span);
    });

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function onScroll() {
        if (isElementInViewport(exp)) {
            exp.querySelectorAll('span').forEach(span => {
                span.classList.add('visible');
            });

            // Revertir la animación después de 3 segundos
            setTimeout(() => {
                exp.querySelectorAll('span').forEach(span => {
                    span.classList.add('reverse');
                });
            }, 3000);
        } else {
            exp.querySelectorAll('span').forEach(span => {
                span.classList.remove('visible');
                span.classList.remove('reverse');
            });
        }
    }

    window.addEventListener('scroll', onScroll);
    onScroll();
});
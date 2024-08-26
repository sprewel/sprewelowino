document.addEventListener('DOMContentLoaded', () => {
    // Set date and time
    const dateElement = document.getElementById('date');
    const timeElement = document.getElementById('time');
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const now = new Date();

    dateElement.textContent = now.toLocaleDateString(undefined, options);
    timeElement.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // Carousel functionality
 
    const carousel = document.querySelector('.carousel')
    const indicators = document.querySelectorAll('.circle');
    let isDown = false;
    let startX;
    let scrollLeft;

    

    carousel.addEventListener('mousedown', (e) => {
        isDown = true;
        carousel.classList.add('active');
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
    });
    
    carousel.addEventListener('mouseleave', () => {
        isDown = false;
        carousel.classList.remove('active');
    });
    
    carousel.addEventListener('mouseup', () => {
        isDown = false;
        carousel.classList.remove('active');
    });
    
    carousel.addEventListener('mousemove', (e) => {
        if (!isDown) return; // Stop the function from running
        e.preventDefault();
        const x = e.pageX - scrollContainer.offsetLeft;
        const walk = (x - startX) * 2; // Multiply by 2 for faster scrolling
        scrollContainer.scrollLeft = scrollLeft - walk;
    });

    carousel.addEventListener('scroll', () => {
        const index = Math.round(carousel.scrollLeft / carousel.clientWidth);
        if (index !== currentIndex) {
            indicators[currentIndex].classList.remove('active');
            indicators[index].classList.add('active');
            currentIndex = index;
        }
    });

    // Custom cursor
    const cursor = document.createElement('div');
    cursor.classList.add('cursor');
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.pageX}px`;
        cursor.style.top = `${e.pageY}px`;
    });

    const rectangle = document.querySelector('.rectangle');
    
    rectangle.addEventListener('mouseenter', () => {
        cursor.classList.add('big');
        cursor.textContent = 'drag';
    });

    rectangle.addEventListener('mouseleave', () => {
        cursor.classList.remove('big');
        cursor.textContent = '';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Set date and time
    const dateElement = document.getElementById('date');
    const timeElement = document.getElementById('time');
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const now = new Date();

    dateElement.textContent = now.toLocaleDateString(undefined, options);
    timeElement.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // Carousel functionality
    const carousel = document.querySelector('.carousel');
    const indicators = document.querySelectorAll('.circle');
    let isDown = false;
    let startX;
    let scrollLeft;
    let currentIndex = 0;

    carousel.addEventListener('mousedown', (e) => {
        isDown = true;
        carousel.classList.add('active');
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener('mouseleave', () => {
        isDown = false;
        carousel.classList.remove('active');
    });

    carousel.addEventListener('mouseup', () => {
        isDown = false;
        carousel.classList.remove('active');
    });

    carousel.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 2; // Multiply by 2 for faster scrolling
        carousel.scrollLeft = scrollLeft - walk;
    });

    carousel.addEventListener('scroll', () => {
        const index = Math.round(carousel.scrollLeft / carousel.clientWidth);
        if (index !== currentIndex) {
            indicators[currentIndex].classList.remove('active');
            indicators[index].classList.add('active');
            currentIndex = index;
        }
    });

    // Custom cursor
    const cursor = document.createElement('div');
    cursor.classList.add('cursor');
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.pageX}px`;
        cursor.style.top = `${e.pageY}px`;
    });

    const rectangle = document.querySelector('.rectangle');

    rectangle.addEventListener('mouseenter', () => {
        cursor.classList.add('big');
        cursor.textContent = 'drag';
    });

    rectangle.addEventListener('mouseleave', () => {
        cursor.classList.remove('big');
        cursor.textContent = '';
    });

    // Orientation change detection
    const rotateMessage = document.getElementById('rotate-message');

    function checkOrientation() {
        if (window.innerHeight > window.innerWidth) {
            rotateMessage.style.display = 'block';
        } else {
            rotateMessage.style.display = 'none';
        }
    }

    window.addEventListener('resize', checkOrientation);
    checkOrientation(); // Initial check
});

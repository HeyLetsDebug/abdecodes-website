document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const offset = window.innerWidth > 768 ? 90 : 0; // Adjust this value as needed
        const target = document.querySelector(this.getAttribute('href'));
        const targetOffset = target.offsetTop - offset;

        window.scrollTo({
            top: targetOffset,
            behavior: 'smooth'
        });
    });
});
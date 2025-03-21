document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll('.lazy');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(image => {
        observer.observe(image);
    });


    const lastVisit = localStorage.getItem('lastVisit');
    const currentDate = new Date();

    if (lastVisit) {
        const lastVisitDate = new Date(lastVisit);
        const timeDifference = Math.floor((currentDate - lastVisitDate) / (1000 * 3600 * 24)); // Difference in days
        const message = document.getElementById('visitor-message');

        if (timeDifference === 0) {
            message.textContent = "Back so soon! Awesome!";
        } else if (timeDifference === 1) {
            message.textContent = "You last visited 1 day ago.";
        } else if (timeDifference > 1) {
            message.textContent = `You last visited ${timeDifference} days ago.`;
        }
    } else {
        const message = document.getElementById('visitor-message');
        message.textContent = "Welcome! Let us know if you have any questions.";
    }

    localStorage.setItem('lastVisit', currentDate.toString());
});
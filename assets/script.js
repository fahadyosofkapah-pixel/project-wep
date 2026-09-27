 section {
    opacity: 0;
    transform: translateY(40px);
    transition: all 0.8s ease;
}

section.show {
    opacity: 1;
    transform: translateY(0);
}



const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

sections.forEach((section) => {
    observer.observe(section);
});
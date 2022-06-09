const faders = document.querySelectorAll(".fade-in");

const options = {
    root: null,
    threshold: 0,
    rootMargin: "-150px"
};

const appearOnScroll = new IntersectionObserver(function(
    entries,
     observer
) {
    entries.forEach(entry => {
        console.log(entry)
        if (!entry.isIntersecting) {
            return;
        } else {
            console.log('add class');
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    })
}, options);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
})


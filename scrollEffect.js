document.addEventListener('scroll', function() {
    const explainElement = document.querySelector('.explain');
    const scrollPosition = window.scrollY;
    const maxScroll = window.innerHeight - explainElement.clientHeight;

    if (scrollPosition > 0) {
        explainElement.style.backgroundColor = `rgba(255, 255, 255, ${1 - scrollPosition / maxScroll})`;
    } else {
        explainElement.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
    }
});

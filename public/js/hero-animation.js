document.addEventListener('DOMContentLoaded', function() {
    const heroTitle = document.querySelector('.hero-title');
    if (!heroTitle) return;

    // Split the text into words and wrap each word
    const words = heroTitle.textContent.trim().split(' ');
    heroTitle.innerHTML = words.map(word => {
        const firstLetter = word.charAt(0);
        const restOfWord = word.slice(1);
        return `<span class="hero-word"><span class="first-letter">${firstLetter}</span>${restOfWord}</span>`;
    }).join(' ');

    // Add hover event listeners
    const heroWords = heroTitle.querySelectorAll('.hero-word');
    heroWords.forEach(word => {
        word.addEventListener('mouseenter', function() {
            this.querySelector('.first-letter').style.color = '#FFFFFF';
        });
        word.addEventListener('mouseleave', function() {
            this.querySelector('.first-letter').style.color = '';
        });
    });
}); 
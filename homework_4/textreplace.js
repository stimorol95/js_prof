let text = document.querySelector('.text-container');
document.querySelector('.replace__button').addEventListener('click', () => {
    text.textContent = text.textContent.replace(/\B'|'\B/g, '"');
});
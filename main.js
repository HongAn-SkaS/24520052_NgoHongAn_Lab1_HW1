const themeButton = document.querySelector('#theme-btn');
const body = document.body;

const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark' || savedTheme === 'light') {
    body.classList.toggle('dark-theme', savedTheme === 'dark');
}

if (themeButton) {
    themeButton.setAttribute(
        'aria-pressed',
        String(body.classList.contains('dark-theme'))
    );

    themeButton.addEventListener('click', () => {
        const isDark = body.classList.toggle('dark-theme');

        themeButton.setAttribute('aria-pressed', String(isDark));

        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
}
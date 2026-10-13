const themeButton = document.querySelector('#theme-btn');
const body = document.body;

let savedTheme = null;

try {
    savedTheme = localStorage.getItem('theme');
} catch (error) {
    // Continue with the default theme if storage is unavailable.
}

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

        try {
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        } catch (error) {
            // Theme still changes for the current page.
        }
    });
}
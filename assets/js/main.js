// Dark mode toggle
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const root = document.documentElement;

function setTheme(mode) {
  if (mode === 'dark') {
    root.classList.add('dark');
    themeIcon.textContent = '☀️';
  } else {
    root.classList.remove('dark');
    themeIcon.textContent = '🌙';
  }
}

const storedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
setTheme(storedTheme || (systemPrefersDark ? 'dark' : 'light'));

themeToggle.addEventListener('click', () => {
  const isDark = root.classList.contains('dark');
  const newTheme = isDark ? 'light' : 'dark';
  setTheme(newTheme);
  localStorage.setItem('theme', newTheme);
});

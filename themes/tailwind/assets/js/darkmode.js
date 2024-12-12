const colorSchemeKey = 'StackColorScheme';

if (!localStorage.getItem(colorSchemeKey)) {
  localStorage.setItem(colorSchemeKey, 'auto');
}

const changeScheme = () => {
  const colorSchemeItem = localStorage.getItem(colorSchemeKey);

  if (colorSchemeItem === 'dark') {
    localStorage.setItem(colorSchemeKey, 'light');
  } else {
    localStorage.setItem(colorSchemeKey, 'dark');
  }

  setScheme();
};

const setScheme = () => {
  const colorSchemeItem = localStorage.getItem(colorSchemeKey);
  const supportDarkMode =
    window.matchMedia('(prefers-color-scheme: dark)').matches === true;

  if (
    colorSchemeItem == 'dark' ||
    (colorSchemeItem === 'auto' && supportDarkMode)
  ) {
    document.documentElement.dataset.scheme = 'dark';
    document.documentElement.style.colorScheme = 'dark';
    document.body.style.colorScheme = 'dark';
    document.getElementById('dark-mode-toggle').innerHTML = '<em class="fas fa-sun"></em>';
  } else {
    document.documentElement.dataset.scheme = 'light';
    document.documentElement.style.colorScheme = 'light';
    document.body.style.colorScheme = 'light';
    document.getElementById('dark-mode-toggle').innerHTML = '<em class="fas fa-moon"></em>';
  }
};

setScheme();
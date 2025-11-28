// apply theme

const saved = localStorage.getItem("theme");
const theme = saved ? saved : "theme-dark"; // default to dark if not saved
document.documentElement.classList.add(theme);
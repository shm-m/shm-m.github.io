let setDarkMode = (isDark) => {
  if (isDark) {
    document.documentElement.setAttribute("color-theme", "dark");
  } else {
    document.documentElement.setAttribute("color-theme", "light");
  }
  localStorage.setItem("theme", isDark ? "dark" : "default");
};

let currentTheme = localStorage.getItem("theme");
let isDarkMode = false;
if (currentTheme) {
  isDarkMode = currentTheme === "dark";
} else {
  isDarkMode = matchMedia("(prefers-color-scheme: dark)").matches;
}

setDarkMode(isDarkMode);

let toggleThemeBtn = document.getElementById("button_change_theme");
if (toggleThemeBtn) {
  toggleThemeBtn.checked = isDarkMode;
}

let changeTheme = (e) => {
  setDarkMode(e.target.checked);
};

toggleThemeBtn.addEventListener("click", changeTheme);

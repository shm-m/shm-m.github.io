let setDarkTheme = (isDark) => {
  if (isDark) {
    document.documentElement.setAttribute("color-theme", "dark");
  } else {
    document.documentElement.setAttribute("color-theme", "light");
  }
  localStorage.setItem("theme", isDark ? "dark" : "default");
};

let currentTheme = localStorage.getItem("theme");
let isDark = false;
if (currentTheme) {
  isDark = currentTheme === "dark";
} else {
  isDark = matchMedia("(prefers-color-scheme: dark)").matches;
}

setDarkTheme(isDark);

let themeBtn = document.getElementById("btn_change_theme");
if (themeBtn) {
  themeBtn.checked = isDark;
}

let changeTheme = (e) => {
  setDarkTheme(e.target.checked);
};

themeBtn.addEventListener("click", changeTheme);

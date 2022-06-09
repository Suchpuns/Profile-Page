function toggle_theme() {
    link_tag = document.getElementById("theme");
    theme_button = document.getElementById("toggle-theme-button");
    if (link_tag.getAttribute("href") === "css/dark.css") {
        link_tag.setAttribute("href", "css/light.css");
        theme_button.innerText = "Light";
    } else {
        link_tag.setAttribute("href", "css/dark.css");
        theme_button.innerText = "Dark";
    }
}
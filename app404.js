// FONCTION DE DETECTION DE CONFIGURATION DU NAVGITEUR EN DARK MODE OU NON

const isDarkMode = () =>
    globalThis.matchMedia?.("(prefers-color-scheme:dark)").matches ?? false;

// DETECTION DE CONFIGURATION DU NAVIGATEUR

if (isDarkMode()) {
    document.body.classList.toggle("darkmode");
   
}




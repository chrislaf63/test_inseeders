const toggleButton = document.querySelector(".toggleButton");
const toggleArea = document.querySelector(".toggle");
const button = document.querySelector("button");


// FONCTION D'ANIMATION DU SELECTEUR DE DARK MODE
/**
 *
 * @param {boolean} mode
 */
function toggleSelect(mode) {
    if (mode) {
        toggleButton.classList.remove("animate-reverse");
        toggleButton.classList.add("animate");
    } else {
        toggleButton.classList.remove("animate");
        toggleButton.classList.add("animate-reverse");
    }
}

// FONCTION DE DETECTION DE CONFIGURATION DU NAVGITEUR EN DARK MODE OU NON

const isDarkMode = () =>
    globalThis.matchMedia?.("(prefers-color-scheme:dark)").matches ?? false;

// DETECTION DE CONFIGURATION DU NAVIGATEUR

if (isDarkMode()) {
    let classes = document.body.classList;
    let mode = classes.toggle("darkmode");
    document.querySelector(".toggle").classList.toggle("toggleDark");
    document
        .querySelector(".toggleButton")
        .classList.toggle("toggleButtonDark");
    document.querySelector("#email").classList.toggle("inputDark");
    document.querySelector(".valid").classList.toggle("validDark");
    toggleSelect(mode);
    toggleButton.innerHTML =
        '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="0.8em" width="0.8em" xmlns="http://www.w3.org/2000/svg"><path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"></path><path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"></path></svg>';
} else {
    toggleButton.innerHTML =
        '<svg stroke="currentColor" fill="CurrentColor" stroke-width="0" viewBox="0 0 24 24" height="0.8em" width="0.8em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M11 4V2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1s-1-.45-1-1zm7.36 3.05 1.41-1.42a.996.996 0 1 0-1.41-1.41l-1.41 1.42a.996.996 0 1 0 1.41 1.41zM22 11h-2c-.55 0-1 .45-1 1s.45 1 1 1h2c.55 0 1-.45 1-1s-.45-1-1-1zm-10 8c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1zM5.64 7.05 4.22 5.64c-.39-.39-.39-1.03 0-1.41s1.03-.39 1.41 0l1.41 1.41c.39.39.39 1.03 0 1.41s-1.02.39-1.4 0zm11.31 9.9a.996.996 0 0 0 0 1.41l1.41 1.41c.39.39 1.03.39 1.41 0a.996.996 0 0 0 0-1.41l-1.41-1.41a.996.996 0 0 0-1.41 0zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm3.64 6.78 1.41-1.41c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.41 1.41a.996.996 0 0 0 0 1.41c.38.39 1.02.39 1.41 0zM12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z"></path></svg>';
}

// ECOUTEUR D'EVENEMENT SUR LE SELECTEUR DE DARK MODE

toggleButton.addEventListener("click", function () {
    let classes = document.body.classList;
    let mode = classes.toggle("darkmode");
    document.querySelector(".toggle").classList.toggle("toggleDark");
    document
        .querySelector(".toggleButton")
        .classList.toggle("toggleButtonDark");
    document.querySelector("#email").classList.toggle("inputDark");
    document.querySelector(".valid").classList.toggle("validDark");
    // document.querySelector(".toggleHead").classList.toggle("toggleHeadDark");
    if (mode) {
        toggleSelect(mode);
        toggleButton.innerHTML =
            '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="0.8em" width="0.8em" xmlns="http://www.w3.org/2000/svg"><path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"></path><path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"></path></svg>';
    } else {
        toggleButton.innerHTML =
            '<svg stroke="currentColor" fill="CurrentColor" stroke-width="0" viewBox="0 0 24 24" height="0.8em" width="0.8em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M11 4V2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1s-1-.45-1-1zm7.36 3.05 1.41-1.42a.996.996 0 1 0-1.41-1.41l-1.41 1.42a.996.996 0 1 0 1.41 1.41zM22 11h-2c-.55 0-1 .45-1 1s.45 1 1 1h2c.55 0 1-.45 1-1s-.45-1-1-1zm-10 8c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1zM5.64 7.05 4.22 5.64c-.39-.39-.39-1.03 0-1.41s1.03-.39 1.41 0l1.41 1.41c.39.39.39 1.03 0 1.41s-1.02.39-1.4 0zm11.31 9.9a.996.996 0 0 0 0 1.41l1.41 1.41c.39.39 1.03.39 1.41 0a.996.996 0 0 0 0-1.41l-1.41-1.41a.996.996 0 0 0-1.41 0zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm3.64 6.78 1.41-1.41c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.41 1.41a.996.996 0 0 0 0 1.41c.38.39 1.02.39 1.41 0zM12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z"></path></svg>';
        toggleSelect(mode);
    }
});

// REDIRECTION VERS LA PAGE 404

button.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href="page404.html"
});
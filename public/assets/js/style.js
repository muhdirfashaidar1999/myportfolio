const text = "Muhammad Dirfas Haidar";
const typingElement = document.getElementById("typing-text");

let index = 0;
let isDeleting = false;

function typeEffect() {
    if (!isDeleting) {
        typingElement.textContent = text.substring(0, index++);
    } else {
        typingElement.textContent = text.substring(0, index--);
    }

    if (index === text.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1000);
        return;
    }

    if (index === 0) {
        isDeleting = false;
    }

    setTimeout(typeEffect, isDeleting ? 80 : 120);
}

typeEffect();

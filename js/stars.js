function createStars() {
    const numberOfStars = 100; // Adjust for more or fewer stars
    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        // Random size, position, and animation duration for each star
        const size = Math.random() * 3 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;
        star.style.animationDuration = `${Math.random() * 2 + 1}s`;

        document.body.appendChild(star);
    }
}

function initComets() {
    setInterval(createComet, (Math.random() * 8000) + 1000);
}

function createComet() {
    const comet = document.createElement("div");
    comet.className = "comet";

    // Random position for the occasional comet
    const startPos = Math.random() * 100;
    comet.style.left = `${startPos}%`;
    comet.style.top = "0";

    document.body.appendChild(comet);

    setTimeout(() => comet.remove(), 2500);
}

createStars();
initComets()
const projectCards = document.querySelectorAll('.project-card');
const lastVisitedEl = document.getElementById('lastVisited');

// Display last visited project if saved
const savedProject = localStorage.getItem('lastVisitedProject');
if (savedProject) {
    lastVisitedEl.textContent = `Last opened: ${savedProject}`;
}

// Save project name when clicked
projectCards.forEach((card) => {
    card.addEventListener('click', () => {
        const title = card.querySelector('h2').textContent;
        localStorage.setItem('lastVisitedProject', title);
    });
});

// Press 1, 2, 3, or 4 on keyboard to open the corresponding project
document.addEventListener('keydown', (e) => {
    const index = parseInt(e.key, 10) - 1;
    if (index >= 0 && index < projectCards.length) {
        projectCards[index].click();
        window.location.href = projectCards[index].getAttribute('href');
    }
});
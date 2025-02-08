// Data for Experience and Projects
const experienceData = [
    { title: "Web Developer", company: "Coding Samurai", year: "March-April, 2024", description: "Developing To-do List applications with Html, Css, and JavaScript." },
    { title: "Personal Learner", company: "Ownself", year: "2004-Present", description: "Learning what comes in life from setbacks, projects, and many more." },
    { title: "Content Creator", company: "Youtube", year: "2024-Present", description: "Creating vlogging content of my personal life." },
];

const projectData = [
    { name: "Python Games", description: "A collection of three fun games: a Dice Rolling Game, a Mad Libs Story Generator, and a Math Quiz, combining luck, creativity, and logic for an engaging experience! 🚀.", link: "https://github.com/laxmithapas/python-game" },
    { name: "Imdp-Movie-Rating", description: "A web-based task manager built using React and Firebase! 🎬.", link: "https://github.com/laxmithapas/Imdp-movie-rating" },
    { name: "Weather App", description: "A weather application to check the current weather conditions, it is built using HTML, CSS and JavaScript, and the OpenWeatherMap API! ⛅  .", link: "https://github.com/laxmithapas/weather" },
];

// Function to Render Experience Section Dynamically
const renderExperience = () => {
    const experienceContainer = document.getElementById('experience-list');
    if (!experienceContainer) {
        console.error('Experience container not found');
        return;
    }
    experienceData.forEach(item => {
        const experienceElement = document.createElement('div');
        experienceElement.classList.add('experience-item');
        experienceElement.innerHTML = `
            <h3>${item.title} at ${item.company} (${item.year})</h3>
            <p>${item.description}</p>
        `;
        experienceContainer.appendChild(experienceElement);
    });
};

// Function to Render Projects Section Dynamically
const renderProjects = () => {
    const projectContainer = document.getElementById('project-container');
    if (!projectContainer) {
        console.error('Project container not found');
        return;
    }
    projectData.forEach(item => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project-item');
        projectElement.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <button class="view-project-button" data-link="${item.link}">🔗 View Project</button>
        `;
        projectContainer.appendChild(projectElement);
    });

    // Add event listeners to project buttons
    document.querySelectorAll('.view-project-button').forEach(button => {
        button.addEventListener('click', (event) => {
            const link = event.target.getAttribute('data-link');
            window.open(link, '_blank');
        });
    });
};

// Form Submission (Simulating Email)
const setupContactForm = () => {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) {
        console.error('Contact form not found');
        return;
    }
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert("Your message has been sent! (Simulated)");
    });
};

// Dark Mode Toggle
const setupThemeToggle = () => {
    const themeToggleButton = document.getElementById("theme-toggle");
    if (!themeToggleButton) {
        console.error('Theme toggle button not found');
        return;
    }
    themeToggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    // Apply dark mode if previously enabled
    if (localStorage.getItem('dark-mode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }
};

// Save dark mode preference
document.body.addEventListener('classlistchange', () => {
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        localStorage.setItem('dark-mode', 'disabled');
    }
});

// Hamburger Menu Toggle
const setupMenuToggle = () => {
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');

    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    // Ensure the navbar effect disappears when a section is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
            navLinks.classList.remove('show');
        });
    });
};

// Initialize dynamic content
window.onload = () => {
    renderExperience();
    renderProjects();
    setupContactForm();
    setupThemeToggle();
    setupMenuToggle();
};

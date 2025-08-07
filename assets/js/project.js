document.addEventListener("DOMContentLoaded", function () {
    loadHTML("sidebar-placeholder", "includes/sidebar.html", setActiveNavLinks);
    loadHTML("navbar-placeholder", "includes/navbar.html");

    // Inject featured projects (safer here)
    const featuredPlaceholder = document.getElementById("featured_projects-placeholder");
    if (featuredPlaceholder) {
        featuredPlaceholder.innerHTML = generateFeaturedProjectsHTML();

        new Swiper(".mySwiper", {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 20,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                768: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
            },
        });
    }

    const params = new URLSearchParams(window.location.search);
    const projectId = params.get("project");

    if (projectId && projectsData[projectId]) {
        displayProject(projectId);
    }
});

function loadHTML(id, file, callback) {
    fetch(file)
        .then(response => {
            if (!response.ok) throw new Error(`Failed to load ${file}`);
            return response.text();
        })
        .then(data => {
            const element = document.getElementById(id);
            if (element) {
                element.innerHTML = data;
                if (typeof callback === 'function') callback();
            }
        })
        .catch(error => {
            console.error(`Error loading ${file}:`, error);
        });
}

function setActiveNavLinks() {
    const currentPath = window.location.pathname;

    const links = document.querySelectorAll('#sidebar-placeholder a');
    if (!links.length) return;

    links.forEach(link => {
        const href = link.getAttribute('href');
        const linkURL = new URL(href, window.location.origin);

        if (currentPath.endsWith(linkURL.pathname)) {
            link.classList.add('active', 'text-dark');
            link.classList.remove('text-muted');
        } else {
            link.classList.remove('active', 'text-dark');
            link.classList.add('text-muted');
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    loadHTML("sidebar-placeholder", "includes/sidebar.html", setActiveNavLinks);
    loadHTML("navbar-placeholder", "includes/navbar.html");

    const params = new URLSearchParams(window.location.search);
    const projectId = params.get("project");

    if (projectId && projectsData[projectId]) {
        displayProject(projectId);
    }
});

const featuredProjects = [
    {
        title: "E-Commerce Platform",
        description: "A modern e-commerce website for sneakers featuring clean, responsive design.",
        image: "assets/img/shoewave/shoewave.png",
        tech: ["html5", "css3-alt", "js", "bootstrap", "php", "database"],
        link: "projects.html?project=shoewave"
    },
    {
        title: "Pension House Website",
        description: "A clean, static site showcasing rooms, tour packages, and key guest info.",
        image: "assets/img/sheenas/sheenas_cut.png",
        tech: ["html5", "css3-alt", "js", "bootstrap"],
        link: "projects.html?project=sheenas"
    },
    {
        title: "Interactive Quiz Game",
        description: "A simple interactive math quiz focused on basic addition and subtraction.",
        image: "assets/img/quiz.png",
        tech: ["html5", "css3-alt", "js"],
        link: "projects.html?project=quiz_game"
    },
    {
        title: "Spy x Family Themed Page",
        description: "A simple themed webpage inspired by Spy x Family. Designed only with HTML and CSS.",
        image: "assets/img/anya.png",
        tech: ["html5", "css3-alt"],
        link: "projects.html?project=spyxfam"
    },
    {
        title: "Haikyuu!! Fan Page",
        description: "A fan-made webpage dedicated to Haikyuu!! Built with HTML and CSS.",
        image: "assets/img/haikyuu.png",
        tech: ["html5", "css3-alt"],
        link: "projects.html?project=haikyuu"
    },
    {
        title: "Portfolio V1",
        description: "A previous version of my personal portfolio built with basic HTML, CSS, and JavaScript.",
        image: "assets/img/old.png",
        tech: ["html5", "css3-alt", "js"],
        link: "projects.html?project=portfolio_v1"
    },
    {
        title: "Portfolio V1",
        description: "A previous version of my personal portfolio built with basic HTML, CSS, and JavaScript.",
        image: "assets/img/old.png",
        tech: ["html5", "css3-alt", "js"],
        link: "projects.html?project=portfolio_v2"
    },
    {
        title: "Health Office Dashboard",
        description: "A responsive web dashboard for managing and visualizing health office data.",
        image: "assets/img/pho.png",
        tech: ["html5", "css3-alt", "js", "bootstrap", "php", "database"],
        link: "projects.html?project=pho_dashboard"
    }
];

function getTechBadge(icon) {
    const iconMap = {
        html5: 'fab fa-html5',
        'css3-alt': 'fab fa-css3-alt',
        js: 'fab fa-js',
        bootstrap: 'fab fa-bootstrap',
        php: 'fab fa-php',
        database: 'fas fa-database'
    };

    const className = iconMap[icon] || '';

    return `
        <span class="badge d-flex align-items-center gap-1 px-2 py-1 text-white">
            <i class="skill-icon fs-5 ${className}"></i>
        </span>
    `;
}

function generateFeaturedProjectsHTML() {
    let html = `
        <div class="project-header d-flex justify-content-between align-items-center mb-4">
            <h5 class="d-flex align-items-center gap-2 fw-semibold mb-0">
                <i class="fas fa-folder text-purple"></i>
                Featured Projects
            </h5>
            <div class="d-flex align-items-center gap-3 mt-3 mx-2">
                <div class="swiper-button-prev position-static"></div>
                <div class="swiper-button-next position-static"></div>
            </div>
        </div>
        <div class="swiper mySwiper m-0 p-0">
            <div class="swiper-wrapper">
    `;

    featuredProjects.forEach(project => {
        html += `
            <div class="swiper-slide">
                <div class="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                    <img src="${project.image}" alt="${project.title}" class="card-img-top">
                    <div class="card-body d-flex flex-column justify-content-between">
                        <div class="details mb-3">
                            <h6 class="fw-bold mb-2">${project.title}</h6>
                            <p class="text-muted small">${project.description}</p>
                        </div>
                        <div class="tech-stack">
                            <div class="d-flex flex-wrap gap-2">
                                ${project.tech.map(getTechBadge).join('')}
                            </div>
                        </div>
                        ${project.link ? `
                        <div class="d-flex justify-content-between align-items-center mt-3">
                            <a href="${project.link}" class="w-100 btn btn-outline-primary btn-sm">
                                <i class="fas fa-eye me-1"></i> View Project
                            </a>
                        </div>` : ''}
                    </div>
                </div>
            </div>
        `;
    });

    html += `</div></div>`;
    return html;
}


const projectsData = {
    shoewave: {
        logo: "assets/img/shoewave/logo.png",
        title: "ShoeWave",
        description: "<a href='https://shoewave.vercel.app' class='text-decoration-none text-info'>ShoeWave </a> is a sneaker-focused e-commerce website I built using HTML, CSS, JavaScript, and Bootstrap. I designed it to be clean and easy to use, with a responsive layout that works well on both desktop and mobile devices. The goal was to create a modern online store feel, with smooth user experience and attention to visual details.",
        images: [
            "assets/img/shoewave/shoewave.png",
            "assets/img/shoewave/shoewave1.png",
            "assets/img/shoewave/shoewave2.png"
        ],
        github: "https://github.com/PhilipArland/shoewave",
    },

    sheenas: {
        logo: "assets/img/sheenas/logo.png",
        title: "Pension House - Sheenas",
        description: "<a href='https://sheenas.vercel.app' class='text-decoration-none text-info'>Sheenas</a> is a static website built to showcase a local pension house. It presents available rooms, food menu, and tour package prices in a clean and organized layout. Designed with HTML, CSS, JavaScript, and Bootstrap, the site is responsive and easy to navigate, offering visitors a simple way to explore the offerings of the establishment.",
        images: [
            "assets/img/sheenas/sheenas_cut.png",
            "assets/img/sheenas/sheenas1.png",
            "assets/img/sheenas/sheenas2.png",
            "assets/img/sheenas/sheenas3.png",
            "assets/img/sheenas/sheenas4.png",
        ],
        github: "https://github.com/PhilipArland/sheenas",
    },
};

function displayProject(projectId) {
    const project = projectsData[projectId];
    const container = document.getElementById("featured_projects-placeholder");
    container.innerHTML = ''; // Clear any existing content

    const project_card = document.createElement("div");
    project_card.className = "project_card";

    // Add images
    const imagesHtml = project.images.map(src =>
        `<img src="${src}" class="img-fluid rounded-4 mb-3 h-100" alt="${project.title}">`
    ).join("");


    project_card.innerHTML = `
    <div class="p-0">
        <div class="mb-3">
            <a href="projects.html" class="text-back">
                <i class="fas fa-arrow-left me-1"></i></a>
        </div>

        <div class="project-title d-flex">
            <img src="${project.logo}" alt="${project.title} Logo" class="img-fluid mb-2 me-1 rounded-circle">
            <h4 class="fw-bold lead">${project.title}</h4>
        </div>    

        <div class="description-container mb-3">
            <p class="project-description text-muted mb-0 small line-clamp" id="desc-${project.title.replace(/\s+/g, '')}">
                ${project.description}
            </p>
            <button class="w-100 text-end btn btn-link btn-sm p-0 toggle-desc d-md-none" data-target="desc-${project.title.replace(/\s+/g, '')}">Read more</button>
        </div>

        <a href="${project.github}" class="btn btn-dark btn-sm" target="_blank">
                <i class="fab fa-github me-1"></i> View GitHub
            </a>
    </div>
    <hr>
    <div class="p-1">
        <div class="mb-3 d-flex flex-column">
            ${imagesHtml}
        </div>
    </div>
    `;

    container.appendChild(project_card);
}

document.addEventListener("click", function (e) {
    if (e.target.classList.contains("toggle-desc")) {
        const btn = e.target;
        const descId = btn.dataset.target;
        const desc = document.getElementById(descId);
        if (desc.classList.contains("expanded")) {
            desc.classList.remove("expanded");
            desc.classList.add("line-clamp");
            btn.textContent = "Read more";
        } else {
            desc.classList.add("expanded");
            desc.classList.remove("line-clamp");
            btn.textContent = "Read less";
        }
    }
});

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
        <div class="swiper mySwiper p-0">
            <div class="swiper-wrapper">
    `;

    featuredProjects.forEach(project => {
        html += `
            <div class="swiper-slide">
                <div class="card h-100 border-0 shadow-sm rounded-4">
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
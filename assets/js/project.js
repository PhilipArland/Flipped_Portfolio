const featuredProjects = [
    {
        title: "E-Commerce Platform",
        description: "A modern e-commerce website for sneakers featuring clean, responsive design.",
        image: "assets/img/projects/shoewave/shoewave-thumbnail.png",
        tech: ["html5", "css3-alt", "js", "bootstrap", "php", "database"],
        link: "projects.html?project=shoewave"
    },
    {
        title: "Pension House Website",
        description: "A clean, static site showcasing rooms, tour packages, and key guest info.",
        image: "assets/img/projects/sheenas/sheenas-thumbnail.png",
        tech: ["html5", "css3-alt", "js", "bootstrap"],
        link: "projects.html?project=sheenas"
    },
    {
        title: "Simple Typing Game",
        description: "A basic typing game to test and improve typing speed and accuracy.",
        image: "assets/img/projects/justtype/justtype-thumbnail.png",
        tech: ["html5", "css3-alt", "js", "bootstrap"],
        link: "projects.html?project=typing_game"
    },
    {
        title: "Interactive Quiz Game",
        description: "A simple interactive math quiz focused on basic addition and subtraction.",
        image: "assets/img/projects/quiz/quiz.png",
        tech: ["html5", "css3-alt", "js"],
        link: "projects.html?project=quiz_game"
    },
    {
        title: "Haikyuu!! Fan Page",
        description: "A fan-made webpage dedicated to Haikyuu!! Built with HTML and CSS.",
        image: "assets/img/projects/haikyuu/haikyuu-thumbnail.png",
        tech: ["html5", "css3-alt"],
        link: "projects.html?project=haikyuu"
    },
    // {
    //     title: "Spy x Family Themed Page",
    //     description: "A simple themed webpage inspired by Spy x Family. Designed only with HTML and CSS.",
    //     image: "assets/img/projects/spyxfam/anya.png",
    //     tech: ["html5", "css3-alt"],
    //     link: "projects.html?project=spyxfam"
    // },
    {
        title: "Current Portfolio",
        description: "My personal portfolio showcasing projects and skills, built with HTML, CSS, and JavaScript.",
        image: "assets/img/projects/portfolio/portfolio.png",
        tech: ["html5", "css3-alt", "js", "bootstrap"],
        link: "projects.html?project=portfolio"
    },
    {
        title: "Portfolio V2",
        description: "A previous version of my personal portfolio built with basic HTML, CSS, and JavaScript.",
        image: "assets/img/projects/portfolio/portfoliov2.png",
        tech: ["html5", "css3-alt", "js"],
        link: "projects.html?project=portfolio_v2"
    },
    {
        title: "Portfolio V1",
        description: "A previous version of my personal portfolio built with basic HTML, CSS, and JavaScript.",
        image: "assets/img/projects/portfolio/portfoliov1.png",
        tech: ["html5", "css3-alt", "js"],
        link: "projects.html?project=portfolio_v1"
    },
    {
        title: "Health Office Dashboard",
        description: "A responsive web dashboard for managing and visualizing health office data.",
        image: "assets/img/projects/pho/admin_dashboard.png",
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
    // --- Swiper for large screens ---
    let html = `
        <div class="d-none d-lg-block p-3 p-md-4">
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
                            <div class="d-flex flex-wrap gap-1">
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

    html += `</div></div></div>`; // Close Swiper + container

    // --- Static layout for small/medium screens ---
    html += `<div class="d-block d-lg-none p-3 p-md-4">
        <div class="project-header d-flex justify-content-between align-items-center mb-4">
            <h5 class="d-flex align-items-center gap-2 fw-semibold mb-0">
                <i class="fas fa-folder text-purple"></i>
                Featured Projects
            </h5>
        </div>`;

    featuredProjects.forEach(project => {
        html += `
            <div class="card h-100 border-0 shadow-sm rounded-4 overflow-hidden mb-3">
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
        `;
    });

    html += `</div>`; // Close small screen container

    return html;
}



const projectsData = {
    shoewave: {
        logo: "assets/img/projects/shoewave/logo.png",
        title: "ShoeWave",
        description: "ShoeWave is a sneaker-focused e-commerce website I built using HTML, CSS, JavaScript, and Bootstrap. I designed it to be clean and easy to use, with a responsive layout that works well on both desktop and mobile devices. The goal was to create a modern online store feel, with smooth user experience and attention to visual details.",
        images: [
            "assets/img/projects/shoewave/shoewave.png",
            "assets/img/projects/shoewave/shoewave1.png",
            "assets/img/projects/shoewave/shoewave2.png",
            "assets/img/projects/shoewave/shoewave3.png",
        ],
        github: "https://github.com/PhilipArland/shoewave",
        live: "https://shoewave.vercel.app",
    },

    sheenas: {
        logo: "assets/img/projects/sheenas/logo.png",
        title: "Pension House - Sheenas",
        description: "Sheenas is a static website built to showcase a local pension house. It presents available rooms, food menu, and tour package prices in a clean and organized layout. Designed with HTML, CSS, JavaScript, and Bootstrap, the site is responsive and easy to navigate, offering visitors a simple way to explore the offerings of the establishment.",
        images: [
            "assets/img/projects/sheenas/sheenas.png",
            "assets/img/projects/sheenas/sheenas1.png",
            "assets/img/projects/sheenas/sheenas2.png",
            "assets/img/projects/sheenas/sheenas3.png",
            "assets/img/projects/sheenas/sheenas4.png",
            "assets/img/projects/sheenas/sheenas5.png",
            "assets/img/projects/sheenas/sheenas6.png"
        ],
        github: "https://github.com/PhilipArland/sheenas",
        live: "https://sheenas.vercel.app",
    },

    typing_game: {
        logo: "assets/img/projects/justtype/jt-logo.png",
        title: "JustType",
        description: "JustType is a clean and simple typing game clone inspired by Monkeytype, designed to help users practice and improve their typing speed and accuracy. Built with HTML, CSS, and JavaScript, it offers a user-friendly interface where players can test their skills in a fun and engaging way.",
        images: [
            "assets/img/projects/justtype/justtype.png",
            "assets/img/projects/justtype/justtype1.png",
            "assets/img/projects/justtype/justtype2.png",
            "assets/img/projects/justtype/justtype3.png",
        ],
        github: "https://github.com/PhilipArland/justType",
        live: "https://flip-just-type.vercel.app",
    },

    haikyuu: {
        logo: "assets/img/projects/haikyuu/logo.png",
        title: "Haikyuu!! Fan Page",
        description: "A responsive fan-made webpage dedicated to the anime Haikyuu!!, built in 2024 using only HTML and CSS. Features character showcases and thematic design for an engaging fan experience.",
        images: [
            "assets/img/projects/haikyuu/haikyuu.png",
            "assets/img/projects/haikyuu/haikyuu1.png",
            "assets/img/projects/haikyuu/haikyuu2.png",
            "assets/img/projects/haikyuu/haikyuu3.png"
        ],
        github: "https://github.com/PhilipArland/haikyuu",
        live: "https://flip-haikyuu.vercel.app",
    },

    quiz_game: {
        logo: "assets/img/projects/quiz/logo.png",
        title: "Simple Interactive Quiz Game",
        description: "This is a simple interactive math quiz game focused on basic addition and subtraction. It was built using HTML, CSS, and JavaScript, providing an engaging way to practice math skills through a user-friendly interface.",
        images: [
            "assets/img/projects/quiz/quiz.png",
            "assets/img/projects/quiz/quiz1.png",
            "assets/img/projects/quiz/quiz2.png"
        ],
        github: "https://github.com/PhilipArland/simple_interactive_quiz",
        live: "https://flip-simple-quiz.vercel.app",
    },

    portfolio: {
        logo: "assets/img/projects/portfolio/logo.png",
        title: "My Portfolio",
        description: "This is my personal portfolio website, built to showcase my projects and skills. It features a clean, responsive design using HTML, CSS, and JavaScript, with a focus on user experience and accessibility.",
        images: [
            "assets/img/projects/portfolio/portfolio.png",
            "assets/img/projects/portfolio/portfolio1.png",
            "assets/img/projects/portfolio/portfolio2.png",
        ],
        github: "https://github.com/PhilipArland/Flipped_Portfolio",
        live: "https://flipped-portfolio.vercel.app",
    },

    portfolio_v2: {
        logo: "assets/img/projects/portfolio/logo.png",
        title: "Portfolio V2",
        description: "This is a previous version of my personal portfolio website, showcasing my projects and skills. It was built using basic HTML, CSS, and JavaScript, focusing on simplicity and clarity in design.",
        images: [
            "assets/img/projects/portfolio/portfoliov2.png",
            "assets/img/projects/portfolio/portfoliov21.png",
            "assets/img/projects/portfolio/portfoliov22.png",
            "assets/img/projects/portfolio/portfoliov23.png",
        ],
        github: "",
        live: "https://flip-portfolio.vercel.app/",
    },

    portfolio_v1: {
        logo: "assets/img/projects/portfolio/logo.png",
        title: "Portfolio V1",
        description: "This is a previous version of my personal portfolio website, built using basic HTML, CSS, and JavaScript. It showcases my projects and skills in a straightforward layout.",
        images: [
            "assets/img/projects/portfolio/portfoliov1.png",
            "assets/img/projects/portfolio/portfoliov11.png",
            "assets/img/projects/portfolio/portfoliov12.png",
            "assets/img/projects/portfolio/portfoliov13.png",
            "assets/img/projects/portfolio/portfoliov14.png",
        ],
        github: "",
        live: "https://flipxs.vercel.app/",
    },
};

function displayProject(projectId) {
    const project = projectsData[projectId];
    const container = document.getElementById("featured_projects-placeholder");
    container.innerHTML = ''; // Clear any existing content

    const project_card = document.createElement("div");
    project_card.className = "project_card p-3 p-md-4 pb-0 mb-0";

    // Add images
    const imagesHtml = project.images
        .map((src, index) => {
            const isLast = index === project.images.length - 1;
            return `<img src="${src}" class="img-fluid rounded-4 h-100 ${isLast ? 'mb-0' : 'mb-3'}" alt="${project.title}">`;
        })
        .join("");

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

        <a href="${project.live}" class="btn btn-primary btn-sm" target="_blank">
            <i class="fas fa-eye me-1"></i> View Live
        </a>
        <a href="${project.github}" class="btn btn-dark btn-sm" target="_blank">
            <i class="fab fa-github me-1"></i> View GitHub
        </a>
    </div>

    <div class="p-1 mt-3">
        <div class="mb-3 d-flex flex-column">
            ${imagesHtml}
        </div>
    </div>
    `;

    container.appendChild(project_card);
}

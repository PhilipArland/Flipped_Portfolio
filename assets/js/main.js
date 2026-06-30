function applyThemeAndLogo() {
    const logo = document.getElementById('logo');
    const theme = localStorage.getItem('theme');

    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        if (logo) logo.src = 'assets/img/2.png';
    } else {
        document.documentElement.removeAttribute('data-theme');
        if (logo) logo.src = 'assets/img/1.png';
    }
}
applyThemeAndLogo();

function toggleDarkMode() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    localStorage.setItem('theme', isDark ? 'light' : 'dark');

    applyThemeAndLogo();
    updateFeaturedThumbnails();

    const params = new URLSearchParams(window.location.search);
    const projectId = params.get("project");

    if (projectId && projectsData[projectId]) {
        updateProjectImages(projectId);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let sidebarLoaded = false;
    let navbarLoaded = false;

    function checkAndSetActive() {
        if (sidebarLoaded && navbarLoaded) {
            setActiveNavLinks();
        }
    }

    loadHTML("sidebar-placeholder", "includes/sidebar.html", () => {
        sidebarLoaded = true;
        document.getElementById('currentYear').textContent = new Date().getFullYear();
        checkAndSetActive();
    });

    loadHTML("navbar-placeholder", "includes/navbar.html", () => {
        navbarLoaded = true;
        document.getElementById('currentYear').textContent = new Date().getFullYear();
        applyThemeAndLogo();
        checkAndSetActive();
    });

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

    new Swiper(".highlightsSwiper", {
        slidesPerView: 2.4,
        slidesPerGroup: 1,
        spaceBetween: 10,

        breakpoints: {
            768: {
                slidesPerView: 2.4,
            },
            992: {
                slidesPerView: 4.4,
            },
        },
    });

    // Project details check
    const params = new URLSearchParams(window.location.search);
    const projectId = params.get("project");

    if (projectId && projectsData[projectId]) {
        displayProject(projectId);
        const githubSection = document.getElementById("github-contributions");
        if (githubSection) githubSection.style.display = "none";
    }

    const selectedExperience = localStorage.getItem("selectedExperience") || "spinnaker";
    setExperience(selectedExperience);
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
        .catch(error => console.error(`Error loading ${file}:`, error));
}

const experiences = {
    spinnaker: {
        company: "Spinnaker Global Services",
        logo: "assets/img/spinnaker.png",
        banner: "assets/img/experience/_LRC2791.jpg",
        gallery: [
            "assets/img/experience/_LRC1794.jpg",
            "assets/img/experience/_LRC2902.jpg",
            "assets/img/experience/halloween.jpg",
        ],
        position: "Website Developer",
        employment: "Probationary",
        duration: "October 2025 - Present",
        location: "Puerto Princesa, Palawan",
        responsibilities: "Assisted in maintaining and updating company websites by fixing minor issues, improving website speed and performance, and applying basic SEO practices to support a better user experience.",
    },

    pho: {
        company: "Provincial Health Office",
        logo: "assets/img/pho.png",
        banner: "assets/img/experience/1.png",
        gallery: [
            "assets/img/experience/2.png",
            "assets/img/experience/3.jpg",
            "assets/img/experience/4.jpg",
        ],
        position: "On-the-Job Training",
        employment: "Internship",
        duration: "February 2025 - April 2025",
        location: "Puerto Princesa, Palawan",
        responsibilities: "Assisted with maintaining office records, providing technical assistance, and supporting daily office tasks throughout the internship.",
    }
};

function changeBanner(img) {
    const banner = document.getElementById("experience-banner");

    const oldBanner = banner.src;
    banner.src = img.src;
    img.src = oldBanner;
}

function setExperience(key) {
    localStorage.setItem("selectedExperience", key);
    const exp = experiences[key];

    document.querySelectorAll(".work-exp-btn").forEach(btn => {
        btn.classList.remove("active");
    });

    document.getElementById("btn-" + key).classList.add("active");

    document.getElementById("experience-details").innerHTML = `
        <div class="card shadow-sm rounded-4 border-0 p-2 p-md-3 mb-2 mb-md-3 exp-banner">

            <div class="d-flex align-items-center p-2 gap-2">
                <img src="${exp.logo}" width="40" height="40">
                <p class="mb-0 fw-semibold">${exp.company}</p>
            </div>

            <img
                id="experience-banner"
                src="${exp.banner}"
                class="p-2 img-fluid rounded-4 w-100 exp-img"
            >

            <div class="row g-1 g-md-2 px-2">
                ${exp.gallery.map(img => `
                    <div class="col-4">
                        <img
                            src="${img}"
                            class="img-fluid rounded-1 w-100 gallery-img"
                            onclick="changeBanner(this)"
                        >
                    </div>
                `).join("")}
            </div>

            
            <div class="p-2 pt-0">
            <hr>
                <h6 class="fw-semibold mb-3">
                    <i class="fa-solid fa-briefcase text-purple me-2"></i>
                    Work Details
                </h6>

                <div class="row g-3">

                    <div class="col-6">
                        <small class="text-muted d-block">Position</small>
                        <div class="fw-semibold">${exp.position}</div>
                    </div>

                    <div class="col-6">
                        <small class="text-muted d-block">Employment</small>
                        <div class="fw-semibold">${exp.employment}</div>
                    </div>

                    <div class="col-6">
                        <small class="text-muted d-block">Duration</small>
                        <div class="fw-semibold">${exp.duration}</div>
                    </div>

                    <div class="col-6">
                        <small class="text-muted d-block">Location</small>
                        <div class="fw-semibold">${exp.location}</div>
                    </div>

                </div>

            </div>

        </div>
    `;
}

function showSection(section, btn) {
    document.querySelectorAll(".nav-link").forEach(link => {
        link.classList.remove("active");
        link.classList.add("text-secondary");
    });

    btn.classList.add("active");
    btn.classList.remove("text-secondary");

    const container = document.getElementById("profile-content");

    const sections = {
        about: document.getElementById("about-section"),
        highlights: document.getElementById("highlights-section"),
        education: document.getElementById("education-section"),
        experience: document.getElementById("experience-section")
    };

    container.prepend(sections[section]);

    ["highlights", "about", "experience", "education"].forEach(key => {
        if (key !== section) {
            container.append(sections[key]);
        }
    });
}

function setActiveNavLinks() {
    let currentPath = window.location.pathname.replace(/\/+$/, '');
    if (currentPath === '') currentPath = '/'; // treat empty as root

    const links = document.querySelectorAll('a[href$=".html"]');

    links.forEach(link => {
        const href = link.getAttribute('href');
        if (!href) return;

        let linkPath = new URL(href, window.location.origin).pathname.replace(/\/+$/, '');
        if (linkPath === '') linkPath = '/';

        const isHomePage =
            (currentPath === '/' || currentPath === '/index.html' || currentPath.endsWith('tryIndex.html')) &&
            (linkPath === '/' || linkPath === '/index.html' || linkPath.endsWith('tryIndex.html'));

        if (currentPath === linkPath || isHomePage) {
            link.classList.add('active', 'text-dark');
            link.classList.remove('text-muted');
        } else {
            link.classList.remove('active', 'text-dark');
            link.classList.add('text-muted');
        }
    });
}


const hero = document.querySelector('.hero');
const dragons = document.querySelectorAll('.drag-overlay');

if (hero) {
    hero.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth) * 80;
        const y = (e.clientY / window.innerHeight) * 80;

        hero.style.setProperty('--mouse-x', `${x}%`);
        hero.style.setProperty('--mouse-y', `${y}%`);

        const isDarkMode = document.documentElement.getAttribute('data-theme') === 'dark';

        if (isDarkMode) {
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            dragons.forEach((dragon) => {
                const rect = dragon.getBoundingClientRect();
                const dragonCenterX = rect.left + rect.width / 2;
                const dragonCenterY = rect.top + rect.height / 2;

                const distance = Math.hypot(mouseX - dragonCenterX, mouseY - dragonCenterY);

                if (distance < 150) {
                    dragon.classList.add('lit');
                } else {
                    dragon.classList.remove('lit');
                }
            });
        } else {
            dragons.forEach((dragon) => dragon.classList.remove('lit'));
        }
    });
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

const legend = document.getElementById('github-legend');
const tabButtons = document.querySelectorAll('[data-bs-toggle="tab"]');

tabButtons.forEach(button => {
    button.addEventListener('shown.bs.tab', function (event) {
        const target = event.target.getAttribute('data-bs-target');
        if (target === '#info') {
            legend.classList.add('d-none');
        } else {
            legend.classList.remove('d-none');
        }
    });
});
// =====================
// 🌙 Dark Mode Handling
// =====================
if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
}

const logo = document.getElementById('logo');

function toggleDarkMode() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        if (logo) logo.src = 'assets/img/1.png';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        if (logo) logo.src = 'assets/img/2.png';
    }
}

// =====================
// 🐉 Hero Interaction (Safe)
// =====================
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

// =====================
// 🎠 Swiper Slider
// =====================
new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    breakpoints: {
        768: {
            slidesPerView: 2
        },
        992: {
            slidesPerView: 3
        }
    }
});

// =====================
// 📥 Load HTML Includes
// =====================
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

// =====================
// 📌 Set Active Sidebar Link
// =====================
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

// =====================
// 🚀 Init on Page Load
// =====================
document.addEventListener("DOMContentLoaded", function () {
    loadHTML("sidebar-placeholder", "includes/sidebar.html", setActiveNavLinks);
    loadHTML("navbar-placeholder", "includes/navbar.html");
});

const text = "B.Tech Student | Web Developer | Programmer";

let i = 0;

function typingEffect() {
    document.getElementById("typing").innerHTML = "";
    i = 0;

    function type() {
        if (i < text.length) {
            document.getElementById("typing").innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 80);
        }
    }

    type();
}

typingEffect();
setInterval(typingEffect, 4000);

// Run only if ScrollReveal is available
if (typeof ScrollReveal !== "undefined") {
    ScrollReveal({
        distance: "60px",
        duration: 1000,
        reset: false
    });

    ScrollReveal().reveal(".hero-text", { origin: "left" });
    ScrollReveal().reveal(".hero-image", { origin: "right" });
    ScrollReveal().reveal(".about", { origin: "bottom" });
    ScrollReveal().reveal(".skills", { origin: "bottom" });
    ScrollReveal().reveal(".tech",{origin:"bottom"});
    ScrollReveal().reveal(".education", { origin: "bottom" });
    ScrollReveal().reveal(".internships", { origin: "bottom" });
    ScrollReveal().reveal(".projects", { origin: "bottom" });
    ScrollReveal().reveal(".contact", { origin: "bottom" });
}
// Smooth button animation
const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        btn.style.transform = "translateY(-5px) scale(1.05)";
    });

    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "translateY(0) scale(1)";
    });
});

// Highlight active navigation link while scrolling
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});
window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");

    if (preloader) {
        setTimeout(() => {
            preloader.style.opacity = "0";

            setTimeout(() => {
                preloader.style.display = "none";
            }, 500);

        }, 800);
    }
});
const cursor = document.querySelector(".cursor-glow");

if (cursor) {
    document.addEventListener("mousemove", (e) => {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
    });
}

const themeToggle = document.getElementById("theme-toggle");

if(themeToggle){

const themeIcon = themeToggle.querySelector("i");


// Load saved theme
if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
}


themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        themeIcon.classList.replace("fa-moon","fa-sun");
        localStorage.setItem("theme","light");
    }
    else{
        themeIcon.classList.replace("fa-sun","fa-moon");
        localStorage.setItem("theme","dark");
    }

});

}

// Hamburger Menu
const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.getElementById("nav-links");

if (menuToggle && mobileNav) {
    menuToggle.addEventListener("click", () => {
        mobileNav.classList.toggle("active");
    });
}
// Close mobile menu after clicking link
const navItems = document.querySelectorAll("#nav-links a");

navItems.forEach(item => {
    item.addEventListener("click", () => {
        mobileNav.classList.remove("active");
    });
});
const counters = document.querySelectorAll(".counter");

function startCounter(counter) {
    const target = parseInt(counter.dataset.target);
    let count = 0;

    const update = () => {
        const increment = Math.max(1, Math.ceil(target / 50));

        if (count < target) {
            count += increment;

            if (count > target) count = target;

            counter.innerText = count;
            requestAnimationFrame(update);
        } else {
            counter.innerText = target + "+";
        }
    };

    update();
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startCounter(entry.target);
            observer.unobserve(entry.target);
        }
    });
});

counters.forEach(counter => observer.observe(counter));

// ==========================================
// SHANNEL SEGWABE — PORTFOLIO JAVASCRIPT
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // SCROLL REVEAL
    // ==========================================

    const revealElements = document.querySelectorAll(
        ".skill-card, .project-card, .certificate-card, .education-card, .social-card"
    );

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });


    // ==========================================
    // ACTIVE NAVIGATION
    // ==========================================

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-links a");


    const updateActiveNavigation = () => {

        let currentSection = "";

        sections.forEach((section) => {

            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {

                currentSection = section.getAttribute("id");

            }

        });


        navLinks.forEach((link) => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") === `#${currentSection}`
            ) {

                link.classList.add("active");

            }

        });

    };


    window.addEventListener(
        "scroll",
        updateActiveNavigation
    );


    updateActiveNavigation();


    // ==========================================
    // CURRENT YEAR
    // ==========================================

    const yearElement = document.querySelector("#current-year");

    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }


    // ==========================================
    // TERMINAL TYPING EFFECT
    // ==========================================

    const terminalCursor =
        document.querySelector(".cursor");


    if (terminalCursor) {

        setInterval(() => {

            terminalCursor.style.opacity =
                terminalCursor.style.opacity === "0"
                    ? "1"
                    : "0";

        }, 600);

    }


    // ==========================================
    // CONSOLE MESSAGE
    // ==========================================

    console.log(
        "%cShannel Segwabe Portfolio",
        "color: #ff4fa3; font-size: 18px; font-weight: bold;"
    );

    console.log(
        "%cNetwork Security & Computer Forensics Student",
        "color: #ff8ac4; font-size: 14px;"
    );

    console.log(
        "%cPortfolio loaded successfully.",
        "color: #ff4fa3; font-size: 13px;"
    );

});
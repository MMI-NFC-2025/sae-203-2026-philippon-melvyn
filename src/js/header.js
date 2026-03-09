function initMobileMenu() {
    const toggle = document.querySelector("#menu-btn");
    const nav = document.querySelector("#menu");
    const page = document.body;

    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            const isOpen = toggle.ariaExpanded === "true";
            const isClosed = !isOpen;

            toggle.ariaExpanded = String(isClosed);
            nav.ariaHidden = String(isOpen);

            nav.classList.toggle("invisible", isOpen);
            nav.classList.toggle("opacity-0", isOpen);
            nav.classList.toggle("translate-y-[-1rem]", isOpen);

            page.classList.toggle("overflow-hidden", isClosed);
        });
    }
}

function initHeaderScroll() {
    const navBar = document.querySelector("#header");
    if (!navBar) return;

    let lastScrollY = 0;
    let ticking = false;
    const offset = 205;

    function handleScroll() {
        const currentScrollY = window.scrollY;
        const isPastOffset = currentScrollY > offset;

        
        navBar.classList.toggle(
            "-translate-y-full",
            currentScrollY > lastScrollY && isPastOffset
        );

        lastScrollY = currentScrollY;
        ticking = false;
    }

    window.addEventListener("scroll", () => {
        if (!ticking) {
            window.requestAnimationFrame(handleScroll);
            ticking = true;
        }
    });
}

initMobileMenu();
initHeaderScroll();
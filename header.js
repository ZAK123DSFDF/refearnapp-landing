// header.js
const headerHTML = `
<header id="main-header" class="fixed top-0 left-0 right-0 z-50 py-4 px-3 transition-all duration-300 ease-in-out bg-transparent">
    <div class="max-w-5xl mx-auto px-4 flex items-center justify-between">
      ${getLogoHTML("h-10")}

        <nav class="hidden lg:flex space-x-8">
            <a href="#features" class="nav-link text-foreground/70 hover:text-primary hover:scale-105 transition-all duration-200 ease-in-out font-medium">Features</a>
            <a href="#how-it-works" class="nav-link text-foreground/70 hover:text-primary hover:scale-105 transition-all duration-200 ease-in-out font-medium">How It Works</a>
            <a href="#testimonials" class="nav-link text-foreground/70 hover:text-primary hover:scale-105 transition-all duration-200 ease-in-out font-medium">Testimonials</a>
            <a href="#pricing" class="nav-link text-foreground/70 hover:text-primary hover:scale-105 transition-all duration-200 ease-in-out font-medium">Pricing</a>
        </nav>

        <div class="hidden lg:flex items-center space-x-4">
            <a href="/login" class="nav-link text-foreground/70 hover:text-primary hover:scale-105 transition-all duration-200 ease-in-out font-medium">Log in</a>
            <a href="/signup" class="bg-primary text-primary-foreground px-5 py-2.5 rounded-full hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all duration-200 shadow-sm font-semibold">
                Get Started
            </a>
        </div>

        <button id="menu-toggle" class="lg:hidden p-2 rounded-md hover:bg-muted focus:outline-none text-foreground">
            <svg id="menu-icon" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="4" y1="6" x2="20" y2="6"></line>
                <line x1="4" y1="12" x2="20" y2="12"></line>
                <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
        </button>
    </div>

    <div id="mobile-menu" class="hidden lg:hidden bg-white/95 backdrop-blur-md shadow-lg px-6 py-8 rounded-2xl mt-3 mx-3 animate-slide-down border border-border">
        <nav class="flex flex-col space-y-6">
            <a href="#features" class="mobile-link text-lg font-medium text-foreground/80 hover:text-primary hover:translate-x-2 transition-all duration-200">Features</a>
            <a href="#how-it-works" class="mobile-link text-lg font-medium text-foreground/80 hover:text-primary hover:translate-x-2 transition-all duration-200">How It Works</a>
            <a href="#testimonials" class="mobile-link text-lg font-medium text-foreground/80 hover:text-primary hover:translate-x-2 transition-all duration-200">Testimonials</a>
            <a href="#pricing" class="mobile-link text-lg font-medium text-foreground/80 hover:text-primary hover:translate-x-2 transition-all duration-200">Pricing</a>
            
            <div class="pt-6 border-t border-border flex flex-col space-y-4">
                <a href="/login" class="mobile-link text-lg font-medium text-foreground/80 hover:text-primary transition-all">Log in</a>
                <a href="/signup" class="bg-primary text-primary-foreground text-center px-4 py-3 rounded-full shadow-md font-bold active:scale-95 transition-all">
                    Get Started
                </a>
            </div>
        </nav>
    </div>
</header>
`;

// Inject Header into the DOM
document.addEventListener('DOMContentLoaded', () => {
    const headerContainer = document.getElementById('header-wrapper');
    if (headerContainer) {
        headerContainer.innerHTML = headerHTML;
        initHeaderLogic();
    }
});

function initHeaderLogic() {
    const header = document.getElementById('main-header');
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');

    // Scroll Logic
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            header.classList.add('bg-white/80', 'backdrop-blur-md', 'shadow-sm');
            header.classList.remove('bg-transparent');
        } else {
            header.classList.remove('bg-white/80', 'backdrop-blur-md', 'shadow-sm');
            header.classList.add('bg-transparent');
        }
    });

    // Toggle Logic
    menuToggle.addEventListener('click', () => {
        const isHidden = mobileMenu.classList.toggle('hidden');
        menuIcon.innerHTML = isHidden
            ? `<line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="18" x2="20" y2="18"></line>`
            : `<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>`;
    });
}
document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('mobile-menu').classList.add('hidden');
        // Reset the icon back to hamburger
        document.getElementById('menu-icon').innerHTML = `<line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="18" x2="20" y2="18"></line>`;
    });
});
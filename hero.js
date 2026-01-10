// hero.js
const heroHTML = `
<section id="hero" class="pt-32 pb-20 px-6 relative overflow-hidden">
    <div class="absolute inset-0 -z-10">
        <div class="absolute inset-0 bg-gradient-to-b from-secondary/80 to-background/20"></div>
        <div class="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 filter blur-3xl opacity-70 animate-float"></div>
        <div class="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-blue-400/10 filter blur-3xl opacity-70 animate-float animation-delay-300"></div>
    </div>

    <div class="container mx-auto max-w-5xl">
        <div class="text-center space-y-6 animate-fade-in">
            <h1 class="text-4xl md:text-7xl font-bold tracking-tight text-balance text-foreground leading-tight">
                Launch Your <span class="text-primary">Affiliate Program</span> in Minutes
            </h1>

      <p class="text-xl text-slate-500 font-normal max-w-3xl mx-auto text-balance leading-relaxed">
    A simple, powerful platform to track referrals, monitor performance,
    and grow your SaaS without any complexity.
</p>

            <div class="flex justify-center items-center pt-8">
                <a href="/signup" class="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-white transition-all duration-200 bg-primary rounded-full hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary shadow-xl hover:scale-105 active:scale-95">
                    Start for Free
                </a>
            </div>
        </div>
    </div>
</section>
`;

document.addEventListener('DOMContentLoaded', () => {
    const heroContainer = document.getElementById('hero-wrapper');
    if (heroContainer) {
        heroContainer.innerHTML = heroHTML;
    }
});
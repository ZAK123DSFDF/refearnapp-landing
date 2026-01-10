// how-it-works.js
const stepsData = [
    {
        number: "01",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>`,
        title: "Create Your Organization",
        description: "Set up your organization with custom cookie settings, flexible commission tiers, and tracking rules tailored for your SaaS."
    },
    {
        number: "02",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>`,
        title: "Connect Your Web App",
        description: "Add a lightweight script snippet to your frontend. No complexity — drop it in and start tracking instantly."
    },
    {
        number: "03",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>`,
        title: "Integrate Checkout Tracking",
        description: "Pass the tracking ID to your payment processor (like Paddle or Stripe) to automatically attribute successful sales to your Affiliates."
    },
    {
        number: "04",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" x2="12" y1="2" y2="15"/></svg>`,
        title: "Share Your Affiliate Portal",
        description: "Invite affiliates and give them a branded portal where they can generate links, view stats, and track progress."
    },
    {
        number: "05",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/></svg>`,
        title: "Track Performance Seamlessly",
        description: "Monitor real-time analytics as your affiliates drive signups and revenue. Optimize your growth effortlessly."
    }
];

const arrowIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-10 h-10 text-primary/40 animate-bounce-slow"><path d="m6 9 6 6 6-6"/></svg>`;

const howItWorksHTML = `
<section id="how-it-works" class="py-20 px-6 bg-secondary/50">
    <div class="container mx-auto max-w-3xl">
        <div class="text-center mb-16 animate-fade-in">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">
                How <span class="text-blue-600">It Works</span>
            </h2>
            <p class="text-xl text-slate-500 max-w-2xl mx-auto">
                A simple, guided workflow to launch and scale your affiliate program — without any technical overhead.
            </p>
        </div>

        <div class="flex flex-col items-center gap-12">
            ${stepsData.map((step, index) => `
                <div class="w-full bg-white shadow-lg rounded-2xl p-8 text-center animate-fade-in">
                    <div class="flex flex-col items-center gap-3 mb-4">
                        <div class="text-primary/30 text-4xl font-bold">${step.number}</div>
                        ${step.icon}
                    </div>
                    <h3 class="text-2xl font-semibold mb-2">${step.title}</h3>
                    <p class="text-slate-500 text-lg">${step.description}</p>
                </div>
                ${index < stepsData.length - 1 ? arrowIcon : ''}
            `).join('')}
        </div>
    </div>
</section>
`;

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('how-it-works-wrapper');
    if (container) container.innerHTML = howItWorksHTML;
});
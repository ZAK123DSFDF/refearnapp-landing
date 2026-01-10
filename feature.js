// features.js
const featuresData = [
    {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-link text-primary"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>`,
        title: "Easy Integration",
        description: "Connect your web app to our platform in minutes with a streamlined setup flow. No complicated configuration — just plug in, integrate, and begin tracking instantly."
    },
    {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users text-primary"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
        title: "Custom Affiliate Portal",
        description: "Offer your affiliates a clean, branded dashboard where they can access links, track clicks, view earnings, and stay engaged with your affiliate program."
    },
    {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trending-up text-primary"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>`,
        title: "Performance Tracking & Payouts",
        description: "Track every referral and conversion in real-time with clear analytics. Manage commissions effortlessly and pay affiliates based on verified activity."
    },
    {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-badge-dollar-sign text-primary"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="M12 7v10"></path><path d="M15 10h-6a2 2 0 1 0 0 4h6"></path></svg>`,
        title: "Flexible Reward Duration",
        description: "Choose how long affiliates earn commissions — 2 months, 3 months, or more. Customize reward periods to match your SaaS pricing model and growth strategy."
    }
];

const featuresHTML = `
<section id="features" class="py-20">
    <div class="max-w-5xl mx-auto px-4">
        <div class="text-center mb-16 animate-fade-in">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">
                Everything You Need for <span class="text-blue-600">Affiliate Growth</span>
            </h2>
            <p class="text-xl text-slate-500 max-w-3xl mx-auto">
                A complete affiliate infrastructure refined for SaaS teams—built to help you onboard affiliates faster, track performance seamlessly, and scale revenue with confidence.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            ${featuresData.map((feature, index) => `
                <div class="animate-fade-in animation-delay-${index * 100}">
                    <div class="glass-card p-8 rounded-2xl h-full flex flex-col items-start transition-all duration-300 hover:shadow-md border border-border">
                        <div class="p-3 bg-primary/10 rounded-xl mb-6">
                            ${feature.icon}
                        </div>
                        <h3 class="text-xl font-bold mb-3">${feature.title}</h3>
                        <p class="text-slate-500 leading-relaxed">${feature.description}</p>
                    </div>
                </div>
            `).join('')}
        </div>
    </div>
</section>
`;

document.addEventListener('DOMContentLoaded', () => {
    const featuresContainer = document.getElementById('features-wrapper');
    if (featuresContainer) {
        featuresContainer.innerHTML = featuresHTML;
    }
});
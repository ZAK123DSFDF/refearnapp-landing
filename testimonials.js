// testimonials.js
const testimonialsData = [
    {
        quote: "AffiliateSaaS transformed our partner program. What used to take hours of manual work each week now happens automatically. Our affiliate revenue has increased by 215% in just 6 months.",
        author: "Sarah Johnson",
        role: "CMO",
        company: "TechFlow SaaS"
    },
    {
        quote: "The elegant design and intuitive interface make managing our affiliates a breeze. It's the perfect blend of simplicity and powerful features.",
        author: "Michael Chen",
        role: "Head of Growth",
        company: "AnalyticsPro"
    },
    {
        quote: "As someone who's tried every affiliate platform out there, I can confidently say this is the best solution for SaaS companies. Integration was smooth and our partners love the dashboard.",
        author: "Emma Williams",
        role: "Partnership Lead",
        company: "CloudSecurity"
    },
    {
        quote: "Switching to AffiliateSaaS was the best decision we made this year. The automation alone saves us dozens of hours every month.",
        author: "David Miller",
        role: "Founder",
        company: "ScaleOps"
    }
];

const testimonialsHTML = `
<section id="testimonials" class="py-20 px-6">
    <div class="max-w-5xl mx-auto px-4">
        <div class="text-center mb-16 animate-fade-in">
            <h2 class="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Loved by SaaS Companies
            </h2>
            <p class="text-xl text-slate-500 max-w-3xl mx-auto">
                Hear from businesses that have transformed their growth with our affiliate platform.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            ${testimonialsData.map((t, index) => `
                <div class="animate-fade-in animation-delay-${(index + 1) * 200}">
                    <div class="glass-card p-8 rounded-2xl h-full border border-border flex flex-col justify-between">
                        <div>
                            <div class="flex gap-1 mb-4">
                                ${Array(5).fill(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="text-yellow-500"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>`).join('')}
                            </div>
                            <p class="text-lg text-slate-500 italic mb-6">"${t.quote}"</p>
                        </div>
                        <div>
                            <p class="font-bold text-foreground">${t.author}</p>
                            <p class="text-sm text-slate-500">${t.role}, ${t.company}</p>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    </div>
</section>
`;

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('testimonials-wrapper');
    if (container) container.innerHTML = testimonialsHTML;
});
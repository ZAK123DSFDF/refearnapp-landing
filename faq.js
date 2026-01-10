// faq.js
const faqData = [
    {
        question: "Can I try RefearnApp for free?",
        answer: "Yes! You can try RefearnApp completely free for 14 days. During your trial, you’ll have full access to all features—no credit card required. This allows you to explore the dashboard, set up your affiliate program, and understand how RefearnApp can help grow your SaaS."
    },
    {
        question: "Which platforms does RefearnApp support?",
        answer: "RefearnApp currently supports Stripe and Paddle for subscription tracking and payment reporting. We’re actively working on adding more integrations to support a wider range of billing platforms in the future."
    },
    {
        question: "How do I pay my affiliates?",
        answer: "At the moment, you can export a complete CSV payout file directly from your dashboard. This CSV contains all affiliate earnings for the selected period and can be used to send payments quickly and easily through PayPal. We plan to introduce additional payout options and automated payment flows in future updates to make the process even more seamless."
    },
    {
        question: "Can I set how long affiliates get paid?",
        answer: "Absolutely. RefearnApp allows you to define how long an affiliate should continue receiving commissions. You can configure both the duration value and the time unit—days, weeks, or months—giving you complete flexibility over your commission structure."
    }
];

// Note: Removed "hidden" from faq-content so scrollHeight works for animations
const faqHTML = `
<section id="faq" class="py-24 px-6">
    <div class="max-w-3xl mx-auto text-center mb-12">
        <h2 class="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Frequently Asked Questions
        </h2>
        <p class="text-lg text-slate-500 mt-4">
            Answers to the most common questions about RefearnApp.
        </p>
    </div>

    <div class="max-w-3xl mx-auto animate-fade-in">
        <div class="space-y-4">
            ${faqData.map((item, index) => `
                <div class="border-b border-border">
                    <button class="faq-trigger w-full py-6 flex items-center justify-between text-left font-medium text-lg hover:text-primary transition-all focus:outline-none" data-target="faq-${index}">
                        <span>${item.question}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="faq-icon transition-transform duration-300"><path d="m6 9 6 6 6-6"/></svg>
                    </button>
                    <div id="faq-${index}" class="faq-content overflow-hidden transition-all duration-300 ease-in-out">
                        <div class="pb-6 text-slate-500 leading-relaxed">
                            ${item.answer}
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    </div>
</section>
`;

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('faq-wrapper');
    if (container) {
        container.innerHTML = faqHTML;
        initFaqLogic();
    }
});

function initFaqLogic() {
    const triggers = document.querySelectorAll('.faq-trigger');
    const contents = document.querySelectorAll('.faq-content');

    // Set initial state: all contents closed and invisible
    contents.forEach(content => {
        content.style.maxHeight = '0px';
        content.style.opacity = '0';
    });

    triggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const targetId = trigger.getAttribute('data-target');
            const content = document.getElementById(targetId);
            const icon = trigger.querySelector('.faq-icon');

            // Check if THIS item is currently open
            const isOpen = content.style.maxHeight !== '0px';

            // 1. Close all items (Accordion behavior)
            contents.forEach(c => {
                c.style.maxHeight = '0px';
                c.style.opacity = '0';
            });
            document.querySelectorAll('.faq-icon').forEach(i => {
                i.style.transform = 'rotate(0deg)';
            });

            // 2. If it was closed, open it now
            if (!isOpen) {
                // We use scrollHeight to get the exact pixel height for the animation
                content.style.maxHeight = content.scrollHeight + 'px';
                content.style.opacity = '1';
                icon.style.transform = 'rotate(180deg)';
            }
        });
    });
}
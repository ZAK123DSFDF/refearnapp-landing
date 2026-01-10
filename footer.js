// footer.js
const currentYear = new Date().getFullYear();

const footerHTML = `
<footer class="bg-secondary py-16 px-3">
    <div class="max-w-5xl mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between gap-12">
            <div class="max-w-sm space-y-4">
                ${getLogoHTML("h-10")}
                <p class="text-slate-500">
                    The most elegant way to build your affiliate marketing program for your SaaS business.
                </p>
            </div>

            <div>
                <h4 class="font-medium mb-4">Explore</h4>
                <ul class="space-y-2">
                    <li><a href="#features" class="text-slate-500 hover:text-foreground transition-colors">Features</a></li>
                    <li><a href="#how-it-works" class="text-slate-500 hover:text-foreground transition-colors">How It Works</a></li>
                    <li><a href="#testimonials" class="text-slate-500 hover:text-foreground transition-colors">Testimonials</a></li>
                    <li><a href="#pricing" class="text-slate-500 hover:text-foreground transition-colors">Pricing</a></li>
                </ul>
            </div>
        </div>

        <div class="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p class="text-sm text-slate-500">
                &copy; ${currentYear} RefearnApp. All rights reserved.
            </p>

            <div class="flex space-x-4 mt-4 md:mt-0 text-sm">
                <a href="/terms" class="text-slate-500 hover:text-foreground transition-colors">Terms of Service</a>
                <a href="/privacy-policy" class="text-slate-500 hover:text-foreground transition-colors">Privacy Policy</a>
                <a href="/refund-policy" class="text-slate-500 hover:text-foreground transition-colors">Refund Policy</a>
            </div>
        </div>
    </div>
</footer>
`;

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('footer-wrapper');
    if (container) container.innerHTML = footerHTML;
});
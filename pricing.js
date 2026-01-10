// pricing.js

const PRICING_MODE = "BOTH";

const featuresList = [
    { name: "Unlimited affiliates signup", pro: true, ultimate: true },
    { name: "Unlimited revenue from affiliate", pro: true, ultimate: true },
    { name: "PayPal mass payout", pro: true, ultimate: true },
    { name: "Custom domain", pro: true, ultimate: true },
    { name: "Affiliate page customization", pro: true, ultimate: true },
    { name: "Integrate with Stripe and Paddle", pro: true, ultimate: true },
    { name: "Cookie attribution customization", pro: true, ultimate: true },
    { name: "Set commission durations", pro: true, ultimate: true },
    { name: "1 organization", pro: true, ultimate: false },
    { name: "Unlimited organizations", pro: false, ultimate: true },
    { name: "Up to 3 team member invitations", pro: true, ultimate: false },
    { name: "Unlimited team member invitations", pro: false, ultimate: true },
];

const renderFeatures = (isUltimatePlan) => {
    return featuresList
        .filter(f => isUltimatePlan ? f.ultimate : f.pro)
        .map(f => {
            const isLimited = !isUltimatePlan && (f.name.includes("1 organization") || f.name.includes("3 team member"));
            const icon = isLimited ? '<span class="text-red-500">❌</span>' : '<span class="text-primary">✔️</span>';
            const textColor = isLimited ? 'text-red-500/80' : 'text-inherit';
            return `<li class="flex items-start gap-2 text-sm ${textColor}">${icon} <span>${f.name}</span></li>`;
        }).join('');
};

const pricingHTML = `
<section id="pricing" class="py-24 bg-secondary/30 overflow-hidden">
    <div class="max-w-5xl mx-auto px-4 md:px-6 text-center">
        <h2 class="text-3xl md:text-5xl font-bold mb-4 tracking-tight px-4">Simple, Transparent Pricing</h2>
        <p class="text-slate-500/80 max-w-2xl mx-auto text-base md:text-lg mb-12 px-4">
            Everything you need to launch and scale your affiliate program. 
        </p>
        
        ${PRICING_MODE === "BOTH" ? `
        <div class="flex flex-col items-center gap-6 mb-12 w-full px-2">
            <div class="relative bg-gray-200/50 p-1 md:p-1.5 rounded-2xl inline-flex border border-border w-full max-w-[340px] md:max-w-md">
                <div class="absolute -top-4 -left-2 md:-left-6 z-10">
                    <span class="bg-yellow-400 text-black text-[10px] md:text-xs font-black px-3 py-1 rounded-lg shadow-lg transform -rotate-12 inline-block border-2 border-white uppercase tracking-wider">
                        Special Offer
                    </span>
                </div>
                <button onclick="toggleBilling('PURCHASE')" id="btn-purchase" class="flex-1 flex items-center justify-center px-3 md:px-8 py-2.5 md:py-3 rounded-xl font-bold transition-all bg-primary text-white shadow-md text-xs md:text-base whitespace-nowrap">One-Time</button>
                <button onclick="toggleBilling('SUBSCRIPTION')" id="btn-subscription" class="flex-1 px-3 md:px-8 py-2.5 md:py-3 rounded-xl font-bold transition-all text-slate-600 text-xs md:text-base whitespace-nowrap">Subscription</button>
            </div>
            <div id="sub-cycle-toggle" class="hidden animate-fade-in w-full flex justify-center">
                <div class="bg-white/50 p-1 rounded-xl inline-flex border border-border text-xs md:text-sm">
                    <button onclick="setCycle('MONTHLY')" id="cycle-monthly" class="px-4 py-1.5 rounded-lg font-semibold bg-primary text-white whitespace-nowrap shadow-sm">Monthly</button>
                    <button onclick="setCycle('YEARLY')" id="cycle-yearly" class="px-4 py-1.5 rounded-lg font-semibold text-slate-500 flex items-center gap-1 whitespace-nowrap hover:text-slate-700">
                        Yearly <span id="yearly-badge" class="text-[9px] md:text-[10px] bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded-md font-bold shrink-0 uppercase">2 Months Free</span>
                    </button>
                </div>
            </div>
        </div>
        ` : ''}

        <div class="flex flex-wrap justify-center gap-8 items-stretch px-2">
            <div class="bg-white border border-border p-8 rounded-[2rem] w-full max-w-[340px] shadow-sm hover:shadow-md transition-all flex flex-col text-left">
                <div class="mb-8">
                    <div class="flex items-center gap-2 mb-2">
                        <div class="p-2 bg-slate-100 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-slate-600"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-5c1.62-2.2 5-3 5-3"/><path d="M12 15v5s3.03-.55 5-2c2.2-1.62 3-5 3-5"/></svg>
                        </div>
                        <h3 class="text-2xl font-bold">Pro</h3>
                    </div>
                    <div class="flex flex-col">
                        <div class="flex items-baseline gap-1">
                            <span class="text-4xl font-bold tracking-tight text-slate-900" id="price-pro">$199</span>
                            <span class="text-slate-500 text-sm font-medium" id="cycle-pro">one-time</span>
                        </div>
                        <div id="save-pro" class="text-emerald-500 text-sm font-bold mt-1 h-5 opacity-0 transition-opacity flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                            <span id="save-pro-text"></span>
                        </div>
                    </div>
                </div>
                <ul class="space-y-4 mb-8 flex-grow text-slate-600">
                    ${renderFeatures(false)}
                </ul>
                <a href="/signup" class="block text-center w-full py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all hover:scale-[1.02] active:scale-95">Start 14-Day Trial</a>
            </div>

            <div class="bg-slate-900 text-white border-2 border-primary p-8 rounded-[2rem] w-full max-w-[340px] shadow-2xl transition-all relative overflow-hidden flex flex-col text-left hover:scale-[1.02]">
                <div class="absolute top-0 right-0 bg-primary text-white text-[10px] font-black px-4 py-1.5 rounded-bl-xl uppercase tracking-widest">Most Popular</div>
                <div class="mb-8">
                    <div class="flex items-center gap-2 mb-2">
                        <div class="p-2 bg-white/10 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><path d="m13 2-2 10h9L7 22l2-10H0L13 2z"/></svg>
                        </div>
                        <h3 class="text-2xl font-bold text-white">Ultimate</h3>
                    </div>
                    <div class="flex flex-col">
                        <div class="flex items-baseline gap-1">
                            <span class="text-4xl font-bold text-primary tracking-tight" id="price-ultimate">$299</span>
                            <span class="text-slate-400 text-sm font-medium" id="cycle-ultimate">one-time</span>
                        </div>
                        <div id="save-ultimate" class="text-emerald-400 text-sm font-bold mt-1 h-5 opacity-0 transition-opacity flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                            <span id="save-ultimate-text"></span>
                        </div>
                    </div>
                </div>
                <ul class="space-y-4 mb-8 flex-grow">
                    ${renderFeatures(true)}
                </ul>
                <a href="/signup" class="block text-center w-full py-4 bg-primary text-white rounded-2xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 active:scale-95">Start 14-Day Trial</a>
            </div>
        </div>
    </div>
</section>
`;

let currentBillingMode = 'PURCHASE';
let currentCycle = 'MONTHLY';

function toggleBilling(mode) {
    currentBillingMode = mode;
    const isSub = mode === 'SUBSCRIPTION';
    const cycleToggle = document.getElementById('sub-cycle-toggle');

    if(isSub) cycleToggle.classList.remove('hidden');
    else {
        cycleToggle.classList.add('hidden');
        // Reset sub-cycle to monthly when switching to one-time
        setCycle('MONTHLY');
    }

    updatePrices();

    const baseBtn = "flex-1 flex items-center justify-center px-3 md:px-8 py-2.5 md:py-3 rounded-xl font-bold transition-all text-xs md:text-base whitespace-nowrap";
    document.getElementById('btn-purchase').className = !isSub ? `${baseBtn} bg-primary text-white shadow-md` : `${baseBtn} text-slate-600`;
    document.getElementById('btn-subscription').className = isSub ? `${baseBtn} bg-primary text-white shadow-md` : `${baseBtn} text-slate-600`;
}

function setCycle(cycle) {
    currentCycle = cycle;
    updatePrices();

    const btnMonthly = document.getElementById('cycle-monthly');
    const btnYearly = document.getElementById('cycle-yearly');
    const badge = document.getElementById('yearly-badge');

    if (cycle === 'MONTHLY') {
        btnMonthly.className = "px-4 py-1.5 rounded-lg font-semibold bg-primary text-white shadow-sm whitespace-nowrap";
        btnYearly.className = "px-4 py-1.5 rounded-lg font-semibold text-slate-500 flex items-center gap-1 whitespace-nowrap hover:text-slate-700";
        badge.className = "text-[9px] md:text-[10px] bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded-md font-bold shrink-0 uppercase";
    } else {
        btnYearly.className = "px-4 py-1.5 rounded-lg font-semibold bg-primary text-white shadow-sm flex items-center gap-1 whitespace-nowrap";
        btnMonthly.className = "px-4 py-1.5 rounded-lg font-semibold text-slate-500 hover:text-slate-700 whitespace-nowrap";
        badge.className = "text-[9px] md:text-[10px] bg-yellow-400 text-black px-1.5 py-0.5 rounded-md font-black shrink-0 uppercase";
    }
}

function updatePrices() {
    const proEl = document.getElementById('price-pro');
    const ultEl = document.getElementById('price-ultimate');
    const proCycle = document.getElementById('cycle-pro');
    const ultCycle = document.getElementById('cycle-ultimate');
    const saveProEl = document.getElementById('save-pro');
    const saveUltEl = document.getElementById('save-ultimate');

    if (currentBillingMode === 'PURCHASE') {
        proEl.innerText = '$199';
        ultEl.innerText = '$299';
        proCycle.innerText = 'one-time';
        ultCycle.innerText = 'one-time';
        saveProEl.classList.add('opacity-0');
        saveUltEl.classList.add('opacity-0');
    } else {
        proCycle.innerText = '/ month';
        ultCycle.innerText = '/ month';

        if (currentCycle === 'MONTHLY') {
            proEl.innerText = '$25';
            ultEl.innerText = '$40';
            saveProEl.classList.add('opacity-0');
            saveUltEl.classList.add('opacity-0');
        } else {
            proEl.innerText = '$21';
            ultEl.innerText = '$33';

            // Calculate Dollar Savings: (MonthlyPrice * 12) - (YearlyPrice * 12)
            const proSaved = (25 * 12) - (21 * 12);
            const ultSaved = (40 * 12) - (33 * 12);

            saveProEl.innerText = `Save $${proSaved} / year`;
            saveUltEl.innerText = `Save $${ultSaved} / year`;

            saveProEl.classList.remove('opacity-0');
            saveUltEl.classList.remove('opacity-0');
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('pricing-wrapper');
    if (container) container.innerHTML = pricingHTML;
});
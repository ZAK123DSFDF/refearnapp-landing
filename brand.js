const getLogoHTML = (sizeClass = "h-9") => `
    <div class="flex items-center gap-2 cursor-pointer hover:opacity-90 transition-opacity" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
        <img src="./refearnapp.svg" alt="RefearnApp" class="${sizeClass} w-auto">
        <span class="font-bold text-2xl tracking-tight">
            <span class="text-foreground">Refearn</span><span class="text-primary">App</span>
        </span>
    </div>
`;
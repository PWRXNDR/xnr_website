document.addEventListener('DOMContentLoaded', (event) => {
    console.log("Initializing Lottie");

    lottie.loadAnimation({
        container: document.getElementById('lottie-code-1'), 
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: "material_for_use/X&R website/js/floating_icons/system-solid-34-code.json" 
    });

    lottie.loadAnimation({
        container: document.getElementById('lottie-code-2'), 
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'floating_icons/system-solid-34-api.json' 
    });

    lottie.loadAnimation({
        container: document.getElementById('lottie-code-3'), 
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'floating_icons/system-solid-34-analytics.json' 
    });
})
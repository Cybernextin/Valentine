window.onload = () => {
    // 1. GSAP Typing Effect
    if (typeof gsap !== 'undefined') {
        const title = document.getElementById('typing-text');
        if (title) {
            const originalText = title.innerText;
            title.innerText = "";
            gsap.to(title, {
                duration: 2,
                text: originalText,
                ease: "none",
                delay: 0.5
            });
        }
    }

    // 2. Runaway "No" Button Logic (index.html)
    const runawayBtn = document.getElementById('runaway-btn');
    if (runawayBtn) {
        const moveBtn = (e) => {
            // Prevent scrolling on mobile when trying to tap the button
            if (e.type === 'touchstart') e.preventDefault();

            const padding = 50;
            const maxX = window.innerWidth - runawayBtn.offsetWidth - padding;
            const maxY = window.innerHeight - runawayBtn.offsetHeight - padding;

            const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
            const randomY = Math.max(padding, Math.floor(Math.random() * maxY));

            runawayBtn.style.position = 'fixed';
            runawayBtn.style.left = `${randomX}px`;
            runawayBtn.style.top = `${randomY}px`;
            runawayBtn.style.zIndex = "1000";
            runawayBtn.style.transition = "all 0.2s ease-out";
        };

        runawayBtn.addEventListener('mouseenter', moveBtn);
        runawayBtn.addEventListener('touchstart', moveBtn, { passive: false });
    }

    // 3. Manual Flip Logic (gift.html)
    const cards = document.querySelectorAll('.flip-card');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            this.classList.toggle('flipped');
        });
    });
};

// 4. Floating Hearts Logic
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart-float';
    
    // Choose between heart images
    const heartImage = Math.random() > 0.5 ? 'heart1.webp' : 'heart2.webp';
    heart.style.backgroundImage = `url('${heartImage}')`;
    
    heart.style.left = Math.random() * 100 + 'vw';
    const size = Math.random() * 20 + 15 + 'px';
    heart.style.width = size;
    heart.style.height = size;
    heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
    
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 7000);
}

// Adjust heart frequency for mobile performance
const heartSpeed = window.innerWidth < 768 ? 1000 : 800;
setInterval(createHeart, heartSpeed);
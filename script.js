// ========================
// SMOOTH SCROLL BEHAVIOR
// ========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========================
// CTA BUTTON FUNCTIONALITY
// ========================
const ctaButtons = document.querySelectorAll('.cta-button');
ctaButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Replace this URL with your actual booking link
        const bookingUrl = 'https://calendly.com/aline-beck0805/30min'; // Update this
        window.open(bookingUrl, '_blank');
        // Or you can use: window.location.href = bookingUrl;
    });
});

// ========================
// NAVBAR SCROLL EFFECT
// ========================
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
    
    lastScroll = currentScroll;
});

// ========================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe problem cards
document.querySelectorAll('.problem-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Observe step cards
document.querySelectorAll('.step').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
});

// Observe benefit cards
document.querySelectorAll('.benefit-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
});

// ========================
// COUNTER ANIMATION (Optional)
// ========================
// You can add this to show stats if needed
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const counter = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// ========================
// RESPONSIVE NAVIGATION TOGGLE
// ========================
// You can expand this for mobile menu functionality later
const navLinks = document.querySelector('.nav-links');
if (window.innerWidth < 768) {
    // Mobile specific behavior can be added here
}

// ========================
// FORM VALIDATION (if you add contact form later)
// ========================
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ========================
// TRACKING & ANALYTICS (Optional)
// ========================
// Add your analytics tracking here
// Example for Google Analytics:
// gtag('event', 'page_view', { page_path: '/' });

// Track CTA button clicks
ctaButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        console.log(`CTA Button ${index} clicked`);
        // Send analytics event
        if (window.gtag) {
            gtag('event', 'cta_click', {
                'button_position': index
            });
        }
    });
});

// ========================
// PRELOAD LOGO IMAGE
// ========================
const logoImg = new Image();
logoImg.src = 'logo.svg';

console.log('GiftMatch landing page loaded successfully!');

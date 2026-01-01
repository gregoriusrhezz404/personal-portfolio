// 1. Sticky Navbar & Navbar Shrink Animation
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 2. Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
});

// 3. Scroll Reveal Animation (Fade In / Slide In)
// Menggunakan Intersection Observer API untuk performa lebih baik
const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');

const revealOptions = {
    threshold: 0.15, // Elemen muncul saat 15% terlihat
    rootMargin: "0px 0px -50px 0px"
};

const revealOnScroll = new IntersectionObserver(function(entries, revealOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('active');
            revealOnScroll.unobserve(entry.target); // Hentikan observasi setelah animasi berjalan sekali
        }
    });
}, revealOptions);

revealElements.forEach(el => {
    revealOnScroll.observe(el);
});

// 4. Mouse Movement Animation (Parallax Effect)
// Kode spesifik dari request user
const img = document.querySelector('.cursor-img');

if (img) { // Cek apakah elemen ada untuk menghindari error di halaman lain
    document.addEventListener('mousemove', (e) => {
        // Logika: Mencari selisih posisi mouse dari tengah layar
        // Dibagi 30 agar pergerakan tidak terlalu liar (semakin besar angka, semakin halus)
        const x = (window.innerWidth / 2 - e.clientX) / 30;
        const y = (window.innerHeight / 2 - e.clientY) / 30;

        // Terapkan transform
        img.style.transform = `translate(${-x}px, ${-y}px)`;
    });
}
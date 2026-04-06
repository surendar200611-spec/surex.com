/* Surex.com Interactive Logic */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Header Scroll Effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
            header.querySelector('.nav-container').style.padding = '0.7rem 2rem';
        } else {
            header.classList.remove('scrolled');
            header.querySelector('.nav-container').style.padding = '1rem 2rem';
        }
    });

    // 2. Scroll Reveal Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => {
        revealObserver.observe(el);
    });

    // 3. Mobile Menu Toggle (Functional logic)
    const menuBtn = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('mobile-active');
            menuBtn.classList.toggle('is-open');
            
            // Prevent scrolling when menu is open
            if (navLinks.classList.contains('mobile-active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        });
    }

    // 4. Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            console.log('Form Submitted:', data);
            
            // Show success message
            const originalBtnText = contactForm.querySelector('button').innerText;
            contactForm.querySelector('button').innerText = 'Message Sent! ✅';
            contactForm.reset();
            
            setTimeout(() => {
                contactForm.querySelector('button').innerText = originalBtnText;
            }, 3000);
            
            alert('Thank you for your message, Surendar M will get back to you soon!');
        });
    }

    // 5. Smooth Scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                const headerOffset = 100;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // 6. Typing Effect for Hero (Micro-animation)
    const highlight = document.querySelector('.highlight');
    if (highlight) {
        const text = highlight.innerText;
        highlight.innerText = '';
        let i = 0;
        
        function type() {
            if (i < text.length) {
                highlight.innerText += text.charAt(i);
                i++;
                setTimeout(type, 150);
            }
        }
        
        setTimeout(type, 1000); // Start after hero delay
    }
});

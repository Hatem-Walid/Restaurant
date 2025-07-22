import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    // Custom Cursor
    const cursor = document.querySelector('.cursor-effect');
    
    // Mobile Menu
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');
    
    if (mobileMenuBtn && navMenu) {
      mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
      });
    }

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 80,
            behavior: 'smooth'
          });
          navMenu.classList.remove('active');
        }
      });
    });

    // Steak Animation
    const steakRaw = document.getElementById('steak-raw');
    const steakCooked = document.getElementById('steak-cooked');
    
    if (steakRaw && steakCooked) {
      setInterval(() => {
        if (steakRaw.style.opacity === '1') {
          steakRaw.style.opacity = '0';
          steakCooked.style.opacity = '1';
        } else {
          steakRaw.style.opacity = '1';
          steakCooked.style.opacity = '0';
        }
      }, 3000);
    }

    // Scroll Animation
    const scrollElements = document.querySelectorAll('.scroll-animate');
    
    const handleScrollAnimation = () => {
      scrollElements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop <= window.innerHeight) {
          el.classList.add('visible');
        }
      });
    };
    
    window.addEventListener('scroll', handleScrollAnimation);
    handleScrollAnimation();

    // Cursor Effects
    document.addEventListener('mousemove', (e) => {
      if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
      }
    });
    
    document.querySelectorAll('a, button, input, textarea, .menu-item, .gallery-item').forEach(el => {
      el.addEventListener('mouseenter', () => {
        if (cursor) {
          cursor.style.transform = 'translate(-50%, -50%) scale(0.7)';
          cursor.style.backgroundColor = 'var(--gold)';
        }
      });
      el.addEventListener('mouseleave', () => {
        if (cursor) {
          cursor.style.transform = 'translate(-50%, -50%) scale(1)';
          cursor.style.backgroundColor = 'rgba(212, 175, 55, 0.3)';
        }
      });
    });

  }, []);

  return (
    <>
      {/* ضع هنا كل محتوى HTML الأصلي من <body> */}
      <div className="cursor-effect"></div>
      <nav className="fixed w-full z-50 bg-black bg-opacity-20">
        {/* ... */}
      </nav>
      {/* ... باقي الأقسم ... */}
    </>
  );
}

export default App;
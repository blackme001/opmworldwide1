// Self-XSS Console Warning (Paste Protection)
console.log(
  "%cSTOP!",
  "color: #e53935; font-size: 50px; font-weight: bold; font-family: system-ui, -apple-system, sans-serif; text-shadow: 2px 2px 4px rgba(0,0,0,0.1);"
);
console.log(
  "%cThis is a browser feature intended for web developers. If someone told you to copy and paste code here to enable a feature or \"hack\" someone's account, it is a scam and will give them access to your account and personal information.",
  "color: #212121; font-size: 16px; font-family: system-ui, -apple-system, sans-serif; line-height: 1.5;"
);
console.log(
  "%cFor your safety, do not paste code here unless you fully understand what it does.",
  "color: #e53935; font-size: 14px; font-family: system-ui, -apple-system, sans-serif; font-weight: bold;"
);

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Header on Scroll
  const header = document.querySelector('.site-header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 2. Mobile Menu Toggle (Austin Stone Style)
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileDrawer = document.querySelector('.nav-mobile-drawer');
  const closeBtn = document.querySelector('.mobile-close-btn');
  const body = document.body;

  function toggleMobileMenu() {
    mobileDrawer.classList.toggle('active');
    if (mobileDrawer.classList.contains('active')) {
      body.style.overflow = 'hidden';
      // Optional: Fade out main content slightly
      document.querySelector('main')?.style.setProperty('filter', 'brightness(0.5)');
    } else {
      body.style.overflow = '';
      document.querySelector('main')?.style.setProperty('filter', '');
    }
  }

  if (menuToggle && mobileDrawer) {
    menuToggle.addEventListener('click', toggleMobileMenu);
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', toggleMobileMenu);
  }

  // 3. Scroll Reveal Animation using IntersectionObserver
  const revealElements = document.querySelectorAll('.reveal');

  const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  };

  const revealOnScroll = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add('active');
        // Optional: Stop observing once revealed
        observer.unobserve(entry.target);
      }
    });
  }, revealOptions);

  revealElements.forEach(el => {
    revealOnScroll.observe(el);
  });

  // 4. Tabs Logic (for Resources section)
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  if (tabBtns.length > 0 && tabPanes.length > 0) {
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Remove active class from all
        tabBtns.forEach(b => b.classList.remove('active'));
        tabPanes.forEach(p => p.classList.remove('active'));

        // Add active class to clicked tab and corresponding pane
        btn.classList.add('active');
        const targetId = btn.getAttribute('data-target');
        document.getElementById(targetId).classList.add('active');
      });
    });
  }

  // 5. Watch Live Interactive Button (Mobile Toggle)
  const watchTrigger = document.querySelector('.watch-trigger');
  const watchContainer = document.querySelector('.watch-live-container');

  if (watchTrigger && watchContainer) {
    watchTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      watchContainer.classList.toggle('active');
    });

    document.addEventListener('click', () => {
      watchContainer.classList.remove('active');
    });
  }

  // 6. Custom Cursor
  const cursor = document.createElement('div');
  cursor.classList.add('custom-cursor');
  document.body.appendChild(cursor);
  document.body.classList.add('custom-cursor-active');

  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateCursor() {
    // Easing for smooth follow effect
    cursorX += (mouseX - cursorX) * 0.2;
    cursorY += (mouseY - cursorY) * 0.2;
    cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  // Hover states for cursor
  const interactiveElements = document.querySelectorAll('a, button, .branch-card, .btn');
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hovering'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hovering'));
  });

  // 7. Magnetic Buttons
  const magneticButtons = document.querySelectorAll('.btn');
  magneticButtons.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      // move button slightly towards mouse
      btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });

  // 8. Number Counters (Intersection Observer)
  const counterElements = document.querySelectorAll('.counter');
  const counterObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const targetNumber = parseInt(target.getAttribute('data-target'), 10);
        const duration = 2000; // ms
        let start = null;

        function step(timestamp) {
          if (!start) start = timestamp;
          const progress = Math.min((timestamp - start) / duration, 1);
          // easeOutQuart
          const easeProgress = 1 - Math.pow(1 - progress, 4);
          const currentCount = Math.floor(easeProgress * targetNumber);
          target.innerText = currentCount + (target.getAttribute('data-suffix') || '');
          if (progress < 1) {
            window.requestAnimationFrame(step);
          } else {
            target.innerText = targetNumber + (target.getAttribute('data-suffix') || '');
          }
        }
        window.requestAnimationFrame(step);
        obs.unobserve(target);
      }
    });
  }, { threshold: 0.5 });

  counterElements.forEach(el => counterObserver.observe(el));

  // 9. Page Transitions
  // Intercept links
  document.querySelectorAll('a').forEach(link => {
    // Only intercept local HTML links
    if (link.hostname === window.location.hostname && link.getAttribute('target') !== '_blank' && link.getAttribute('href') && !link.getAttribute('href').startsWith('#') && !link.getAttribute('href').startsWith('javascript')) {
      link.addEventListener('click', (e) => {
        // Prevent default if it's not a modifier key click
        if (!e.ctrlKey && !e.metaKey && !e.shiftKey) {
          e.preventDefault();
          const targetUrl = link.href;
          document.body.classList.add('fade-out');
          setTimeout(() => {
            window.location.href = targetUrl;
          }, 400); // match CSS transition duration
        }
      });
    }
  });

  // Fade in on load / back button caching
  window.addEventListener('pageshow', (e) => {
    if (e.persisted) {
      document.body.classList.remove('fade-out');
    }
  });
  // Initial load
  document.body.classList.remove('fade-out');

  // 10. Parallax Effect
  const parallaxElements = document.querySelectorAll('.parallax');
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    parallaxElements.forEach(el => {
      const speed = el.getAttribute('data-speed') || 0.2;
      el.style.transform = `translate3d(0, ${scrollY * speed}px, 0)`;
    });
  });

  // 11. Vanilla Tilt Initialization
  if (typeof VanillaTilt !== 'undefined') {
    VanillaTilt.init(document.querySelectorAll(".branch-card, .news-card, .event-card, .giving-card"), {
      max: 8,
      speed: 400,
      glare: true,
      "max-glare": 0.05,
      scale: 1.02
    });
  }

});

// 7. Mobile Sub-menu Accordion
const mobileDropdowns = document.querySelectorAll('.mobile-dropdown-trigger');
mobileDropdowns.forEach(trigger => {
  trigger.addEventListener('click', (e) => {
    e.preventDefault();
    const parent = trigger.parentElement;
    parent.classList.toggle('active');
  });
});


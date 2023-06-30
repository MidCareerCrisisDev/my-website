// Smooth scrolling to section when clicking on nav links
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
  
    for (const link of navLinks) {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const target = document.querySelector(event.target.getAttribute('href'));
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    }
  });
  
  window.addEventListener('scroll', function() {
    var backToTopButton = document.querySelector('.back-to-top');
    if (window.pageYOffset > 100) {
      backToTopButton.classList.add('show');
    } else {
      backToTopButton.classList.remove('show');
    }
  });
  
  document.querySelector('.back-to-top').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });




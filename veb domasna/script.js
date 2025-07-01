const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, {
      threshold: 0.1
    });

    sections.forEach(section => {
      observer.observe(section);
    });


    const form = document.querySelector('.contact-form');

form.addEventListener('submit', e => {
  e.preventDefault(); 

  form.reset(); 

  
  document.getElementById('hero').scrollIntoView({ behavior: 'smooth' });
});
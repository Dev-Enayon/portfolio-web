// Fade-in on scroll
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
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

// Animate skill bars
const skillFills = document.querySelectorAll(".skill .fill");

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.transition = "width 1s ease-in-out";
      entry.target.classList.add("fill-animate");
    }
  });
}, {
  threshold: 0.5
});

skillFills.forEach(bar => {
  skillObserver.observe(bar);
});


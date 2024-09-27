document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section");
  const navLinks = document.querySelectorAll(".nav-links li a");

  // Function to remove 'active' class from all links
  function removeActiveClasses() {
    navLinks.forEach((link) => link.classList.remove("active"));
  }

  // Callback for when a section enters the viewport
  function observerCallback(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.id;
        removeActiveClasses();

        // Add 'active' class to the corresponding nav link
        navLinks.forEach((link) => {
          if (link.getAttribute("href").substring(1) === sectionId) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  // IntersectionObserver options
  const observerOptions = {
    root: null, // observes in the viewport
    threshold: 0.6, // triggers when 60% of the section is visible
  };

  // Creating the observer
  const observer = new IntersectionObserver(observerCallback, observerOptions);

  // Observing each section
  sections.forEach((section) => observer.observe(section));
});

// Add animation when section comes into view
window.addEventListener("scroll", function() {
    var sections = document.querySelectorAll("section");
    sections.forEach(function(section) {
      if (isElementInViewport(section)) {
        section.classList.add("visible");
      }
    });
  
    var projects = document.querySelectorAll(".project");
    projects.forEach(function(project) {
      if (isElementInViewport(project)) {
        project.classList.add("visible");
      }
    });
  });
  
  // Function to check if an element is in the viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
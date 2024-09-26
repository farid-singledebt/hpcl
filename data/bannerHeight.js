// Function to set the carousel height
function setCarouselHeight() {
  const header = document.querySelector("header");
  const navbar = document.querySelector("nav");
  const carousel = document.querySelector("#banner-carousel");

  // Get viewport height
  const viewportHeight = window.innerHeight;

  // Get the total height of the header and navbar
  const headerHeight = header.offsetHeight;
  const navbarHeight = navbar.offsetHeight;

  // Calculate the remaining height for the carousel
  const carouselHeight = viewportHeight - headerHeight - navbarHeight;

  // Set the height of the carousel
  carousel.style.height = `${carouselHeight}px`;

  // Set the height of the carousel images
  const carouselItems = document.querySelectorAll(".banner-item img");
  carouselItems.forEach((item) => {
    item.style.height = `${carouselHeight}px`;
    item.style.objectFit = "cover";
  });
}

// Run the function when the page loads
window.addEventListener("load", setCarouselHeight);

// Recalculate when the window is resized
window.addEventListener("resize", setCarouselHeight);

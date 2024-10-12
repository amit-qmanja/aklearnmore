let slideIndex = 1;
showSlides(slideIndex);

// Show first slide immediately when the page loads
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  // Check if slides and dots are correctly selected
  if (slides.length === 0) {
    console.error("No slides found with the class 'mySlides'.");
    return; // Exit the function if no slides exist
  }
  if (dots.length === 0) {
    console.error("No dots found with the class 'dot'.");
    return; // Exit the function if no dots exist
  }

  // Ensure the slideIndex is within bounds
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove "active" class from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Show the current slide and highlight the corresponding dot
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Dot controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

// Auto-slide every 3 seconds (3000 milliseconds)
let slideInterval = setInterval(function () {
  plusSlides(1);
}, 5000);

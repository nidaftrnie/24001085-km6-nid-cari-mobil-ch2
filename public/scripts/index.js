const sewaButton = document.getElementById("sewa-btn");
const carsContainer = document.querySelector(".cars-container");
const carCard = document.querySelector("#car-card");
const searchForm = document.querySelector("#search-form");
const navItems = document.querySelectorAll(
  'a[href="#ourservice"], a[href="#whyus"], a[href="#testimonial"], a[href="#faq"]'
);

searchForm.style.display = "none";
// Add click event listener to the "Mulai Sewa Mobil" button
sewaButton.addEventListener("click", function (event) {
  event.preventDefault();
  // Remove all content within the cars-container
  searchForm.style.display = "block";
  carsContainer.style.display = "none";
  // Hide the "Mulai Sewa Mobil" button
  sewaButton.style.display = "none";
});

navItems.forEach((navItem) => {
  navItem.addEventListener("click", function (event) {
    event.preventDefault();
    searchForm.style.display = "none";
    carsContainer.style.display = "block";
    sewaButton.style.display = "block";
    carCard.style.display = "none";
  });
});

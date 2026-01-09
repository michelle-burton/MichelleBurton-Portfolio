
document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const designItems = document.querySelectorAll(".design-item");
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const category = button.getAttribute("data-category");

            designItems.forEach(item => {
                if (category === "all" || item.getAttribute("data-category") === category) {
                    const parentElement = item.parentElement;
                    if (parentElement) { // Check if a parent element exists
                        parentElement.style.display = "block"; // Set the display style
                    }
                    item.style.display = "block";
                } else {
                    const parentElement = item.parentElement;
                    if (parentElement) { // Check if a parent element exists
                        parentElement.style.display = "none"; // Set the display style
                    }
                    item.style.display = "none";
                }
            });
        });
    });


});

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const navLinks = document.querySelectorAll(".navbar .nav-link");
      console.log('Nav Links after delay:', navLinks);
      // Get the current page filename (e.g. "about.html")
      const currentPage = window.location.pathname.split("/").pop();
      navLinks.forEach(link => {
            
        // Remove any existing active class
        link.classList.remove("active");

        // Extract the href filename from the link
        const linkPage = link.getAttribute("href").split("/").pop();
        if (linkPage === currentPage) {
        link.classList.add("active");
        }
    });
  }, 300); // wait 0.3 seconds
});




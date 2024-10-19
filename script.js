// Wait for the DOM content to be fully loaded before running JS
document.addEventListener("DOMContentLoaded", function() {
    
    // Smooth scrolling to section when clicking navigation links
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetID = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetID);
            
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: "smooth"
            });
        });
    });
    
    // Show alert when a section is clicked
    const sections = document.querySelectorAll(".section");
    
    sections.forEach(section => {
        section.addEventListener('click', function() {
            alert(`You clicked on the ${this.querySelector("h2").textContent} section!`);
        });
    });
});

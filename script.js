// script.js
// JavaScript code to handle the sidebar menu toggle
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("menuToggle").addEventListener("click", toggleMenu);
});
    function toggleMenu() {
      if (document.getElementById("mySidebar").style.width === "250px") {
        closeMenu();
      } else {
        openMenu();
      }
    }
    
    function openMenu() {
      document.getElementById("mySidebar").style.width = "250px";
      document.getElementById("main").style.marginRight = "250px";
    }
    
    function closeMenu() {
      document.getElementById("mySidebar").style.width = "0";
      document.getElementById("main").style.marginRight = "0";
    }
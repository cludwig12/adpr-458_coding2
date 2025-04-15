const toggleBtn = document.getElementById("toggle-button");
const navlistItems = document.getElementById("nav-menu-list");

toggleBtn.addEventListener('click',function () {
    navlistItems.classList.toggle("active");
});
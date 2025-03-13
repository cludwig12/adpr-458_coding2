const toggleBtn = document.getElementById("toggle-button");
const navlistItems = document.getElementById (nav-menu-list);
console.log("Howdy1")

toggleBtn.addEventListener('click', () => () {
    navlistItems.classList.toggle('active');
})
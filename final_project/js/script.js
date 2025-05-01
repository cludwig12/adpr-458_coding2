const toggleBtn = document.getElementById("toggle-button");
const navlistItems = document.getElementById("nav-menu-list");

toggleBtn.addEventListener('click',function () {
    navlistItems.classList.toggle("active");
});

$('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true
});
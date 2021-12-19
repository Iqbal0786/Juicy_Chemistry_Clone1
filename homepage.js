var slideIndex = 0;
    showSlides();

    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
        setTimeout(showSlides, 8000); // Change image every 2 seconds
}
document.querySelector("#loginicon").addEventListener("click", function () {
        window.location.href = "Login.html"
})
    document.querySelector("#carticon").addEventListener("click", function () {
        window.location.href = "cart.html"
    })
    document.querySelector("#select-nav").addEventListener("click", function () {
        window.location.href = "product.html"
    })

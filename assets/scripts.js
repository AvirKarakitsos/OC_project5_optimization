$(document).ready(function() {
    $('.gallery').mauGallery({
        columns: {
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 3
        },
        lightBox: true,
        lightboxId: 'myAwesomeLightbox',
        showTags: true,
        tagsPosition: 'top'
    });
});

document.querySelector(".carousel-btn.btn-pause").addEventListener("click", function() {
    $('.carousel').carousel("pause")
    this.classList.add("btn-hidden")
    document.querySelector(".carousel-btn.btn-play").classList.remove("btn-hidden")
})

document.querySelector(".carousel-btn.btn-play").addEventListener("click", function() {
    $('.carousel').carousel("cycle")
    this.classList.add("btn-hidden")
    document.querySelector(".carousel-btn.btn-pause").classList.remove("btn-hidden")
})
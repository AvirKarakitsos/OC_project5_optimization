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

document.querySelector(".carousel-inner")
    .innerHTML += `<div class="carousel-item">
                    <img srcset="./assets/images/slider/nicholas-green-nPz8akkUmDI-unsplash-500.jpg 500w, ./assets/images/slider/nicholas-green-nPz8akkUmDI-unsplash.jpg 1200w"
                        sizes="100vw"
                        src="./assets/images/slider/nicholas-green-nPz8akkUmDI-unsplash.jpg"
                        class="d-block w-100" 
                        alt="photo d'une foule applaudissant à un événement"
                        loading="lazy">
                    </div>
                    <div class="carousel-item">
                    <img srcset="./assets/images/slider/edward-cisneros-3_h6-1NPDGw-unsplash-500.jpg 500w, ./assets/images/slider/edward-cisneros-3_h6-1NPDGw-unsplash.jpg 1200w" 
                        sizes="100vw"
                        src="./assets/images/slider/edward-cisneros-3_h6-1NPDGw-unsplash.jpg"
                        class="d-block w-100" 
                        alt="photo prise lors d'un mariage"
                        loading="lazy">
                    </div>`
const data = [
    {
        id: 0,
        src: "./assets/images/gallery/entreprise/jason-goodman-tHO1_OuKbg0-unsplash.jpg",
        alt: "photo prise lors d\'un meeting",
        tag: "Entreprises" 
    },
    {
        id: 1,
        src: "./assets/images/gallery/entreprise/ali-morshedlou-WMD64tMfc4k-unsplash.jpg",
        alt: "photo d'un entrepreneur",
        tag: "Entreprises" 
    },
    {
        id: 2,
        src: "./assets/images/gallery/mariage/hannah-busing-RvF2R_qMpRk-unsplash.jpg",
        alt: "photo de mariés se donnant la main",
        tag: "Mariages" 
    },
    {
        id: 3,
        src: "./assets/images/gallery/portraits/ade-tunji-rVkhWWZFAtQ-unsplash.jpg", 
        alt: "photo d'un artiste",
        tag: "Portrait" 
    },
    {
        id: 4,
        src: "./assets/images/gallery/concerts/aaron-paul-wnX-fXzB6Cw-unsplash.jpg", 
        alt: "photo prise lors d'un concert",
        tag: "Concert" 
    },
    {
        id: 5,
        src: "./assets/images/gallery/mariage/jakob-owens-SiniLJkXhMc-unsplash.jpg", 
        alt: "photo de mariés marchant sur la plage",
        tag: "Mariages" 
    },
    {
        id: 6,
        src: "./assets/images/gallery/portraits/nino-van-prattenburg--443cl1uR_8-unsplash.jpg", 
        alt: "photo d'un modèle",
        tag: "Portrait" 
    },
    {
        id: 7,
        src: "./assets/images/gallery/concerts/austin-neill-hgO1wFPXl3I-unsplash.jpg", 
        alt: "photo prise lors d'un concert",
        tag: "Concert" 
    },
    {
        id: 8,
        src: "./assets/images/gallery/entreprise/mateus-campos-felipe-Fsgzm8N0hIY-unsplash.jpg",
        alt: "photo d'une femme souriante devant son ordinateur",
        tag:  "Entreprises" 
    }
]

const categories = ["Concert","Entreprises","Mariages","Portrait"]
const list = document.querySelector(".nav-pills")
const modal = document.getElementById("modal")
const myDiv = document.querySelector('.modal-dialog')
let categorySelected = "all"

//Pause carousel
// document.querySelector(".carousel-btn.btn-pause").addEventListener("click", function() {
//     $('.carousel').carousel("pause")
//     this.classList.add("btn-hidden")
//     document.querySelector(".carousel-btn.btn-play").classList.remove("btn-hidden")
// })

//Active carousel
// document.querySelector(".carousel-btn.btn-play").addEventListener("click", function() {
//     $('.carousel').carousel("cycle")
//     this.classList.add("btn-hidden")
//     document.querySelector(".carousel-btn.btn-pause").classList.remove("btn-hidden")
// })

//Add list of categories
for(let category of categories) {
    list.innerHTML += `<li class="nav-item active">
                            <span class="nav-link"  data-images-toggle="${category}">
                                <a href="#gallery" aria-label="catégorie ${category}">${category}</a>
                            </span>
                        </li>`
}

//Click Event on filter categories
document.querySelectorAll(".nav-item").forEach(element => {
    element.addEventListener("click", function() {
        let child = element.children[0]

        if (child.dataset.imagesToggle !== "all") {
            let dataFilter = data.filter(value => value.tag === child.dataset.imagesToggle)
            addElements(dataFilter)
            categorySelected = child.dataset.imagesToggle
        } else {
            addElements(data)
            categorySelected = "all"
        }

        document.querySelector(".nav-link.active").classList.remove("active")
        child.classList.add("active")
    })
})

//Open the modal with images in HTML
document.querySelectorAll('.gallery-item').forEach((image)=>{
    image.addEventListener("click",function(e) {
        openModal(e.target)
    })
})

//Open the modal with the full screen button
document.querySelector(".gallery-btn").addEventListener("click",function(){
    let dataFilter
    let img = document.createElement("img")

    if (categorySelected !== "all") {
        dataFilter = data.filter(value => value.tag === categorySelected)
    } else {
        dataFilter = data
    }
 
    img.src = dataFilter[0].src
    img.alt = dataFilter[0].alt
    img.dataset.id = dataFilter[0].id
    img.dataset.galleryTag = dataFilter[0].tag
    openModal(img)
})

//Close the modal
modal.addEventListener('mousedown', () => modal.style.display = "none")
myDiv.addEventListener('mousedown', (event) => event.stopPropagation())

//Close the modal with keyboard
window.addEventListener("keydown",function(e){
    if(e.key === "Escape" || e.key ==="Esc") {
        document.querySelector(".modal-body").innerHTML = ""
        modal.style.display = "none"
    }

    if(e.key === "Tab" && modal.style.display === "flex" ) {
        focusInModal(e)
    }
})

//Focus Element in the modal with keyboard
function focusInModal(e) {
    e.preventDefault()
    const elementFocus = Array.from(document.querySelectorAll('.btn-modal'))
    let index = elementFocus.findIndex(value => value === modal.querySelector(":focus"))
    index++
    if(index >= elementFocus.length) {
        index = 0
    }
    elementFocus[index].focus()
}

//Previous image in the modal
function prevImage() {
    let actual = document.querySelector('.lightboxImage')
    let prev
    let dataFilter = []
    let index
    
    if (categorySelected !== "all") {
        dataFilter = data.filter(value => value.tag === categorySelected)
    } else {
        dataFilter = data
    }

    index = dataFilter.findIndex(value => value.id === parseInt(actual.dataset.id))

    if(index === 0) {
        prev = dataFilter[dataFilter.length-1]
    } else {
        prev = dataFilter[index-1]
    }
   
    actual.src = prev.src
    actual.dataset.id = prev.id
    actual.alt = prev.alt
    actual.galleryTag = prev.galleryTag
}

//Next image in the modal
function nextImage() {
    let actual = document.querySelector('.lightboxImage')
    let next
    let dataFilter = []
    let index
     
    if (categorySelected !== "all") {
        dataFilter = data.filter(value => value.tag === actual.dataset.galleryTag)
    } else {
        dataFilter = data
    }

    index = dataFilter.findIndex(value => value.id === parseInt(actual.dataset.id))

    if(index === dataFilter.length-1) {
        next = dataFilter[0]
    } else {
        next = dataFilter[index+1]
    }
    actual.src = next.src
    actual.dataset.id = next.id
    actual.alt = next.alt
    actual.galleryTag = next.galleryTag
}

//Add one element to the DOM
function addOneElement(element){
    let gallery = document.querySelector(".gallery")
    let img = document.createElement("img")
 
    img.src = element.src
    img.alt = element.alt
    img.dataset.id = element.id
    img.dataset.galleryTag = element.tag
    img.addEventListener("click",function(e) {
        openModal(e.target)
    })
    
    gallery.appendChild(img)
}

//Add elements to the DOM
function addElements(table){
    let gallery = document.querySelector(".gallery")

    gallery.innerHTML = ""

    for(let element of table){
        addOneElement(element)
    }
}

//Open modal
function openModal(image) {
    modal.style.display = "flex"
    document.querySelector(".modal-body").innerHTML = ""
    document.querySelector(".modal-body").innerHTML = `<div class="mg mg-prev">
                                                            <button class="btn-modal" onclick="prevImage()" aria-label="précédent"><</button>
                                                        </div>
                                                        <img class="lightboxImage img-fluid" data-id=${image.dataset.id} data-gallery-tag=${image.dataset.galleryTag} src=${image.src} alt="${image.alt}"/>
                                                        <div class="mg mg-next">
                                                            <button class="btn-modal" onclick="nextImage()" aria-label="suivant">></button>
                                                        </div>`
}

const data = [
    {
        id: 0,
        src: "./assets/images/gallery/entreprise/jason-goodman-tHO1_OuKbg0-unsplash.jpg",
        alt: "photo prise lors d'un meeting",
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

//Pause carousel
document.querySelector(".carousel-btn.btn-pause").addEventListener("click", function() {
    $('.carousel').carousel("pause")
    this.classList.add("btn-hidden")
    document.querySelector(".carousel-btn.btn-play").classList.remove("btn-hidden")
})

//Active carousel
document.querySelector(".carousel-btn.btn-play").addEventListener("click", function() {
    $('.carousel').carousel("cycle")
    this.classList.add("btn-hidden")
    document.querySelector(".carousel-btn.btn-pause").classList.remove("btn-hidden")
})

//Add list of categories
for(let category of categories) {
    list.innerHTML += `<li class="nav-item active">
                            <span class="nav-link"  data-images-toggle="${category}">
                                <a href="#gallery" aria-label="catégorie ${category}">${category}</a>
                            </span>
                        </li>`
}

document.querySelectorAll(".nav-item").forEach(element => {
    
    element.addEventListener("click", function() {
        let child = element.children[0]

        if (child.dataset.imagesToggle !== "all") {
            let dataFilter = data.filter(value => value.tag === child.dataset.imagesToggle)
            addElements(dataFilter)
        } else {
            addElements(data)
        }

        document.querySelector(".nav-link.active").classList.remove("active")
        child.classList.add("active")
    })
})

//Add one element to the DOM
function addOneElement(element){
    let gallery = document.querySelector(".gallery")
    let img = document.createElement("img")
 
    img.src = element.src
    img.alt = element.alt
    img.dataset.galleryTag = element.tag
    
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
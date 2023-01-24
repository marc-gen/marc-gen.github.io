// image d'ordinateur à faire apparaître lorsque l'élément est visible
let big_ordi = document.querySelector(".mokup-about")

const observer = new IntersectionObserver(e=>{
    console.log(e[0].isIntersecting)
}
)
observer.observe(big_ordi)
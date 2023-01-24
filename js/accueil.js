  // image d'ordinateur à faire apparaître lorsque l'élément est visible
  let bonjour_titre = document.querySelector("#about-title")
  let big_ordi = document.querySelector(".mokup-about")
  
  const observer = new IntersectionObserver(e=>{
      console.log(e[0].isIntersecting)
      if(e[0].isIntersecting == true){
        big_ordi.classList.add('big-ordi-anim')
      }
  }
  )
  observer.observe(bonjour_titre )
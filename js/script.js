botonmusica = document.querySelector("#botonmusica")
audio_fondo = document.querySelector("#introcoscu")
cuadradito = document.querySelector("#cuadradito")
titulo = document.querySelector("#titulo")

botonmusica.addEventListener("click", () => {
    if (audio_fondo.paused){
        audio_fondo.load()
        audio_fondo.play()
    }else{
        audio_fondo.pause()
    }
    titulo.innerHTML= "pediloooo"
    document.body.classList.toggle("modooscuro")
})

cuadradito.addEventListener("click", () => {
    cuadradito.classList.toggle("circulito")
})
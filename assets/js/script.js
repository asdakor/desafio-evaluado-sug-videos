const iifeDOM = (() => {
    function funcionPrivada(url, id) {
        document.querySelector(`#${id}`).setAttribute("src", url)
    }
    return {
        funcionPublica(url, id) {
            funcionPrivada(url, id)
        }
    }
})()
class Multimedia {
    #url;
    constructor(url) {
        this.#url = url
    }

    get url() {
        return this.#url
    }

    setInicio() {
        return "Este método es para realizar un cambio en la URL del video"
    }
}

class Reproductor extends Multimedia {
    _id
    constructor(url, id) {
        super(url)
        this._id = id
    }

    playMultimedia() {
        iifeDOM.funcionPublica(this.url, this._id)
    }

    setInicio(segundos) {
        document.querySelector(`#${this._id}`).setAttribute("src", `${this.url}?start=${segundos}`)
    }
}

const musica = new Reproductor(`https://www.youtube.com/embed/ZRkvH0o9-v8?list=RDZRkvH0o9-v8`, "musica")
musica.playMultimedia()
const peliculas = new Reproductor("https://www.youtube.com/embed/5PSNL1qE6VY","peliculas")
peliculas.playMultimedia()
const series = new Reproductor("https://www.youtube.com/embed/5PSNL1qE6VY","series")
series.playMultimedia()

//el metodo funciona con peliculas, pero no con musica, restricciones de youtube??
musica.setInicio(60)
peliculas.setInicio(60)

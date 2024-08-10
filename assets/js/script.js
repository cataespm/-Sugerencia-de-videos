let IIFE = (() => {
  let setVideo = (url, id) => {
    document.getElementById(id).setAttribute("src", url);
  };

  return { setVideo };
})();

class Multimedia {
  #url;
  constructor(url) {
    this.#url = url;
  }
  get url() {
    return this.#url;
  }

  setInicio() {
    return "metodo para cambio url del video";
  }
}
class Reproductor extends Multimedia {
  #id;
  constructor(url, id) {
    super(url);
    this.#id = id;
  }

  playMultimedia() {
    IIFE.setVideo(this.url, this.#id);
  }

  setInicio(seg) {
    let nuevoUrl = `${this.url}&amp;start=${seg}`;
    IIFE.setVideo(nuevoUrl, this.#id);
  }
}

const musica = new Reproductor(
  "https://www.youtube.com/embed/5OuFnuhXUBc?si=qKqqI2HqhWEeI9LK",
  "musica"
);
const peliculas = new Reproductor(
  "https://www.youtube.com/embed/a7Dh5QoXv2c?si=Ltx9ddJuCo8cqPS_",
  "peliculas"
);
const series = new Reproductor(
  "https://www.youtube.com/embed/_1qGhChKL8s?si=lxwFudBITT0k0znT",
  "series"
);

musica.playMultimedia();
peliculas.playMultimedia();
series.playMultimedia();

peliculas.setInicio(20);
